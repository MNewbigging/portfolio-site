import React from 'react';

import { BletherCard } from '../cards/apps/blether/BletherCard';
import { CodeCompendiumCard } from '../cards/apps/code-compendium/CodeCompendiumCard';

export const AppsScreen: React.FC = () => {
  return (
    <>
      <BletherCard />
      <CodeCompendiumCard />
    </>
  );
};
