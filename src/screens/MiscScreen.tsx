import React from 'react';

import { CssAnimsCard } from '../cards/misc/css-anims/CssAnimsCard';
import { DeskSceneCard } from '../cards/misc/desk-scene/DeskSceneCard';
import { TrafficSceneCard } from '../cards/misc/traffic-scene/TrafficSceneCard';

export const MiscScreen: React.FC = () => {
  return (
    <>
      <TrafficSceneCard />
      <CssAnimsCard />
      <DeskSceneCard />
    </>
  );
};
