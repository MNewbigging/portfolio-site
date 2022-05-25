import './runner-game-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const RunnerGameCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'runner-game logo'}></div>}
      title={'Runner Game'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Simple endless runner game. Avoid all the doggos!'}
      link={baseLinkUrl + 'runner-game'}
    />
  );
};
