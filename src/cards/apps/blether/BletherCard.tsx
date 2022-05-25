import './blether-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { MultiPlayerIcon } from '../../icons/MultiPlayerIcon';
import { OnlineIcon } from '../../icons/OnlineIcon';
import { baseLinkUrl } from '../../../AppState';

export const BletherCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'blether logo'}></div>}
      title={'blether'}
      icons={[<MultiPlayerIcon />, <OnlineIcon />]}
      blurb={'Online web messenger app. Invite your friends for a blether!'}
      link={baseLinkUrl + 'blether'}
      buttonText={'open'}
    />
  );
};
