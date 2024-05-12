import { Box, Group, Title, Text, Card, SimpleGrid, Container } from "@mantine/core";

export default function AboutMe() {

    const links = [
        { name: '1', nickname: '1' }, // tu boli mena ale gdpr chapes
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
        { name: '1', nickname: '1' },
    ];
    
    

    return (
        <Box>
            <Group>
                <img
                    style={{ width: "100%", height: "700px", objectFit: "cover" }}
                    src="https://cdn.discordapp.com/attachments/1059206158616903682/1165610002069860482/received_1103768651006665.jpg?ex=654779e8&is=653504e8&hm=626981c202f118c625630eeb1bf5437d2957cac0e54487fa4109e593b63a5fb3&"
                />
            </Group>
            <Title style={{ textAlign: "center", marginTop: "10px", marginBottom: "20px" }}>Členovia</Title>
            <Container my="md">
                <SimpleGrid
                    cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                    {links.map((link) => (
                        <Card shadow="sm" padding="lg" radius="sm" withBorder>
                            <Group justify="space-between" mt="sm" mb="xs">
                                <Text fw={500} variant="gradient" gradient={{ from: 'rgba(242, 242, 242, 1)', to: 'rgba(255, 255, 255, 1)', deg: 205 }}>{link.name} "{link.nickname}"</Text>
                            </Group>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
