import { Title, Text, Container, Box, Divider, Image, Group, SimpleGrid, Button, Anchor } from '@mantine/core';
import { Dots } from './components/Dots';
import classes from '../css/HeroText.module.css';
import { Link } from 'react-router-dom';

export default function HeroText() {
    return (
        <Box>
            <Container className={classes.wrapper} size={1400}>
                <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
                <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
                <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

                <Box className={classes.inner}>
                    <Title className={classes.title}>
                        Nehoda{' '}
                        <Text component="span" className={classes.highlight} inherit>
                            Adama
                        </Text>
                    </Title>

                </Box>
            </Container>

            <Divider my="xs"></Divider>
            <Container my="sm">
                <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                    <Box>
                        <Text>
                           Večer piatok 20.10.2023 mal Adam belko nehodu ktora sa stala na Žitnej ulici v Žiline. Vodič vozidla VW Golf nerešpektoval dopravné značenie, daj prednosť v jazde a následne nabúral do Adama.
                        </Text>
                         Adam utrpel poranenia dolných aj horných končatín mal roztrhnutú cievu aj tepnu s masívnym krvácaním. Adamovi život zachránili 4 policajti ktorý boli hneď na mieste a dávali mu prvú pomoc ktora ho zachránila.
                        <Text>
                         Následne bol po príchode záchranárov prevezený do nemocnice.
                        </Text>
                        <Text>
                        Vodič vozidla sa na mieste podrobil dychovej skúške s negatívnym výsledkom.
                        </Text>
                      
                    </Box>
                </Box>
            </Container>

            <Divider my="xs"></Divider>

            <Container my="sm">
            <SimpleGrid
                        cols={{ base: 1, sm: 1, md: 2, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                        style={{marginTop: "20px"}}
                    >
                    <Group justify="center">
                        <Image src="./1.png"></Image>
                        <Anchor component={Link} to="https://www.facebook.com/hashtag/prayforbelo">
                        <Button>#PrayForBelo</Button>
                        </Anchor>
                    </Group>
                    <Group justify="center">
                        <Image src="./2.png"></Image>
                        <Anchor component={Link} to="https://www.facebook.com/nemocnicazilina/posts/724358579736374?ref=embed_post">
                        <Button>Žilinská Nemocnica</Button>
                        </Anchor>
                    </Group>
                    <Group justify="center">
                        <Image src="./3.png"></Image>
                        <Anchor component={Link} to="https://www.zilinak.sk/clanky/26028/video-po-dopravnej-nehode-v-ziline-skoncil-18-rocny-motorkar-v-nemocnici-vodic-auta-mu-nedal-prednost">
                        <Button>Nešťastie</Button>
                        </Anchor>
                    </Group>
                </SimpleGrid>
            </Container>
        </Box>
    );
}