'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

interface ProjectCardProps {
  image: string;
  notchPosition?: 'top-right' | 'bottom-right';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  notchPosition = 'top-right' 
}) => {
  const isTop = notchPosition === 'top-right';

  return (
    // Dimensi diperbarui persis seperti spesifikasi Figma Anda
    <Box sx={{ position: 'relative', width: 305.3, height: 359 }}>
      
      {/* SVG ClipPath Definition yang sudah dikalibrasi untuk 305.3 x 359 */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id={isTop ? "projectNotchTop" : "projectNotchBottom"} clipPathUnits="objectBoundingBox">
            <path d={isTop 
              // Hitungan presisi untuk border-radius 35px di height 359px (Y ≈ 0.097)
              ? "M0,0.097 Q0,0 0.115,0 L0.6,0 Q0.72,0 0.72,0.097 L0.72,0.12 Q0.72,0.236 0.85,0.236 L0.885,0.236 Q1,0.236 1,0.333 L1,0.903 Q1,1 0.885,1 L0.115,1 Q0,1 0,0.903 Z"
              : "M0,0.097 Q0,0 0.115,0 L0.885,0 Q1,0 1,0.097 L1,0.667 Q1,0.764 0.885,0.764 L0.85,0.764 Q0.72,0.764 0.72,0.88 L0.72,0.903 Q0.72,1 0.6,1 L0.115,1 Q0,1 0,0.903 Z"
            } />
          </clipPath>
        </defs>
      </svg>

      {/* Container Gambar Utama */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#1A3574',
          clipPath: `url(#${isTop ? "projectNotchTop" : "projectNotchBottom"})`,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Project"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, left: 0, width: '100%', height: '100%', 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), transparent)',
            pointerEvents: 'none'
          }} 
        />
      </Box>

      {/* Floating Button disesuaikan ukurannya agar pas di notch yang baru */}
      <Box
        sx={{
          position: 'absolute',
          [isTop ? 'top' : 'bottom']: '8px', // Didekatkan sedikit agar proporsional
          right: '8px',
          zIndex: 10,
        }}
      >
        <IconButton
          sx={{
            width: 60,
            height: 60,
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

export default ProjectCard;