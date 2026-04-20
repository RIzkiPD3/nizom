'use client';

import React from 'react';
import { Box, Typography, Grid, IconButton, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const footerLinks = {
    COMPANY: ['About', 'Services', 'Portfolio', 'Blog', 'Contact Us'],
    SERVICES: ['Web Development', 'App Development', 'QA & Testing', 'Technical Support'],
    PRODUCT: ['Point of Sale', 'Mini ERP'],
};

export default function Footer() {
    const primaryNavy = '#0F163D'; 

    return (
        <Box 
            sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                py: 5, 
                backgroundColor: '#F5F7FA' 
            }}
        >
            <Box
                sx={{
                    width: 1280,
                    height: 420,
                    borderRadius: '30px',
                    backgroundColor: primaryNavy,
                    opacity: 1,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: '60px 80px 30px 80px',
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            >
                <Grid container spacing={4}>
                    {/* Brand Section - DIPERBAIKI */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, letterSpacing: 1 }}>
                                    NIZOM SYSTEM
                                </Typography>
                            </Box>
                            <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 300 }}>
                                PT. Nizom Berkah Informasi<br />
                                Jl. Daud Raya No.1A, RT.2/RW.8, Sukabumi Utara,<br />
                                Kec. Kb. Jeruk, Kota Jakarta Barat, 11540
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                            {[InstagramIcon, LinkedInIcon, XIcon].map((Icon, index) => (
                                <IconButton 
                                    key={index}
                                    sx={{ color: '#fff', p: 0, '&:hover': { opacity: 0.7 } }}
                                >
                                    <Icon sx={{ fontSize: 24 }} />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Navigation Links - DIPERBAIKI */}
                    {Object.entries(footerLinks).map(([category, items]) => (
                        <Grid size={{ xs: 6, sm: 4, md: 2 }} key={category}>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    mb: 3,
                                    letterSpacing: 1
                                }}
                            >
                                {category}
                            </Typography>
                            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                {items.map((item) => (
                                    <Box component="li" key={item} sx={{ mb: 1.5 }}>
                                        <Typography
                                            component="a"
                                            href="#"
                                            sx={{
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: '0.85rem',
                                                textDecoration: 'none',
                                                transition: '0.3s',
                                                '&:hover': { color: '#fff' }
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    ))}

                    {/* Contact Us Section - DIPERBAIKI */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', mb: 3, letterSpacing: 1 }}>
                            CONTACT US
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                                nizomberkah@gmail.com
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                                0812-9157-0314
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright Section */}
                <Box sx={{ width: '100%' }}>
                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />
                    <Typography align="center" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                        Copyright © 2024 Nizom system. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}