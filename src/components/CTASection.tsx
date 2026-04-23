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
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        justifyContent: { xs: 'center', md: 'flex-start' },
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
                        position: { xs: 'relative', md: 'absolute' }, 
                        top: { xs: 'auto', md: 80 }, 
                        left: { xs: 'auto', md: 80 }, 
                        zIndex: 2,
                        textAlign: { xs: 'center', md: 'left' },
                        mb: { xs: 4, md: 0 }
                    }}>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#ffffff',
                                fontWeight: 800,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                letterSpacing: '1px',
                                mb: 1,
                            }}
                        >
                            Do You Have Ideas ?
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: '1rem',
                                letterSpacing: '2px',
                                textTransform: 'lowercase',
                            }}
                        >
                            tell us about your ideas
                        </Typography>
                    </Box>

                    {/* === CUTOUT MASK === */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'block' },
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
                            position: { xs: 'relative', md: 'absolute' },
                            bottom: { md: 0 },
                            right: { md: 0 },
                            // Dimensi Figma & Mobile
                            width: { xs: '100%', sm: 300, md: 412 },
                            height: { xs: 70, md: 130 },
                            borderRadius: '100px',
                            backgroundColor: { xs: '#407BFF', md: primaryNavy },
                            opacity: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // Padding Figma
                            pt: { xs: '10px', md: '20px' },
                            pr: { xs: '20px', md: '30px' },
                            pb: { xs: '10px', md: '20px' },
                            pl: { xs: '20px', md: '30px' },
                            // Jarak antar elemen (Teks & Ikon)
                            gap: { xs: '15px', md: '35px' }, 
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
                                fontSize: { xs: '1.5rem', md: '2.2rem' },
                                fontWeight: 600,
                                lineHeight: 1,
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