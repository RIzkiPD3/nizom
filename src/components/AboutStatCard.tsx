'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
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
    // ⚠️ UKURAN FIX DARI FIGMA: Width 305px, Height 305px
    <Box 
      sx={{ 
        position: 'relative', 
        width: 305, 
        height: 305, 
        // Note: top & left dari Figma (1329px & 80px) sebaiknya diatur di parent container (Grid/Flex)
        // margin: '0 auto' dihapus agar bisa disejajarkan oleh parent.
      }}
    >
      
      {/* SVG Hidden Definition untuk ClipPath */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id={isTop ? "notchTopFigma" : "notchBottomFigma"} clipPathUnits="objectBoundingBox">
            {/* Matematika SVG untuk 305x305:
              - Radius 35px = 35/305 = 0.115
              - Cekungan pas untuk bola ~60px
            */}
            <path d={isTop 
              ? "M0,0.115 Q0,0 0.115,0 L0.6,0 Q0.72,0 0.72,0.11 L0.72,0.13 Q0.72,0.26 0.85,0.26 L0.885,0.26 Q1,0.26 1,0.375 L1,0.885 Q1,1 0.885,1 L0.115,1 Q0,1 0,0.885 Z"
              : "M0,0.115 Q0,0 0.115,0 L0.885,0 Q1,0 1,0.115 L1,0.625 Q1,0.74 0.885,0.74 L0.85,0.74 Q0.72,0.74 0.72,0.87 L0.72,0.89 Q0.72,1 0.6,1 L0.115,1 Q0,1 0,0.885 Z"
            } />
          </clipPath>
        </defs>
      </svg>

      {/* Main Card */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#1A3574', // Menggunakan Hex dari screenshot Figma (#1A3574)
          clipPath: `url(#${isTop ? "notchTopFigma" : "notchBottomFigma"})`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '35px', // Padding disesuaikan dengan area 305px
          boxSizing: 'border-box',
          color: 'white',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, fontSize: '3rem', mb: 1 }}>
          {value}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.85, lineHeight: 1.6, fontSize: '0.95rem', maxWidth: '85%' }}>
          {description}
        </Typography>
      </Box>

      {/* Floating Button - Posisi disesuaikan dengan lekukan baru */}
      <Box
        sx={{
          position: 'absolute',
          // Menggunakan pixel absolut untuk memposisikan bola presisi di tengah lekukan
          [isTop ? 'top' : 'bottom']: '12px',
          right: '12px',
          zIndex: 10,
        }}
      >
        <IconButton
          sx={{
            width: 58, // Sedikit dibesarkan menyesuaikan skala 305px
            height: 58,
            backgroundColor: '#407BFF',
            color: 'white',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': { 
              backgroundColor: '#3366FF',
              transform: 'scale(1.08)' 
            }
          }}
        >
          <CallMadeIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AboutStatCard;