import { Box, Container, Title, Text, Image } from "@mantine/core";

export default function KtoJeAdam() {
    return (
        <Box>
            <Title style={{ textAlign: "center", marginTop: "20px" }}>Kto je Adam?</Title>
            <Container my="sm">

                <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box style={{ order: 2, textAlign: "center" }}>
                        <Text>
                        Adam je 18-ročný chalan zo Žiliny. Jeho hobby je vŕtať sa vo všetkom čo má motor a kolesá. Je obľúbený vďaka svojej skromnosti, priateľskej povahy a solidarite. Momentálne sa aktívne venuje štúdiu a starostlivosti o svoje auto a motorku. Okrem toho je Adam známy pre svoje významné úspechy v oblasti programovania a robotiky.
                        </Text>
                    </Box>
                    <Box style={{ order: 1, marginRight: "20px" }}>
                        <Image alt="Adamová fotka" style={{ borderRadius: "20px", maxWidth: "100%", height: "auto" }} src="./pracuje.webp" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
