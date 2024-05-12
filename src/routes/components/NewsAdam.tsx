import { Container, Box, Title, SimpleGrid, Card, Group, Image, Text, Anchor, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewsAdam() {
    const [response, setResponse] = useState<Array<any>>([]);

    useEffect(() => {
        stiahnut();
    }, []);

    async function stiahnut() {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/novinky", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 200) {
                const responseData = await response.json();
                setResponse(responseData);
            } else {
                notifications.show({
                    title: `Niekde nastala chyba!`,
                    message: 'Fúha pri získavaní noviniek nastala nejaká tá chybička! Viac povedať neviem',
                });
            }
        } catch (error) {
            notifications.show({
                title: `Niekde nastala chyba!`,
                message: 'Fúha pri získavaní noviniek nastala nejaká tá chybička! Viac povedať neviem',
            });
        }
    }

    return (
        <Container my="sm" id="newsAdam">
            <Box style={{ marginTop: "30px", textAlign: "center" }}>
                <Title>Novinky o Adamovi</Title>
                <Text>
                    Novinky sa týkajúce Adama a jeho pokroku v procese zotavovania.
                </Text>

                    <SimpleGrid
                        cols={{ base: 1, sm: 1, md: 2, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                        style={{marginTop: "20px"}}
                    >

                            {response.map((item) => (
                                <Card shadow="sm" padding="lg" radius="md" withBorder>
                                    <Card.Section>
                                        <Image
                                            src={item.image}
                                            height={160}
                                            alt="Norway"
                                        />
                                    </Card.Section>

                                    <Group justify="space-between" mt="md" mb="xs">
                                        <Text fw={500}>{item.name}</Text>
                                    </Group>

                                    <Anchor component={Link} to={item.description} size="sm">
                                        <Button>Dozvedieť sa viac</Button>
                                    </Anchor>

                                </Card>
                            ))
                            }

                    </SimpleGrid>

            </Box>
        </Container>
    )
}