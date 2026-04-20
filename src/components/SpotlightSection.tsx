'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
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
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: '80px' }, maxWidth: '1440px' }}>
        
        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            mb: 8,
            gap: 4,
          }}
        >
          {/* Title & Description side */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'white',
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1,
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
                lineHeight: 1.6,
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
              maxWidth: { md: '500px' },
            }}
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActiveTab(cat)}
                sx={{
                  borderRadius: '100px',
                  px: 3,
                  py: 0.8,
                  textTransform: 'none',
                  border: '1px solid',
                  borderColor: activeTab === cat ? '#407BFF' : 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.85rem',
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
                px: 3,
                py: 0.8,
                textTransform: 'none',
                bgcolor: '#407BFF',
                color: 'white',
                fontSize: '0.85rem',
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

        {/* ⚠️ FIX: Mengganti Grid dengan Flexbox 1 Baris agar selaras dengan dimensi baru */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '19.7px', // Sesuai spek Anda
            justifyContent: 'flex-start', // Dimulai pas di 80px dari tepi kiri container
            width: '100%',
            overflowX: { xs: 'auto', xl: 'visible' }, // Scroll horizontal otomatis di layar kecil
            pb: 2,
            '&::-webkit-scrollbar': { display: 'none' }, // Sembunyikan scrollbar bawaan browser
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {projects.map((proj, index) => (
            <Box 
              key={proj.id} 
              sx={{ 
                flexShrink: 0, // Kunci agar kartu tidak mengecil
                width: '305.3px' // Set ukuran kontainer sesuai desain
              }}
            >
              <ProjectCard
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