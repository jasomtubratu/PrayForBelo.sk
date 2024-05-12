import { Box, Button, Card, FileInput, SimpleGrid, Title, Text, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import Cookies  from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function NahratNovinku() {
    const [postImage, setPostImage] = useState<{ File: any }>({ File: "", });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()
    
    useEffect(() => {
        checkIfLogged();
    }, []);

    async function checkIfLogged() {
        if (!(Cookies.get("PotvrdilCookie") == "true")) {
            navigate("/")
            notifications.show({
                title: `Nemáš povolené Cookies!`,
                message: 'Pre správne fungovanie bezpečného prihlásenia, potrebujeme použiť súbory Cookies. Pokiaľ chceš toto nastavenie zmeniť, zájdi do Cookies Policy',
            });
        }
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
            } else {
                console.error("Kľúč neexistuje alebo nieje platný! Prosím prihláste sa!")
            }
        } catch (error) {
            console.error("Nastala chyba pri overení vášho tokenu! ", error)
        }
    }


    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFileUpload = async (e: any) => {
        const file = e;
        const base64 = await convertToBase64(file);

        setPostImage({ ...postImage, File: base64 });
    };

    async function uploadObrazok() {
        setButtonDisabled(true)
        notifications.show({
            title: `Spracovávam požiadavok!`,
            message: 'Práve prebieha spracovanie tvojej požiadavky! Prosím počkaj chvíľku!',
        });
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/uploadnovinka", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ key: Cookies.get("authToken"), image: postImage, name: title, description: description })
            })
            if (response.ok) {
                console.log("Úspešne som nahral tento obrázok")
                notifications.show({
                    title: `Úspešne som nahral túto novinku!`,
                    message: 'Úspešne som nahral tento obrázok!',
                });
            } else {
                notifications.show({
                    title: `Niekde nastala chyba!`,
                    message: 'Fúha pri overovaní nastala nejaká tá chybička! Viac povedať neviem',
                });
            }
        } catch (error) {
            console.error("Nastala chyba pri overení vášho tokenu! ", error)
            notifications.show({
                title: `Niekde nastala chyba!`,
                message: 'Fúha pri overovaní nastala nejaká tá chybička! Viac povedať neviem',
            });
        }
        setButtonDisabled(false)
    }


    return (
        <Box>
            <SimpleGrid spacing="md" cols={{ base: 1, sm: 1, md: 1, lg: 1 }}>
                <Title style={{textAlign: "center"}}>VŽDY SI TO SKONTROLUJ! PRETOŽE PO UPLOADNE TO NEZMAŽEŠ!</Title>
                <Text style={{textAlign: "center"}}>Len vďaka Tomášovi</Text>
                <Card>
                    <Title order={1}>Nahrať novú novinku!</Title>
                    <TextInput label="Nadpis" onChange={(e) => {setTitle(e.target.value);}}></TextInput>
                    <TextInput label="Link na článok" onChange={(e) => {setDescription(e.target.value);}}></TextInput>
                    <FileInput label="Obrázok" placeholder='Nahrať Obrázok' accept='image/*' onChange={handleFileUpload} mt="md" />
                    <Button mt="md" className='confirmbutton' variant="filled" onClick={async (e) => { e.preventDefault(); await uploadObrazok() }} disabled={buttonDisabled} >Nahrať novú novinku</Button>
                </Card>
            </SimpleGrid>
        </Box>
    )
}