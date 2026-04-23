'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AboutStatCard from './AboutStatCard';

const stats = [
  {
    value: '18+',
    description: 'We are thrilled to announce the successful completion of yet another milestone project',
  },
  {
    value: '21K',
    description: 'We pride ourselves on building meaningful partnerships and truly understanding our clients’ needs.',
  },
  {
    value: '18M',
    description: 'This success is reflected in our impressive revenue, highlighting client satisfaction.',
  },
  {
    value: '18K',
    description: 'We’re excited to announce the successful completion of our latest project.',
  },
];

export default function AboutSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f5f5f5' }}>
      {/* Container dibuat sangat lebar agar menampung 4 x 305px + gaps */}
      <Container maxWidth={false} sx={{ maxWidth: '1400px', px: 4 }}>
        
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: { xs: 6, md: 8 },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#1A1F6B',
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 1,
              }}
            >
              About Us
            </Typography>
          </Box>
          <Box sx={{ flex: 1, maxWidth: { md: '500px' } }}>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
              }}
            >
              We're more than just a software house. We're the architects of innovative
              solutions, creators of seamless digital experiences, and dedicated
              partners in your journey towards technological excellence.
            </Typography>
          </Box>
        </Box>

        {/* ⚠️ Wrapper Utama untuk 1 Baris */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Memaksa satu baris
            justifyContent: 'center', // Tetap di tengah
            alignItems: 'flex-start',
            gap: '24px',
            width: '100%',
            // Agar selalu bisa scroll jika tidak muat, mencegah pelebaran body
            overflowX: 'auto', 
            pb: 4, // Padding bawah agar shadow tombol tidak terpotong saat scroll
            '&::-webkit-scrollbar': { display: 'none' }, // Sembunyikan scrollbar agar bersih
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {stats.map((stat, index) => (
            // Flex-shrink: 0 memastikan kartu tidak gepeng/mengecil
            <Box key={index} sx={{ flexShrink: 0 }}>
              <AboutStatCard
                value={stat.value}
                description={stat.description}
                notchPosition={index % 2 === 0 ? 'top-right' : 'bottom-right'}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Marquee Banner */}
      <Box
        sx={{
          // Ukuran menyesuaikan layar untuk efek banner menyambung,
          // atau flex 1534px secara absolut jika dikalibrasi di container luar.
          width: '100%', 
          height: '100px',
          backgroundColor: '#FF5C28', // Warna Oranye
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          mt: { xs: 8, md: 10 }, // Jarak ke AboutStatCard
        }}
      >
        <Box
          sx={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marqueeScroll 20s linear infinite',
            '@keyframes marqueeScroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {/* Loop 2 kali agar saat scroll mulus/seamless */}
          {[...Array(2)].map((_, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {['DEVELOPMENT', 'UI/UX DESIGN', 'QUALITY ASSURANCE', 'APP DEVELOPMENT'].map((text, j) => (
                <React.Fragment key={`${i}-${j}`}>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '28px',
                      mx: 4,
                      letterSpacing: '1px',
                    }}
                  >
                    {text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z" fill="white"/>
                    </svg>
                  </Box>
                </React.Fragment>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}