import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";

import { useStyles } from "./styles";
import Image from 'next/image'
import Container from "@material-ui/core/Container";
import { useRouter } from 'next/router'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const [headersData, setHeadersData] = useState([
    {
      label: "Главная",
      href: "/",
      isActive: true
    },
    {
      label: "Продукт",
      href: "/product",
      isActive: false
    },
    {
      label: "О нас",
      href: "/about-us",
      isActive: false
    },
    {
      label: "Контакты",
      href: "/contact",
      isActive: false
    }
  ]);

  const { mobileView, drawerOpen } = state;
  const router = useRouter()


  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {headerLogo}
        <Box container display="flex" alignItems="center" justify="center" height="100%">{getMenuButtons()}</Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    }
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    }

    return (
      <Toolbar>
        <div style={{ flex: 1 }}>{headerLogo}</div>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon/>
        </IconButton>
        <Drawer
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices(handleDrawerClose)}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = (handleDrawerClose) => {
    return headersData.map(({ label, href }) => {
      return (
        <Grid container display="flex" justify="center">
          <Button key={label} onClick={() => {
            handleDrawerClose();
            router.push(href)
          }}>
            <MenuItem>{label}</MenuItem>
          </Button>
        </Grid>
      );
    });
  };

  const headerLogo = (
    <Image src="/header/logo.png" width={127} height={44} alt="logo"/>
  );

  useEffect(() => {
    setHeadersData(headersData.map(it => it.href === router.pathname ? ({ ...it, isActive: true }) : ({
      ...it,
      isActive: false
    })));
  }, [router.pathname])

  const getMenuButtons = () => {
    const clickDesktopButton = (label, href) => {
      router.push(href);
      setHeadersData(headersData.map(it => it.label === label ? ({ ...it, isActive: true }) : ({
        ...it,
        isActive: false
      })));
    }
    return headersData.map(({ label, href, isActive }) => (
      <Button
        onClick={() => clickDesktopButton(label, href)}
        {...{
          key: label,
          color: "inherit",
          to: href,
          className: isActive ? `${menuButton} ${menuButton}-active` : menuButton
        }}
      >
        {label}
      </Button>
    ));
  };

  return (
    <AppBar className={header}>
      <Container maxWidth="lg">
        {mobileView ? displayMobile() : displayDesktop()}
      </Container>
    </AppBar>
  );
}