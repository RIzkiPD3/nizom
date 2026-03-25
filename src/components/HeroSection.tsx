'use client';

import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HeroSection() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0D0D2B 0%, #1A1F6B 45%, #2a1a4a 75%, #3a1a1a 100%)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                pt: { xs: 12, md: 10 },
                pb: { xs: 4, md: 2 },
            }}
        >
            {/* Background glow blobs */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '5%',
                    width: { xs: 200, md: 380 },
                    height: { xs: 200, md: 380 },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,100,30,0.35) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '-5%',
                    width: { xs: 180, md: 320 },
                    height: { xs: 180, md: 320 },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(45,61,186,0.5) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Text row */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: { xs: 3, md: 6 },
                        mb: { xs: 5, md: 6 },
                    }}
                >
                    {/* Heading */}
                    <Box sx={{ flex: '0 0 auto', maxWidth: { xs: '100%', md: '52%' } }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#fff',
                                fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                                fontWeight: 800,
                                lineHeight: 1.15,
                                mb: 3,
                            }}
                        >
                            We Solve Business Problems &amp; Develop Solution
                        </Typography>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                background: 'linear-gradient(90deg, #2D3DBA, #1A1F6B)',
                                color: '#fff',
                                px: 3,
                                py: 1.2,
                                borderRadius: 50,
                                fontWeight: 600,
                                fontSize: '0.88rem',
                                boxShadow: '0 4px 20px rgba(45,61,186,0.4)',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #3A4ECC, #2230AA)',
                                    boxShadow: '0 6px 28px rgba(45,61,186,0.6)',
                                },
                            }}
                        >
                            Explore more
                        </Button>
                    </Box>

                    {/* Subtext */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: { xs: '0.88rem', md: '0.95rem' },
                                lineHeight: 1.75,
                                maxWidth: 420,
                            }}
                        >
                            We are a technology-driven company that specializes in solving complex
                            business challenges through innovative digital solutions. From strategy
                            to implementation, we craft results that matter.
                        </Typography>
                    </Box>
                </Box>

                {/* Hero image — blue marble photo */}
                <Box
                    sx={{
                        borderRadius: { xs: '20px', md: '32px' },
                        overflow: 'hidden',
                        width: '100%',
                        height: { xs: 240, sm: 340, md: 420 },
                        position: 'relative',
                        display: 'block',
                        background: '#000', // Pre-fill with black to avoid white splash
                        boxShadow: '0 20px 80px rgba(0,0,0,0.55)',
                    }}
                >
                    <Box
                        component="img"
                        src="/WhatsApp Image 2026-03-25 at 00.55.17.jpeg"
                        alt="Abstract blue marble background"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                            transform: 'scale(1.1)', // Zoom-in to hide baked-in white corners of original file
                        }}
                    />
                    {/* Subtle gradient overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(135deg, rgba(13,13,43,0.3) 0%, transparent 50%, rgba(255,80,20,0.1) 100%)',
                            pointerEvents: 'none',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 24,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.55)',
                                fontSize: '0.75rem',
                                letterSpacing: 3,
                                textTransform: 'uppercase',
                            }}
                        >
                            Innovation · Technology · Solutions
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
