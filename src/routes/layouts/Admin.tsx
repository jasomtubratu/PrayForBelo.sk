import { useEffect, useState } from 'react';
import { Tooltip, UnstyledButton, Stack, rem, AppShell, Burger, Group, Text, Box } from '@mantine/core';
import {IconHome2,IconDeviceMobileMessage,IconLogout, IconNews} from '@tabler/icons-react';
import classes from '../../css/AdminNavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { useDisclosure } from '@mantine/hooks';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Domček', navigator: "/admin" },
  { icon: IconDeviceMobileMessage, label: 'Obrázky', navigator: "/admin/obrazky" },
  { icon: IconNews, label: 'Novinky', navigator: "/admin/novinky" },
];

export default function NavbarMinimal({ children }: any) {
  const [active, setActive] = useState(0);
  const [opened, { toggle }] = useDisclosure();
  //@ts-ignore
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!(windowWidth <= 768)) toggle()
  }, []);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index)
        navigate(link.navigator)
      }}
    />
  ));

  async function LogOut() {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: Cookies.get('authToken') }),
      });
      if (response.ok) {
        console.log('Kľúč bol vymazaný! Odhľasujem ťa z Administrátorského prostredia!');
        navigate('/login'); 
        Cookies.remove('authToken');
      } else {
        console.error(
          'Kľúč neexistuje alebo nieje platný! Pozrite sa do sekcie NetWork pre viac informácii'
        );
      }
    } catch (error) {
      console.error(
        'Nastala chyba pri overení vášho tokenu! Pozrite sa do sekcie NetWork pre viac informácii',
        error
      );
    }
  }

  return (
    <AppShell
    header={{ height: 60 }}
    navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    padding="md"
  >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link to="/">
          <Text fw={700}>#PrayForBelo</Text>
          </Link>
          
        </Group>
      </AppShell.Header>

      <AppShell.Navbar w={'80px'} pr={0}>
        <nav className={classes.navbar}>
          <Box className={classes.navbarMain}>
            <Stack justify="center" gap={0}>
              {links}
            </Stack>
          </Box>
          <Stack justify="center" gap={0}>
            <NavbarLink onClick={LogOut} icon={IconLogout} label="Odhlásiť sa" />
          </Stack>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main
        pl={opened ? '120px' : '10px'}
        style={{ minWidth: windowWidth <= 768 ? '120px' : '10px' }}
      >
        {children}
      </AppShell.Main>
      </AppShell>

  );
}