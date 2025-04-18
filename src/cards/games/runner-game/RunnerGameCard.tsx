import './runner-game-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../Index';

export const RunnerGameCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'runner-game logo'}></div>}
      title={'Runner Game'}
      blurb={'Jump over doggos! Made using pure DOM bounds queries without libs/frameworks.'}
      link={baseLinkUrl + 'runner-game'}
    />
  );
};
