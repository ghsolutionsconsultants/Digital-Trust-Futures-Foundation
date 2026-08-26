import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './Icon';

interface BtnProps {
  label: React.ReactNode;
  href: string;
  variant?: 'primary' | 'accent' | 'ghost' | 'outline-light' | 'light';
  size?: 'sm' | 'lg' | '';
  arrow?: boolean;
  className?: string;
  external?: boolean;
  style?: React.CSSProperties;
}

export function Btn({
  label, href, variant = 'primary', size = '', arrow = true, className = '', external = false, style,
}: BtnProps) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ''}${className ? ` ${className}` : ''}`;

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a className={cls} href={href} style={style}>
        {label}{arrow && <ArrowIcon />}
      </a>
    );
  }

  return (
    <Link className={cls} to={href} style={style}>
      {label}{arrow && <ArrowIcon />}
    </Link>
  );
}

interface LinkArrowProps {
  label: string;
  href: string;
  external?: boolean;
}

export function LinkArrow({ label, href, external = false }: LinkArrowProps) {
  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a className="link-arrow" href={href}>
        {label}<ArrowIcon />
      </a>
    );
  }
  return (
    <Link className="link-arrow" to={href}>
      {label}<ArrowIcon />
    </Link>
  );
}
