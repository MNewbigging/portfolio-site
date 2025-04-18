import './box-cross-card.scss';

import { Card } from '../../Card';

import React from 'react';
import { baseLinkUrl } from '../../../Index';

export const BoxCrossCard: React.FC = () => {
  return (
    <Card
      logo={<div className='box-cross logo'></div>}
      title={'Box Cross'}
      blurb='Frogger clone in threejs. Play as a cardboard box trying to cross as many roads as possible!'
      link={baseLinkUrl + 'boxcross'}
      buttonText='play'
    />
  );
};
