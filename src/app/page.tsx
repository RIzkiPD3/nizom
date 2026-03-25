'use client';

import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CoreFocusSection from '../components/CoreFocusSection';
import SpotlightSection from '../components/SpotlightSection';
import NewsSection from '../components/NewsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoreFocusSection />
      <SpotlightSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
