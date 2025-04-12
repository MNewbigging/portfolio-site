import React from 'react';
import './projects.scss';
import { ShootingRangeCard } from '../cards/games/shooting-range/ShootingRangeCard';
import { BoxCrossCard } from '../cards/games/box-cross/BoxCrossCard';
import { WordBashCard } from '../cards/games/word-bash/WordBashCard';
import { GridPlannerCard } from '../cards/apps/grid-planner/GridPlannerCard';
import { AStarCard } from '../cards/misc/a-star/AStarCard';
import { LootBoxCard } from '../cards/misc/loot-box/LootBoxCard';
import { TrafficSceneCard } from '../cards/misc/traffic-scene/TrafficSceneCard';
import { DeskSceneCard } from '../cards/misc/desk-scene/DeskSceneCard';
import { CssAnimsCard } from '../cards/misc/css-anims/CssAnimsCard';
import { GalaxyGenCard } from '../cards/misc/galaxy-gen/GalaxyGenCard';
import { HauntedHouseCard } from '../cards/misc/haunted-house/HauntedHouseCard';
import { KeyboardistCard } from '../cards/apps/keyboardist/KeyboardistCard';
import { HomeStCard } from '../cards/misc/home-st/HomeStCard';
import { TaskLogCard } from '../cards/apps/task-log/TaskLogCard';
import { BletherCard } from '../cards/apps/blether/BletherCard';
import { RunnerGameCard } from '../cards/games/runner-game/RunnerGameCard';
import { TextFallCard } from '../cards/games/text-fall/TextFallCard';

export function Projects() {
  return (
    <div className='projects'>
      <ShootingRangeCard />
      <BoxCrossCard />
      <WordBashCard />
      <GridPlannerCard />
      <AStarCard />
      <LootBoxCard />
      <TrafficSceneCard />
      <HomeStCard />
      <TaskLogCard />
      <BletherCard />
      <KeyboardistCard />
      <GalaxyGenCard />
      <HauntedHouseCard />
      <CssAnimsCard />
      <DeskSceneCard />
      <RunnerGameCard />
      <TextFallCard />
    </div>
  );
}
