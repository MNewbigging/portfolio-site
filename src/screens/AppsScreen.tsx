import React from 'react';

import { BletherCard } from '../cards/apps/blether/BletherCard';
import { CodeCompendiumCard } from '../cards/apps/code-compendium/CodeCompendiumCard';
import { GridPlannerCard } from '../cards/apps/grid-planner/GridPlannerCard';
import { KeyboardistCard } from '../cards/apps/keyboardist/KeyboardistCard';
import { TaskLogCard } from '../cards/apps/task-log/TaskLogCard';

export const AppsScreen: React.FC = () => {
  return (
    <>
      <GridPlannerCard />
      <BletherCard />
      <CodeCompendiumCard />
      <TaskLogCard />
      <KeyboardistCard />
    </>
  );
};
