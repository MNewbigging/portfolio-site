import './desk-scene-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const DeskSceneCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'desk-scene logo'}></div>}
      title={'Desk Scene'}
      blurb={
        'Early attempt at drawing with css. The computer turns on, and features an old-school screen-off animation!'
      }
      link={baseLinkUrl + 'desk-scene'}
      buttonText={'open'}
    />
  );
};
