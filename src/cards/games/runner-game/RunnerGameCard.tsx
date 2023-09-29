import './runner-game-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const RunnerGameCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'runner-game logo'}></div>}
      title={'Runner Game'}
      blurb={'Simple endless runner game. Avoid all the doggos!'}
      link={baseLinkUrl + 'runner-game'}
    />
  );
};
