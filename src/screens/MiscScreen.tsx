import React from 'react';

import { CssAnimsCard } from '../cards/misc/css-anims/CssAnimsCard';
import { DeskSceneCard } from '../cards/misc/desk-scene/DeskSceneCard';
import { GalaxyGenCard } from '../cards/misc/galaxy-gen/GalaxyGenCard';
import { HauntedHouseCard } from '../cards/misc/haunted-house/HauntedHouseCard';
import { HomeStCard } from '../cards/misc/home-st/HomeStCard';
import { KeyboardistCard } from '../cards/apps/keyboardist/KeyboardistCard';
import { TrafficSceneCard } from '../cards/misc/traffic-scene/TrafficSceneCard';

export const MiscScreen: React.FC = () => {
  return (
    <>
      <HomeStCard />
      <HauntedHouseCard />
      <TrafficSceneCard />
      <GalaxyGenCard />
      <KeyboardistCard />
      <CssAnimsCard />
      <DeskSceneCard />
    </>
  );
};
