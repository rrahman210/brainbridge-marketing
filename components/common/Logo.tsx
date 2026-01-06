import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white';
  className?: string;
}

const sizeMap = {
  sm: { width: 32, height: 32, className: 'w-8 h-8' },
  md: { width: 40, height: 40, className: 'w-10 h-10' },
  lg: { width: 56, height: 56, className: 'w-14 h-14' },
  xl: { width: 80, height: 80, className: 'w-20 h-20' },
};

export default function Logo({ size = 'md', variant = 'default', className = '' }: LogoProps) {
  const logoSrc = variant === 'white' ? '/logo white.png' : '/logo.png';
  const dimensions = sizeMap[size];

  return (
    <Image
      src={logoSrc}
      alt="BrainBridge"
      width={dimensions.width}
      height={dimensions.height}
      className={`${dimensions.className} ${className}`}
      aria-hidden="true"
      priority
    />
  );
}
