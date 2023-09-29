import './task-log-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const TaskLogCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'task-log logo'}></div>}
      title={'Task Log'}
      blurb={'Track your tasks in this sci-fi themed task log app. Tasks persist between sessions.'}
      link={baseLinkUrl + 'task-log'}
      buttonText={'open'}
    />
  );
};
