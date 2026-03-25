'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

interface AboutStatCardProps {
  value: string;
  description: string;
  notchPosition?: 'top-right' | 'bottom-right';
}

const AboutStatCard: React.FC<AboutStatCardProps> = ({ 
  value, 
  description,
  notchPosition = 'top-right'
}) => {
  const isTop = notchPosition === 'top-right';

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '280px',
      }}
    >
      {/* Floating Button */}
      <Box
        sx={{
          position: 'absolute',
          top: isTop ? '-16px' : 'auto',
          bottom: isTop ? 'auto' : '-16px',
          right: '-16px',
          width: '64px',
          height: '64px',
          backgroundColor: '#407BFF',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          boxShadow: '0 4px 20px rgba(64, 123, 255, 0.3)',
        }}
      >
        <CallMadeIcon sx={{ color: 'white', fontSize: '28px' }} />
      </Box>

      {/* Card Content */}
      <Box
        sx={{
          backgroundColor: '#0d1b4b',
          borderRadius: '32px',
          padding: '40px 24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          // Dynamic circular cut-out effect
          maskImage: `radial-gradient(circle 64px at 100% ${isTop ? '0' : '100%'}, transparent 64px, black 65px)`,
          WebkitMaskImage: `radial-gradient(circle 64px at 100% ${isTop ? '0' : '100%'}, transparent 64px, black 65px)`,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '3rem', md: '3.5rem' },
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: '220px',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutStatCard;
