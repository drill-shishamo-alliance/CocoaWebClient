import * as React from 'react';

type Props = {
  x: number;
  y: number;
  tick: number;
};

const LineChartTickSvg: React.FC<Props> = props => {
  const { x, y, tick } = props;

  const getSvgProps = () => {
    switch (tick) {
      case 1:
        return {
          fill: '#7E8B8C',
          path:
            'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z',
        };
      case 2:
        return {
          fill: '#2880BA',
          path:
            'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52z',
        };
      case 3:
        return {
          fill: '#E57D22',
          path:
            'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53z',
        };
      case 4:
        return {
          fill: '#1ABC9C',
          path:
            'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z',
        };
      case 5:
        return {
          fill: '#EF7079',
          path:
            'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z',
        };
      default:
        return {
          fill: '#ff0000',
          path:
            'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
        };
    }
  };

  const svgProps = getSvgProps();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x={x - 30}
      y={y - 10}
      width='24'
      height='24'
      fill={svgProps.fill}
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0V0z' />
      {svgProps.fill === '#ff0000' ? '' : <circle cx='15.5' cy='9.5' r='1.5' />}
      {svgProps.fill === '#ff0000' ? '' : <circle cx='8.5' cy='9.5' r='1.5' />}
      <path d={svgProps.path} />
    </svg>
  );
};

export default LineChartTickSvg;
