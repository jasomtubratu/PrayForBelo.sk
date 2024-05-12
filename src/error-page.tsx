import { Image, Container, Title, Text, Button, SimpleGrid, Anchor } from '@mantine/core';
import classes from './css/NotFoundImage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundImage() {
    return (
        <Container className={classes.root}>
            <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
                <Image src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg" className={classes.mobileImage} />
                <div>
                    <Title className={classes.title}>Niečo nám tu nehraje do kariet...</Title>
                    <Text c="dimmed" size="lg">
                        Niekde nastala chyba, preto si na tejto bezpečnej stránke. Skús sa prosím vrátiť na domovskú stránku, tam by malo ísť všetko v poriadku!
                    </Text>
                    <Anchor component={Link} to="/">
                        <Button variant="outline" size="md" mt="xl" className={classes.control}>
                            Vrátiť sa
                        </Button>
                    </Anchor>
                </div>
            </SimpleGrid>
        </Container>
    );
}