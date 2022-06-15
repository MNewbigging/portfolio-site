import './traffic-scene-card.scss';

import React from 'react';
import { Card } from '../../Card';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { LocalIcon } from '../../icons/LocalIcon';
import { baseLinkUrl } from '../../../AppState';

export const TrafficSceneCard: React.FC = () => {
  return (
    <Card
      logo={<div className='logo traffic-scene'></div>}
      title={'Traffic Scene'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Small town scene with vehicles driving around roads. Built using ThreeJs'}
      link={baseLinkUrl + 'traffic-scene'}
      buttonText={'open'}
    />
  );
};
