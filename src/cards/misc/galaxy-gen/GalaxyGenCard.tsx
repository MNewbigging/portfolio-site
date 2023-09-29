import './galaxy-gen-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const GalaxyGenCard: React.FC = () => {
  return (
    <Card
      logo={<div className='logo galaxy-gen'></div>}
      title={'Galaxy Gen'}
      blurb={'ThreeJs particles demo where you can create your own galaxy'}
      link={baseLinkUrl + 'galaxy'}
      buttonText={'open'}
    />
  );
};
