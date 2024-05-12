import { Anchor, Group, Image, Text, Box } from '@mantine/core';
import classes from '../../css/FooterCentered.module.css';
import { Link } from 'react-router-dom';

const links = [
    { link: 'https://dieselmusidymic.sk/', label: 'Obchod' },
    { link: '/o-nas', label: 'O nás' },
    { link: '/cookies', label: 'Cookies Policy' },
];

export default function FooterCentered() {
    const items = links.map((link) => (
        <Anchor
            c="dimmed"
            key={link.label}
            component={Link}
            to={link.link}
            lh={1}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <Box className={classes.footer}>
            <div className={classes.inner}>
                <Image alt="Logo" className={classes.image} h={70} src="./logo.webp" />

                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <Anchor component={Link} to="https://github.com/ImBadTomas">
                        <Text>Created with ❤️</Text>
                    </Anchor>
                </Group>
            </div>
        </Box>
    );
}