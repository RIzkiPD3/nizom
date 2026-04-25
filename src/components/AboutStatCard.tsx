'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

interface AboutStatCardProps {
  value: string;
  description: string;
  notchPosition?: 'top-right' | 'bottom-right';
  /** Unique per card so clipPath IDs do not collide when multiple cards mount. */
  clipIdSuffix: string;
}

const AboutStatCard: React.FC<AboutStatCardProps> = ({
  value,
  description,
  notchPosition = 'top-right',
  clipIdSuffix,
}) => {
  const isTop = notchPosition === 'top-right';
  const clipId = `about-stat-notch-${clipIdSuffix}`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1',
        minHeight: 0,
      }}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path
              d={
                isTop
                  ? 'M0,0.115 Q0,0 0.115,0 L0.6,0 Q0.72,0 0.72,0.11 L0.72,0.13 Q0.72,0.26 0.85,0.26 L0.885,0.26 Q1,0.26 1,0.375 L1,0.885 Q1,1 0.885,1 L0.115,1 Q0,1 0,0.885 Z'
                  : 'M0,0.115 Q0,0 0.115,0 L0.885,0 Q1,0 1,0.115 L1,0.625 Q1,0.74 0.885,0.74 L0.85,0.74 Q0.72,0.74 0.72,0.87 L0.72,0.89 Q0.72,1 0.6,1 L0.115,1 Q0,1 0,0.885 Z'
              }
            />
          </clipPath>
        </defs>
      </svg>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#1A3574',
          clipPath: `url(#${clipId})`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: 2.5, sm: 3, md: '35px' },
          boxSizing: 'border-box',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 1.1,
            mb: { xs: 0.75, md: 1 },
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            opacity: 0.85,
            lineHeight: 1.55,
            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.95rem' },
            maxWidth: '92%',
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          [isTop ? 'top' : 'bottom']: { xs: '10px', sm: '12px' },
          right: { xs: '10px', sm: '12px' },
          zIndex: 10,
        }}
      >
        <IconButton
          sx={{
            width: { xs: 48, sm: 52, md: 58 },
            height: { xs: 48, sm: 52, md: 58 },
            backgroundColor: '#407BFF',
            color: 'white',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#3366FF',
              transform: 'scale(1.08)',
            },
          }}
        >
          <CallMadeIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutStatCard;