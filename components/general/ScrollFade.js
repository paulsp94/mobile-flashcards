import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const ScrollFade = ({ top = true, position = { top: 0 }, height = 16 }) => {
  const colors = top ? ['white', 'transparent'] : ['transparent', 'white'];

  return (
    <LinearGradient
      colors={colors}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        ...position,
        height,
        zIndex: 10,
      }}
    />
  );
};
