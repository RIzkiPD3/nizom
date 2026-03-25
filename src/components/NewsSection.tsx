'use client';

import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const news = [
    {
        title: 'How AI is Reshaping the Future of Software Development',
        desc: 'Artificial intelligence is no longer just a buzzword — it is actively changing how developers write, test, and deploy code across industries.',
        date: 'Mar 18, 2026',
        category: 'Technology',
        image: '/c83685c5519fee0316fe981bd3c13af91cd54739.jpg',
    },
    {
        title: 'The Rise of Low-Code Platforms in Enterprise Solutions',
        desc: 'Enterprise organizations are increasingly adopting low-code platforms to accelerate digital transformation and reduce technical debt.',
        date: 'Mar 12, 2026',
        category: 'Business',
        image: '/c83685c5519fee0316fe981bd3c13af91cd54739.jpg',
    },
    {
        title: 'UX Trends That Will Dominate Design in 2026',
        desc: 'From immersive 3D interfaces to hyper-personalized experiences, these design trends are setting the tone for the year ahead.',
        date: 'Mar 5, 2026',
        category: 'Design',
        image: '/c83685c5519fee0316fe981bd3c13af91cd54739.jpg',
    },
];

export default function NewsSection() {
    return (
        <Box sx={{ py: { xs: 7, md: 10 }, background: '#f7f8fc' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: 'space-between',
                        gap: 2,
                        mb: 6,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#0D0D2B',
                            fontSize: { xs: '1.7rem', md: '2rem' },
                            maxWidth: 360,
                            lineHeight: 1.3,
                        }}
                    >
                        Stay Updated With Our Latest News
                    </Typography>

                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            background: 'linear-gradient(90deg, #FF6B35, #FF8C42)',
                            color: '#fff',
                            px: 3,
                            py: 1.2,
                            borderRadius: 50,
                            fontWeight: 600,
                            alignSelf: { xs: 'flex-start', sm: 'center' },
                            boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #e05a28, #e07a30)',
                                boxShadow: '0 6px 28px rgba(255,107,53,0.55)',
                            },
                        }}
                    >
                        See All
                    </Button>
                </Box>

                {/* News cards */}
                <Grid container spacing={3}>
                    {news.map((item, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <Card
                                sx={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                                    },
                                }}
                            >
                                {/* Image placeholder */}
                                <Box
                                    sx={{
                                        height: 180,
                                        background: `url("${item.image}") center/cover no-repeat`,
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {/* Category badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            left: 12,
                                            background: 'rgba(255,255,255,0.15)',
                                            backdropFilter: 'blur(6px)',
                                            borderRadius: 50,
                                            px: 1.5,
                                            py: 0.3,
                                            border: '1px solid rgba(255,255,255,0.2)',
                                        }}
                                    >
                                        <Typography
                                            sx={{ color: '#fff', fontSize: '0.68rem', fontWeight: 600 }}
                                        >
                                            {item.category}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Content */}
                                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '0.72rem',
                                            color: '#FF6B35',
                                            fontWeight: 600,
                                            mb: 1,
                                            letterSpacing: 0.5,
                                        }}
                                    >
                                        {item.date}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: '#0D0D2B',
                                            fontWeight: 700,
                                            fontSize: '0.98rem',
                                            lineHeight: 1.5,
                                            mb: 1.5,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#6B7280', lineHeight: 1.65, flex: 1, mb: 2 }}
                                    >
                                        {item.desc}
                                    </Typography>
                                    <Button
                                        size="small"
                                        endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                                        sx={{
                                            color: '#1A1F6B',
                                            fontWeight: 600,
                                            fontSize: '0.78rem',
                                            p: 0,
                                            justifyContent: 'flex-start',
                                            '&:hover': { background: 'transparent', color: '#2D3DBA' },
                                        }}
                                    >
                                        Read more
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
