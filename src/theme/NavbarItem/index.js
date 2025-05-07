// assisted by Cursor AI
import React, { useEffect, useState } from 'react';
import NavbarItem from '@theme-original/NavbarItem';

export default function NavbarItemWrapper(props) {
  const [fnPrevScrollPos, setPrevScrollPos] = useState(0);
  const [bIsVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
      const iCurrentScrollPos = window.scrollY;
      
      // Add scroll class based on scroll position
      if (iCurrentScrollPos > 50) {
        navbar.classList.add('navbar-scroll');
      } else {
        navbar.classList.remove('navbar-scroll');
      }

      // Handle navbar visibility based on scroll direction
      setIsVisible(fnPrevScrollPos > iCurrentScrollPos || iCurrentScrollPos < 50);
      setPrevScrollPos(iCurrentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fnPrevScrollPos]);

  return (
    <>
      <NavbarItem {...props} style={{ 
        transform: `translateY(${bIsVisible ? '0' : '-100%'})`,
        transition: 'transform 0.3s ease'
      }} />
    </>
  );
} 