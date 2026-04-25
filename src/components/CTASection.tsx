'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function CTASection() {
    // Background halaman, harus sama dengan warna masking cutout di bawah
    const pageBgColor = '#F5F7FA'; 
    const primaryNavy = '#0F163D'; // Warna biru gelap utama

    return (
        <Box sx={{ py: 10, background: pageBgColor, display: 'flex', justifyContent: 'center' }}>
            <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center' }}>
                
                {/* === MAIN CONTAINER (Do You Have Ideas) === */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: 1280,
                        height: { xs: 'auto', md: 280 },
                        minHeight: { xs: 240, md: 280 },
                        borderRadius: '30px',
                        backgroundColor: primaryNavy,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        alignItems: { xs: 'center', lg: 'flex-start' },
                        justifyContent: { xs: 'center', lg: 'flex-start' },
                        p: { xs: 4, md: 0 },
                        overflow: 'hidden', // to contain the button if it spans on mobile
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        backgroundPosition: 'left center',
                    }}
                >
                    {/* Teks Kiri */}
                    <Box sx={{ 
                        position: { xs: 'relative', lg: 'absolute' }, 
                        top: { xs: 'auto', lg: 80 }, 
                        left: { xs: 'auto', lg: 80 }, 
                        zIndex: 2,
                        textAlign: { xs: 'center', lg: 'left' },
                        mb: { xs: 4, lg: 0 },
                        maxWidth: { xs: '100%', md: 720 },
                    }}>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#ffffff',
                                fontWeight: 800,
                                // dibuat lebih konservatif supaya aman saat zoom 125%+
                                fontSize: { xs: '2rem', sm: '2.35rem', md: '3.05rem', lg: '3.4rem' },
                                lineHeight: 1.03,
                                letterSpacing: { xs: 0, md: 0 },
                                mb: 1,
                                overflowWrap: 'anywhere',
                                maxWidth: { xs: '100%', md: 650 },
                            }}
                        >
                            Do You Have Ideas ?
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: { xs: '0.95rem', md: '1rem' },
                                letterSpacing: { xs: '1px', md: '2px' },
                                textTransform: 'lowercase',
                            }}
                        >
                            tell us about your ideas
                        </Typography>
                    </Box>

                    {/* === CUTOUT MASK === */}
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'block' },
                            position: 'absolute',
                            bottom: -1,
                            right: -1,
                            width: 442, 
                            height: 160, 
                            backgroundColor: pageBgColor,
                            borderTopLeftRadius: '50px',
                            zIndex: 1,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -50,
                                right: 0,
                                width: 50,
                                height: 50,
                                backgroundColor: 'transparent',
                                borderBottomRightRadius: '50px',
                                boxShadow: `25px 25px 0 25px ${pageBgColor}`,
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: -50,
                                width: 50,
                                height: 50,
                                backgroundColor: 'transparent',
                                borderBottomRightRadius: '50px',
                                boxShadow: `25px 25px 0 25px ${pageBgColor}`,
                            }
                        }}
                    />

                    {/* === GET STARTED BUTTON (Sesuai Layout Figma) === */}
                    <Box
                        sx={{
                            position: { xs: 'relative', lg: 'absolute' },
                            bottom: { lg: 0 },
                            right: { lg: 0 },
                            // Dimensi Figma & Mobile
                            width: { xs: '100%', sm: 300, lg: 412 },
                            height: { xs: 70, lg: 130 },
                            borderRadius: '100px',
                            backgroundColor: { xs: '#407BFF', lg: primaryNavy },
                            opacity: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // Padding Figma
                            pt: { xs: '10px', lg: '20px' },
                            pr: { xs: '20px', lg: '30px' },
                            pb: { xs: '10px', lg: '20px' },
                            pl: { xs: '20px', lg: '30px' },
                            // Jarak antar elemen (Teks & Ikon) - dikecilkan sedikit agar aman saat zoom
                            gap: { xs: '14px', lg: '24px' }, 
                            zIndex: 2,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(0.98)',
                                boxShadow: '0 10px 30px rgba(15, 22, 61, 0.4)'
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#ffffff',
                                // dibuat sedikit lebih kecil supaya tidak "mepet" saat zoom
                                fontSize: { xs: '1.2rem', sm: '1.35rem', lg: '1.85rem' },
                                fontWeight: 600,
                                lineHeight: 1,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Get Started
                        </Typography>

                        {/* Ikon Lingkaran Putih */}
                        <Box
                            sx={{
                                width: { xs: 44, md: 64 },
                                height: { xs: 44, md: 64 },
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0, 
                            }}
                        >
                            <ArrowOutwardIcon sx={{ color: '#2b52d9', fontSize: { xs: 24, md: 32 } }} />
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}