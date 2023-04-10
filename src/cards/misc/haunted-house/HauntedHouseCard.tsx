import './haunted-house-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const HauntedHouseCard: React.FC = () => {
  return (
    <Card
      logo={<div className='logo haunted-house'></div>}
      title={'Haunted House'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Small graveyard scene built using ThreeJs showing lights and shadows.'}
      link={baseLinkUrl + 'haunted-house'}
      buttonText={'open'}
    />
  );
};
