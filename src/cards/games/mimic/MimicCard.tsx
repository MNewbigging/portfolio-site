import './mimic-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { OnlineIcon } from '../../icons/OnlineIcon';
import { TwoPlayerIcon } from '../../icons/TwoPlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const MimicCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'mimic logo'}></div>}
      title={'Mimic'}
      icons={[<TwoPlayerIcon />, <OnlineIcon />]}
      blurb={
        "Take turns making light sequences and matching your opponent's; they get longer with each round!"
      }
      link={baseLinkUrl + 'mimic'}
    />
  );
};
