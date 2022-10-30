/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useMantineColorScheme, createStyles, Navbar, Group, Box, } from '@mantine/core';
import {
  IconHome,
  IconPhone,
  IconBriefcase,
  IconCode,
  IconUser,

} from '@tabler/icons';
import { ButtonToggle } from './ButtonToggle';
import LogoImage from './logoImage';


const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.lg,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },
  };
});

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'About', icon: IconUser },
  { link: '', label: 'Skills', icon: IconCode },
  { link: '', label: 'Projects', icon: IconBriefcase},
  { link: '', label: 'Contacts', icon: IconPhone },
  
];

export default function AppShell() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      style={{ paddingTop: 45, fontSize: 16, fontWeight: "bold"}}
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 250 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="left" >
   
                {/* <Image
                height={40}
                width={40}
                src={logoWhite}
                style={{filter: `invert(${logoColor}%)` }}
                />  */}
                <LogoImage ht="40px" wd="40px"/>
                <span style={{ fontWeight: "bold" }}>Thomas Maynard</span>

        </Group>
        <Box sx={{
            marginLeft: 25,
            }}>
        {links}
        </Box>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a> */}
        <ButtonToggle />
      </Navbar.Section>
    </Navbar>
  );
}