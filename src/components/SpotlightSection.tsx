'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import { useHorizontalStripScrollRef } from '../hooks/useHorizontalStripScrollRef';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const categories = [
  'All categories',
  'Web app',
  'Mobile app',
  'UI/UX design',
  'Desktop app',
];

const projects = [
  { id: 1, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop' },
];

export default function SpotlightSection() {
  const [activeTab, setActiveTab] = useState('All categories');
  const projectStripRef = useHorizontalStripScrollRef();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        // Background gradien tetap dipertahankan
        background: 'linear-gradient(160deg, #0D0D2B 0%, #0d1428 100%)',
        position: 'relative',
        overflow: 'hidden',
        // Subtle grid pattern overlay
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: 0,
        },
      }}
    >
      {/* px: '80px' memastikan titik "left: 80px" dari Figma tercapai */}
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 3, md: '80px' },
          maxWidth: '1440px',
          minWidth: 0,
        }}
      >
        
        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', lg: 'flex-end' },
            mb: { xs: 5, md: 7 },
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Title & Description side */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'white',
                fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.3rem', lg: '4rem' },
                lineHeight: { xs: 1.1, md: 1 },
                mb: 2,
              }}
            >
              Spotlight Project
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: { xs: '0.9rem', md: '1rem' },
                maxWidth: '600px',
                lineHeight: 1.7,
              }}
            >
              We excel in managing a wide range of technology development and integration projects, 
              tailored to diverse client needs and industries. Discover our standout work below and see how 
              we deliver exceptional results.
            </Typography>
          </Box>

          {/* Filters side */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              width: { xs: '100%', lg: 'auto' },
              maxWidth: { xs: '100%', lg: '650px' },
            }}
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActiveTab(cat)}
                sx={{
                  borderRadius: '100px',
                  px: { xs: 2, sm: 2.5, md: 3 },
                  py: 0.8,
                  textTransform: 'none',
                  border: '1px solid',
                  borderColor: activeTab === cat ? '#407BFF' : 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: { xs: '0.78rem', sm: '0.82rem', md: '0.85rem' },
                  fontWeight: 500,
                  bgcolor: activeTab === cat ? 'rgba(64, 123, 255, 0.1)' : 'transparent',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                    borderColor: 'white',
                  },
                }}
              >
                {cat}
              </Button>
            ))}
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: '100px',
                px: { xs: 2, sm: 2.5, md: 3 },
                py: 0.8,
                textTransform: 'none',
                bgcolor: '#407BFF',
                color: 'white',
                fontSize: { xs: '0.78rem', sm: '0.82rem', md: '0.85rem' },
                fontWeight: 600,
                whiteSpace: 'nowrap',
                '&:hover': {
                  bgcolor: '#3b74f0',
                },
              }}
            >
              More
            </Button>
          </Box>
        </Box>

        <Box
          ref={projectStripRef}
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: { xs: 2, sm: 2.5, md: '19.7px' },
            overflowX: 'auto',
            overflowY: 'hidden',
            width: '100%',
            maxWidth: '100%',
            minWidth: 0,
            pb: 2,
            alignItems: 'stretch',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            touchAction: 'pan-x',
            overscrollBehavior: 'contain',
            scrollbarGutter: 'stable',
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.25)',
              borderRadius: 4,
            },
            scrollbarColor: 'rgba(255,255,255,0.35) transparent',
            scrollbarWidth: 'thin',
          }}
        >
          {projects.map((proj, index) => (
            <Box
              key={proj.id}
              sx={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                width: { xs: 'min(78vw, 320px)', sm: '300px', md: '305px' },
              }}
            >
              <ProjectCard
                clipIdSuffix={String(proj.id)}
                image={proj.image}
                notchPosition={index % 2 === 0 ? 'top-right' : 'bottom-right'}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}