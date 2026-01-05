import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',   // 32px - small contexts
  md: 'w-10 h-10', // 40px - sidebar
  lg: 'w-14 h-14', // 56px - onboarding
  xl: 'w-20 h-20', // 80px - login page
};

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'default', className = '' }) => {
  const logoSrc = variant === 'white' ? '/logo white.png' : '/logo.png';

  return (
    <img
      src={logoSrc}
      alt="BrainBridge"
      className={`${sizeMap[size]} ${className}`}
      aria-hidden="true"
    />
  );
};

export default Logo;
