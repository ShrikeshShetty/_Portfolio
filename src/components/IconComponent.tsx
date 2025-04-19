import React from 'react';
import type { IconBaseProps } from 'react-icons';

interface IconProps {
  icon: React.ComponentType<IconBaseProps>;
  size?: string | number;
}

export const IconComponent: React.FC<IconProps> = ({ icon: Icon, size = '24px' }) => {
  return <Icon size={size} />;
};
