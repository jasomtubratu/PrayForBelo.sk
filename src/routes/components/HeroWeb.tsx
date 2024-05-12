import { Title, Text, Container, Button, Box, Anchor } from '@mantine/core';
import classes from '../../css/HeroImageBackground.module.css';
import video from '../../video.mp4';
import { Link } from 'react-router-dom';

export default function HeroImageBackground() {
    return (
        <Box className={classes.container}>
            <Box className={classes.videoWrapper}>
                <video autoPlay loop muted className={classes.videoEl}>
                    <source src={video} type='video/mp4'></source>
                </video>
                
            </Box>
            <Box className={classes.contentWrapper}>
                <Box className={classes.inner}>
                    <Title className={classes.title}>
                        Adam Belko{' '}
                        <Text component="span" inherit className={classes.highlight}>
                            "Belo"
                        </Text>
                    </Title>

                    <Container size={640}>
                        <Text size="lg" className={classes.description}>
                            Je žiakom Strednej priemyselnej školy informačných technológií v Kysuckom Novom Meste. Vo voľnom čase sa vášnivo venuje všetkému, čo má kolesá a motor.
                        </Text>
                    </Container>

                    <Anchor component={Link} to="/#podpora">
                    <Box className={classes.controls}>
                        <Button className={classes.control} variant="white" size="lg">
                            Podporiť Adama
                        </Button>
                    </Box>
                    </Anchor>
                    
                </Box>
                
            </Box>

        </Box>
    );
}
