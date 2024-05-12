import { Container, Group, Burger, Text, Anchor, Menu, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../../css/HeaderSimple.module.css';
import { Link } from 'react-router-dom';
import { IconSettings, IconMessageCircle, IconPhoto, } from '@tabler/icons-react';

const links = [
    { link: '/', label: 'Domov' },
    { link: '/nehoda', label: 'Nehoda' },
    { link: '/komunita', label: 'Komunita' },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={classes.link}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Anchor component={Link} to="/">
                    <Text fw={700}>#PrayForBelo</Text>
                </Anchor>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Menu shadow="md" width={200} opened={opened}>
                    <Menu.Target>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label>Domov</Menu.Label>
                        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                            <Anchor component={Link} to="/">
                                Domov
                            </Anchor>
                        </Menu.Item>
                        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                            <Anchor component={Link} to="/nehoda">
                                Nehoda
                            </Anchor>
                        </Menu.Item>
                        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                            <Anchor component={Link} to="/komunita">
                                Komunita
                            </Anchor>
                        </Menu.Item>

                        <Menu.Divider />
                    </Menu.Dropdown>
                </Menu>
            </Container>
        </header>
    );
}