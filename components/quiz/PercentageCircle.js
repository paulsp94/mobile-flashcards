import React from 'react';
import Svg, { Circle } from 'react-native-svg';

export const PercentageCircle = ({ percent }) => {
  const stroke = 2;
  const normalizedRadius = 50 - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = -1 * (circumference + (percent / 100) * circumference);

  return (
    <Svg
      height="80%"
      width="80%"
      viewBox={`0 0 ${100 + 2 * stroke} ${100 + 2 * stroke}`}
      rotation={-90}>
      <Circle
        stroke="#E5E5E5"
        fill="transparent"
        strokeWidth={stroke}
        style={{ strokeDashoffset }}
        stroke-width={stroke}
        r={normalizedRadius}
        cx={50 + stroke}
        cy={50 + stroke}
      />
      <Circle
        stroke="black"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        stroke-width={stroke}
        r={normalizedRadius}
        cx={50 + stroke}
        cy={50 + stroke}
      />
    </Svg>
  );
};
