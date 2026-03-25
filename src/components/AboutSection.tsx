'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
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
      <Container maxWidth="lg">
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

        {/* Statistic Cards Grid (CSS Grid) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',           // Mobile: 1 column
              sm: 'repeat(2, 1fr)', // Tablet: 2 columns
              md: 'repeat(4, 1fr)', // Desktop: 4 columns
            },
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {stats.map((stat, index) => (
            <AboutStatCard
              key={index}
              value={stat.value}
              description={stat.description}
              notchPosition={index % 2 === 0 ? 'top-right' : 'bottom-right'}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
