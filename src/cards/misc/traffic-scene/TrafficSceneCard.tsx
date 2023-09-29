import './traffic-scene-card.scss';

import React from 'react';
import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const TrafficSceneCard: React.FC = () => {
  return (
    <Card
      logo={<div className='logo traffic-scene'></div>}
      title={'Traffic Scene'}
      blurb={
        'Small town scene built in ThreeJs with vehicles driving around roads and basic camera and time playback controls.'
      }
      link={baseLinkUrl + 'traffic-scene'}
      buttonText={'open'}
    />
  );
};
