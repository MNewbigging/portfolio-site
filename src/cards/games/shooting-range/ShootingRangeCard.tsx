import { baseLinkUrl } from '../../../AppState';
import { Card } from '../../Card';
import './shooting-range-card.scss';
import React from 'react';

export const ShootingRangeCard: React.FC = () => {
  return (
    <Card
      logo={<div className='shooting-range logo'></div>}
      title='Shooting Range'
      blurb='A first person shooting range, built and animated in blender and put together with threejs.'
      link={baseLinkUrl + 'shooting-range'}
      buttonText='play'
    />
  );
};
