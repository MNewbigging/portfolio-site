import { baseLinkUrl } from '../../../Index';
import { Card } from '../../Card';
import './shoot-hoops-card.scss';
import React from 'react';

export const ShootHoopsCard: React.FC = () => {
  return (
    <Card
      logo={<div className='shoot-hoops logo'></div>}
      title={'Shoot Hoops'}
      blurb='Basketball court made with ThreeJs and physics with Cannon - go shoot some hoops!'
      link={baseLinkUrl + 'shoot-hoops'}
      buttonText='play'
    />
  );
};
