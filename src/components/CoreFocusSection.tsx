'use client';

import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';

const services = [
    {
        title: 'APP DEVELOPMENT',
        description:
            'We build powerful, scalable mobile and web applications tailored to your business needs, using the latest technologies and best practices.',
        color: '#1A3574', // Updated with Figma hex code #1A3574
        image: '/image copy.png',
    },
    {
        title: 'QUALITY ASSURANCE',
        description:
            'Our QA engineers ensure every product we ship meets the highest standards through rigorous automated and manual testing processes.',
        color: '#2a2a2a',
        image: '/image copy 2.png',
    },
    {
        title: 'UI/UX DESIGNER',
        description:
            'We craft intuitive and visually stunning interfaces that create meaningful experiences, balancing aesthetics with usability.',
        color: '#1a4a2a',
        image: '/image copy 3.png',
    },
    {
        title: 'DEV OPS',
        description:
            'We streamline your development pipeline with CI/CD, cloud infrastructure, containerization, and monitoring solutions.',
        color: '#2a1a4a',
        image: '/image copy 4.png',
    },
];

const thumbColors = [
    'linear-gradient(135deg, #1A3574, #2D3DBA)', // Updated with Figma hex code #1A3574
    'linear-gradient(135deg, #2a2a2a, #555)',
    'linear-gradient(135deg, #1a4a2a, #2a8a4a)',
    'linear-gradient(135deg, #0d0d2b, #1a1f6b)',
];

export default function CoreFocusSection() {
    return (
        <Box sx={{ py: { xs: 7, md: 10 }, background: '#fafafa' }}>
            <Container maxWidth="lg">
                {/* Title */}
                <Typography
                    variant="h2"
                    align="center"
                    sx={{ fontWeight: 700, color: '#0D0D2B', mb: 1 }}
                >
                    Nizom&apos;s Core{' '}
                    <Box component="span" sx={{ color: '#FF6B35' }}>
                        Focus
                    </Box>
                </Typography>
                <Box sx={{ width: 60, height: 3, background: '#FF6B35', borderRadius: 2, mx: 'auto', mb: 7 }} />

                {/* Service rows */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {services.map((s, i) => (
                        <React.Fragment key={i}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: { xs: 2, sm: 3 },
                                    py: 3.5,
                                    transition: 'background 0.2s',
                                    borderRadius: 3,
                                    px: 2,
                                    '&:hover': { background: 'rgba(26,31,107,0.04)' },
                                }}
                            >
                                {/* Title col */}
                                <Box sx={{ flex: '0 0 200px', minWidth: 160 }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: '0.82rem',
                                            letterSpacing: 1.5,
                                            color: '#0D0D2B',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {s.title}
                                    </Typography>
                                </Box>

                                {/* Description */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#6B7280', lineHeight: 1.75, maxWidth: 520 }}
                                    >
                                        {s.description}
                                    </Typography>
                                </Box>

                                {/* Thumbnail */}
                                <Box
                                    sx={{
                                        // Fixed width, height, and border-radius from Figma spec
                                        width: '231px',
                                        height: '100px',
                                        borderRadius: '80px',
                                        // Background logic to use image if present, or fallback gradient
                                        background: (s as any).image 
                                            ? `url("${(s as any).image}") center/cover no-repeat` 
                                            : thumbColors[i],
                                        flexShrink: 0,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        // Keeping the existing box shadow as it adds to the style
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    {/* Nested Box for internal light effect */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background:
                                                'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                                        }}
                                    />
                                </Box>
                            </Box>
                            {i < services.length - 1 && (
                                <Divider sx={{ borderColor: 'rgba(0,0,0,0.07)' }} />
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}