import './blether-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const BletherCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'blether logo'}></div>}
      title={'blether'}
      blurb={'Online web messenger app. Invite your friends for a blether!'}
      link={baseLinkUrl + 'blether'}
      buttonText={'open'}
    />
  );
};
