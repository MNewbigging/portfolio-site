import { baseLinkUrl } from '../../../AppState';
import { Card } from '../../Card';
import './loot-box-card.scss';

import React from 'react';

export const LootBoxCard: React.FC = () => {
  return (
    <Card
      logo={<div className='loot-box logo'></div>}
      title='Loot Box'
      blurb={'A loot box generator made using blender, threejs and tweenjs - get some free loot!'}
      link={baseLinkUrl + 'loot-box'}
      buttonText='open'
    />
  );
};
