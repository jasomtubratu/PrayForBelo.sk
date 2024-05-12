import { Box, Title, Text, Group, Anchor } from "@mantine/core";
import { IconBuildingBank, IconShirt } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Podporit() {
    return (
        <Box style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }} id="podpora">
            <Title>Podpora Adamovi</Title>
            <Text>Všetky vyzbierané peniaze pôjdu na rehabilitáciu Adama.</Text>
            <Text>(peniaze, ktoré nebudú potrebné, pošleme Žilinskej nemocnici).</Text>

            <Group justify="center" style={{ marginTop: "20px" }}>
                <IconBuildingBank />
                <Text fw={700}>SK1709000000005209662796</Text>
            </Group>
            <Text style={{marginTop: "20px"}}>Podporiť Adama, nákupom jeho merchu!</Text>
            <Text>Adamov sen je vytvoriť značku spojenú s tým, čo ho baví. Peniaze z predaja tovaru pôjdu na podporu jeho projektov.</Text>
            <Group justify="center" style={{ marginTop: "20px" }}>
                <IconShirt />
                <Anchor component={Link} to="https://dieselmusidymic.sk">
                    <Text>dieselmusidymic.sk</Text>
                </Anchor>
            </Group>
        </Box>
    )
}