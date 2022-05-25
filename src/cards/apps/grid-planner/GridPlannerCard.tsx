import './grid-planner-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const GridPlannerCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'grid-planner logo'}></div>}
      title={'Grid Planner'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Customise grid cells to create grid-based plans for anything.'}
      link={baseLinkUrl + 'grid-planner'}
      buttonText={'open'}
    />
  );
};
