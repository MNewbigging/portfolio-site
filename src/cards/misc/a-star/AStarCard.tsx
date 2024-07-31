import { baseLinkUrl } from '../../../AppState';
import { Card } from '../../Card';
import './a-star-card.scss';

import React from 'react';

export const AStarCard: React.FC = () => {
  return (
    <Card
      logo={<div className='a-star logo'></div>}
      title='A* Pathfinder'
      blurb={'Implementation of the a-star pathfinding method built in threejs'}
      link={baseLinkUrl + 'a-star'}
      buttonText='open'
    />
  );
};
