import { useState, useEffect } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem, Box } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"
import "../css/Login.css"
import { notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

export default function InputTooltip() {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');


    useEffect(() => {
        checkIfAllowedCookies();
    }, []);

    async function checkIfAllowedCookies() {
        if (!(Cookies.get("PotvrdilCookie") == "true")) {
            navigate("/")
            notifications.show({
                title: `Nemáš povolené Cookies!`,
                message: 'Pre správne fungovanie bezpečného prihlásenia, potrebujeme použiť súbory Cookies. ',
            });
        } else {
            checkIfLogged();
        }
    }

    async function Login() {
        setButtonDisabled(true);
        const body = {
            "email": value,
            "password": value1,
        };
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });

            if (response.status === 200) {
                const responseData = await response.json();
                const key = responseData.key;
                Cookies.set("authToken", key, { expires: new Date(Date.now() + 2.592e+9) });
                navigate("/admin")
            } else if (response.status === 403) {
                notifications.show({
                    title: `Vaše údaje niesu správne!`,
                    message: 'Zadali ste nesprávne údaje! Preto vás do systému nepustím!',
                });
            } else if (response.status == 400) {
                notifications.show({
                    title: `Zadal si nejaké údaje?!`,
                    message: 'Nevidím, že by si nejaké údaje zadal! Si si istý?',
                });
            } else {
                notifications.show({
                    title: `Niekde nastala chyba!`,
                    message: 'Fúha pri overovaní nastala nejaká tá chybička! Viac povedať neviem',
                });
            }
        } catch (error) {
            notifications.show({
                title: `Niekde nastala chyba!`,
                message: 'Fúha pri overovaní nastala nejaká tá chybička! Viac povedať neviem',
            });
        }
        setButtonDisabled(false);
    }

    async function checkIfLogged() {
        notifications.show({
            title: `Pokúšam sa o autologin!`,
            message: 'Prebieha verifikácia tvôjho authTokenu! Prosím počkaj chvíľu...',
        });
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ key: Cookies.get("authToken") })
            })
            if (response.ok) {
                console.log("Kľúč je validný! Dávam ťa do administrátroského prostredia!")
                navigate("/admin")
                notifications.show({
                    title: `AutoLogin bol úspešný!`,
                    message: 'Automatické prihlásenie úspešne prešlo systémom(API)',
                });
            } else {
                console.error("Kľúč neexistuje alebo nieje platný! Prosím prihláste sa!")
                notifications.show({
                    title: `AutoLogin nebol úspešný!`,
                    message: 'Automatické prihlásenie nebolo úspešne! Prosím prihláste sa!',
                });
            }
        } catch (error) {
            console.error("Nastala chyba pri overení vášho tokenu! ", error)
        }
    }

    const rightSection = (
        <Tooltip
            label="Ukládame vaše dáta bezpečne!"
            position="top-end"
            withArrow
            transitionProps={{ transition: 'pop-bottom-right' }}
        >
            <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
                <Center>
                    <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </Center>
            </Text>
        </Tooltip>
    );


    return (
        <>
            <Box className='login'>
                <Box className='loginsection'>
                    <h1 className='nadpis'>Prihlásenie</h1>
                    <Box className='formlogin'>
                        <TextInput
                            rightSection={rightSection}
                            label="Zadajte váš email"
                            required
                            placeholder="Email"
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                        <PasswordInput
                            label="Zadajte vaše heslo"
                            required
                            placeholder="Heslo"
                            mt="md"
                            value={value1}
                            onChange={(e) => {
                                setValue1(e.target.value);
                            }}
                        />
                    </Box>
                    <button className='confirmbutton' onClick={async (e) => { e.preventDefault(); await Login() }} disabled={buttonDisabled}>Prihlásiť sa!</button>
                </Box>
            </Box>
        </>

    );
}