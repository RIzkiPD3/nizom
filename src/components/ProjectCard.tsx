'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

interface ProjectCardProps {
  image: string;
  notchPosition?: 'top-right' | 'bottom-right';
  /** Unique per card so clipPath IDs never collide in the DOM. */
  clipIdSuffix: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  notchPosition = 'top-right',
  clipIdSuffix,
}) => {
  const isTop = notchPosition === 'top-right';
  const clipPathId = `project-notch-${clipIdSuffix}`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: '305.30328369140625 / 359',
        minHeight: { xs: '240px', sm: '300px', lg: '359px' },
        borderRadius: '35px',
      }}
    >
      
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path d={isTop 
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
          clipPath: `url(#${clipPathId})`,
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '35px',
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

      <Box
        sx={{
          position: 'absolute',
          [isTop ? 'top' : 'bottom']: { xs: '6px', sm: '8px' },
          right: { xs: '6px', sm: '8px' },
          zIndex: 10,
        }}
      >
        <IconButton
          sx={{
            width: { xs: 48, sm: 56, md: 60 },
            height: { xs: 48, sm: 56, md: 60 },
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
          <CallMadeIcon sx={{ fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.5rem' } }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProjectCard;