'use client';

import React from 'react';
import { Box, Button, Container, Typography, Switch } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CTASection() {
    return (
        <Box sx={{ py: { xs: 6, md: 8 }, background: '#f7f8fc' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        borderRadius: '28px',
                        background: 'linear-gradient(135deg, #0D0D2B 0%, #1A1F6B 60%, #12123a 100%)',
                        px: { xs: 3, sm: 5, md: 7 },
                        py: { xs: 5, md: 6 },
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 4,
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 16px 60px rgba(13,13,43,0.35)',
                    }}
                >
                    {/* Background glow */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '-30%',
                            right: '10%',
                            width: 300,
                            height: 300,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(45,61,186,0.4) 0%, transparent 70%)',
                            filter: 'blur(50px)',
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Text block */}
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography
                            variant="h3"
                            sx={{ color: '#fff', fontWeight: 800, mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
                        >
                            Do You Have Ideas?
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 400, lineHeight: 1.7 }}
                        >
                            Let's turn your vision into a reality. Our team is ready to collaborate
                            and bring your most ambitious ideas to life.
                        </Typography>
                    </Box>

                    {/* CTA button group */}
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            background: 'rgba(255,255,255,0.08)',
                            borderRadius: 50,
                            border: '1px solid rgba(255,255,255,0.15)',
                            px: 1,
                            py: 0.5,
                            flexShrink: 0,
                        }}
                    >
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                background: '#fff',
                                color: '#1A1F6B',
                                px: 3,
                                py: 1.2,
                                borderRadius: 50,
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                boxShadow: 'none',
                                '&:hover': {
                                    background: '#f0f2ff',
                                    boxShadow: '0 4px 16px rgba(26,31,107,0.2)',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                        <Switch
                            defaultChecked
                            sx={{
                                '& .MuiSwitch-thumb': { background: '#2D3DBA' },
                                '& .MuiSwitch-track': { background: 'rgba(255,255,255,0.2)' },
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
