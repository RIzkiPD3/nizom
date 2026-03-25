'use client';

import React from 'react';
import { Box, Container, Grid, IconButton, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const links = {
    Company: ['About Us', 'Careers', 'Our Team', 'Blog', 'Press'],
    Services: ['App Development', 'Quality Assurance', 'UI/UX Design', 'DevOps', 'Consulting'],
    Product: ['Portfolio', 'Case Studies', 'Pricing', 'Documentation', 'Support'],
};

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(160deg, #0D0D2B 0%, #111135 100%)',
                color: '#fff',
                pt: { xs: 7, md: 9 },
                pb: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {/* Brand column */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2.5 }}>
                            <Box
                                sx={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #2D3DBA, #1A1F6B)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '0.85rem' }}>
                                    N
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: 1 }}>
                                Nizom
                            </Typography>
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, mb: 3, maxWidth: 280 }}
                        >
                            We are a technology-driven company that specializes in delivering
                            innovative digital solutions that help businesses grow and thrive.
                        </Typography>

                        {/* Social icons */}
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                                <IconButton
                                    key={i}
                                    size="small"
                                    sx={{
                                        color: 'rgba(255,255,255,0.6)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        width: 34,
                                        height: 34,
                                        '&:hover': {
                                            color: '#fff',
                                            background: 'rgba(255,255,255,0.1)',
                                            borderColor: 'rgba(255,255,255,0.3)',
                                        },
                                    }}
                                >
                                    <Icon sx={{ fontSize: 16 }} />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Link columns */}
                    {Object.entries(links).map(([category, items]) => (
                        <Grid size={{ xs: 6, sm: 4, md: 2 }} key={category}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    color: '#fff',
                                    mb: 2.5,
                                    letterSpacing: 0.5,
                                }}
                            >
                                {category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                                {items.map((item) => (
                                    <Typography
                                        key={item}
                                        component="a"
                                        href="#"
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            fontSize: '0.82rem',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                            '&:hover': { color: '#fff' },
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                    ))}

                    {/* Contact column */}
                    <Grid size={{ xs: 12, sm: 12, md: 2 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                color: '#fff',
                                mb: 2.5,
                                letterSpacing: 0.5,
                            }}
                        >
                            Contact
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {[
                                { label: 'Email', value: 'hello@nizom.io' },
                                { label: 'Phone', value: '+62 812 3456 7890' },
                                { label: 'Address', value: 'Jakarta, Indonesia' },
                            ].map(({ label, value }) => (
                                <Box key={label}>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', mb: 0.2 }}>
                                        {label}
                                    </Typography>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>
                                        {value}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mt: 7, mb: 3 }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
                        © 2026 Nizom. All rights reserved.
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
                        Privacy Policy · Terms of Service
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
