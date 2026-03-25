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
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '380px',
        borderRadius: '32px',
        overflow: 'visible',
      }}
    >
      {/* Floating Action Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: isTop ? '-16px' : 'auto',
          bottom: isTop ? 'auto' : '-16px',
          right: '-16px',
          width: '64px',
          height: '64px',
          backgroundColor: '#407BFF',
          color: 'white',
          zIndex: 3,
          boxShadow: '0 8px 16px rgba(64, 123, 255, 0.4)',
          '&:hover': {
            backgroundColor: '#3b74f0',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        <CallMadeIcon sx={{ fontSize: '28px' }} />
      </IconButton>

      {/* Main Image Container with Cut-out Mask */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '32px',
          backgroundColor: '#1a1a3a',
          overflow: 'hidden',
          // Dynamic mask based on notchPosition
          maskImage: `radial-gradient(circle 64px at 100% ${isTop ? '0' : '100%'}, transparent 64px, black 65px)`,
          WebkitMaskImage: `radial-gradient(circle 64px at 100% ${isTop ? '0' : '100%'}, transparent 64px, black 65px)`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
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
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectCard;
