import React from 'react';
import { IconType, IconBaseProps } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  size?: number;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 24 }) => {
  const IconComponent = Icon as React.ComponentType<IconBaseProps>;
  return <IconComponent size={size} />;
};
