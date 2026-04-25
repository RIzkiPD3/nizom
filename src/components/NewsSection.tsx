'use client';

import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useHorizontalStripScrollRef } from '../hooks/useHorizontalStripScrollRef';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallMadeIcon from '@mui/icons-material/CallMade';

const news = [
    {
        title: 'How AI is Reshaping the Future of Software Development',
        desc: 'Artificial intelligence is no longer just a buzzword — it is actively changing how developers write, test, and deploy code.',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'The Rise of Low-Code Platforms in Enterprise Solutions',
        desc: 'Enterprise organizations are increasingly adopting low-code platforms to accelerate digital transformation and reduce technical debt.',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    },
    {
        title: 'UX Trends That Will Dominate Design in 2026',
        desc: 'From immersive 3D interfaces to hyper-personalized experiences, these design trends are setting the tone for the year ahead.',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    },
];

export default function NewsSection() {
    const newsStripRef = useHorizontalStripScrollRef();

    return (
        <Box component="section" sx={{ py: 10, background: '#f7f8fc' }}>
            {/* SVG ClipPath diperbarui:
                Dikalkulasi secara presisi untuk rasio gambar 353.32 x 237.4 
                dengan area cutout yang pas membungkus button 56.84px 
            */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <clipPath id="newsNotchPath" clipPathUnits="objectBoundingBox">
                        <path d="M 0.063,0 L 0.78,0 Q 0.82,0 0.82,0.08 L 0.82,0.18 Q 0.82,0.28 0.92,0.28 L 0.96,0.28 Q 1,0.28 1,0.36 L 1,0.907 Q 1,1 0.937,1 L 0.063,1 Q 0,1 0,0.907 L 0,0.093 Q 0,0 0.063,0 Z" />
                    </clipPath>
                </defs>
            </svg>

            <Container
                maxWidth={false}
                sx={{ px: { xs: 3, md: '80px' }, maxWidth: '1440px', minWidth: 0 }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#0D0D2B', maxWidth: 400 }}>
                        Stay Updated With Our Latest News
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            background: '#407BFF',
                            borderRadius: 50,
                            px: 4, py: 1.5,
                            textTransform: 'none',
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': { background: '#3062D4', boxShadow: 'none' }
                        }}
                    >
                        See All
                    </Button>
                </Box>

                <Box
                    ref={newsStripRef}
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: { xs: '20px', md: '22px' },
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        pb: 2,
                        width: '100%',
                        maxWidth: '100%',
                        minWidth: 0,
                        minHeight: { md: '467px' },
                        alignItems: 'stretch',
                        WebkitOverflowScrolling: 'touch',
                        scrollSnapType: { xs: 'x mandatory', md: 'none' },
                        touchAction: 'pan-x',
                        overscrollBehavior: 'contain',
                        scrollbarGutter: 'stable',
                        '&::-webkit-scrollbar': { height: 8 },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(13,13,43,0.2)',
                            borderRadius: 4,
                        },
                        scrollbarColor: 'rgba(13,13,43,0.35) transparent',
                        scrollbarWidth: 'thin',
                    }}
                >
                    {news.map((item, i) => (
                        <Box
                            key={i}
                            sx={{
                                flex: '0 0 auto',
                                scrollSnapAlign: 'start',
                                width: { xs: 'min(85vw, 420px)', sm: '380px', md: '411px' },
                                maxWidth: '100%',
                                height: { xs: 'auto', md: '467px' },
                                minHeight: { xs: 'auto', md: '467px' },
                                borderRadius: '22.29px',
                                backgroundColor: '#FFFFFF',
                                border: '1.11px solid #E5E7EB',
                                display: 'flex',
                                flexDirection: 'column',
                                p: { xs: '20px', md: '29px' },
                                boxSizing: 'border-box',
                            }}
                        >
                            {/* Area Teks - Menggunakan dimensi fix dari Figma */}
                            <Box sx={{ mb: 'auto' }}>
                                <Typography 
                                    sx={{ 
                                        fontSize: { xs: '18px', md: '22px' }, 
                                        fontWeight: 600, 
                                        color: '#0D0D2B', 
                                        width: '100%', 
                                        maxWidth: '279px',
                                        lineHeight: 1.3,
                                        mb: '12px',
                                        // Mencegah teks lebih dari 2 baris (opsional)
                                        display: '-webkit-box', 
                                        WebkitLineClamp: 2, 
                                        WebkitBoxOrient: 'vertical', 
                                        overflow: 'hidden'
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                
                                <Typography 
                                    sx={{ 
                                        fontSize: '14px', 
                                        color: '#6B7280', 
                                        width: '100%', 
                                        lineHeight: 1.6,
                                        mb: 3,
                                        display: '-webkit-box', 
                                        WebkitLineClamp: 3, 
                                        WebkitBoxOrient: 'vertical', 
                                        overflow: 'hidden'
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>

                            {/* Area Gambar Utama */}
                            <Box sx={{ position: 'relative', width: '100%', height: { xs: '200px', md: '237.4px' } }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        clipPath: 'url(#newsNotchPath)',
                                    }}
                                />
                                
                                {/* Tombol Panah (Disesuaikan Posisinya di Dalam Container Gambar) */}
                                <Box 
                                    sx={{ 
                                        position: 'absolute', 
                                        top: 0, 
                                        right: 0, 
                                        width: '56.84px',
                                        height: '56.84px',
                                        backgroundColor: '#FFFFFF', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        border: '1px solid #E5E7EB',
                                        zIndex: 10 
                                    }}
                                >
                                    <CallMadeIcon sx={{ color: '#407BFF', fontSize: '20px' }} />
                                </Box>

                                {/* Badge Kategori */}
                                <Box 
                                    sx={{ 
                                        position: 'absolute', 
                                        bottom: '16px', 
                                        left: '16px', 
                                        bgcolor: 'rgba(0,0,0,0.6)', 
                                        backdropFilter: 'blur(8px)', 
                                        borderRadius: '50px', 
                                        px: 2.5, 
                                        py: 0.8, 
                                    }}
                                >
                                    <Typography sx={{ color: '#FFF', fontSize: '13px', fontWeight: 500 }}>
                                        {item.category}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}