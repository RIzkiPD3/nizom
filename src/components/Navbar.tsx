'use client';

import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    backgroundColor: scrolled ? 'rgba(13, 13, 43, 0.85)' : 'transparent',
                    transition: 'all 0.35s ease',
                    py: 1,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                                sx={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #1A1F6B, #2D3DBA)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    sx={{ color: '#fff', fontWeight: 900, fontSize: '0.8rem' }}
                                >
                                    N
                                </Typography>
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1 }}
                            >
                                Nizom
                            </Typography>
                        </Box>

                        {/* Desktop Nav */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                background: 'rgba(255,255,255,0.12)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 50,
                                px: 2,
                                py: 0.5,
                                gap: 0.5,
                                border: '1px solid rgba(255,255,255,0.18)',
                            }}
                        >
                            {navLinks.map((link) => (
                                <Button
                                    key={link}
                                    sx={{
                                        color: '#fff',
                                        fontSize: '0.82rem',
                                        fontWeight: 500,
                                        px: 1.5,
                                        py: 0.6,
                                        borderRadius: 50,
                                        minWidth: 'unset',
                                        '&:hover': {
                                            background: 'rgba(255,255,255,0.15)',
                                        },
                                    }}
                                >
                                    {link}
                                </Button>
                            ))}
                        </Box>

                        {/* Mobile hamburger */}
                        <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 260,
                        background: '#0D0D2B',
                        color: '#fff',
                    },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map((link) => (
                        <ListItem key={link} disablePadding>
                            <ListItemButton onClick={() => setDrawerOpen(false)}>
                                <ListItemText
                                    primary={link}
                                    primaryTypographyProps={{ fontWeight: 500, color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
