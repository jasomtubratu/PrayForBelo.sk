import { Box, Container, SimpleGrid, Skeleton, Title, Image } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function Community() {
    const [skeletonVisible, setSkeletonVisible] = useState<boolean>(true);
    const [fotky, setFotky] = useState<Array<any>>([]);

    useEffect(() => {
        stiahnut();
    }, []);

    async function stiahnut() {
        setSkeletonVisible(true);
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/fotky", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 200) {
                const responseData = await response.json();
                setFotky(responseData);
                setSkeletonVisible(false);
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
    }
    return (
        <Box>
            <Title order={4} style={{ textAlign: "center", marginTop: "20px" }}>
                Chceme úprimne poďakovať všetkým, ktorí sa rozhodli darovať krv a tiež tým, ktorí zdieľali Adamov príbeh na sociálnych sieťach. Vaša podpora je nesmierne cenná a znamená pre Adama veľa.
            </Title>
            <Container my="md">
                <Skeleton visible={skeletonVisible} height="220px" mt="sm" >
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                    >
                        {
                            fotky && fotky?.map((item) => (
                                <Image
                                    src={item.image}
                                    alt="Fotka"
                                />
                            ))
                        }

                    </SimpleGrid>
                </Skeleton>
            </Container>
        </Box>
    )
}