import './app.scss';
import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState, NavTab } from './AppState';
import { AppsScreen } from './screens/AppsScreen';
import { GamesScreen } from './screens/GamesScreen';
import { MiscScreen } from './screens/MiscScreen';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <div className={'playground'}>
      <div className={'navbar'}>
        <div
          className={'games heading ' + appState.getTabClass(NavTab.GAMES)}
          onClick={() => appState.setSelectedTab(NavTab.GAMES)}
        >
          Games
        </div>
        <div
          className={'apps heading ' + appState.getTabClass(NavTab.APPS)}
          onClick={() => appState.setSelectedTab(NavTab.APPS)}
        >
          Apps
        </div>
        <div
          className={'random heading ' + appState.getTabClass(NavTab.MISC)}
          onClick={() => appState.setSelectedTab(NavTab.MISC)}
        >
          Misc
        </div>
      </div>
      <div className={'body'}>
        <div className={'view-panels ' + appState.selectedTab}>
          <div className={'panel'}>{appState.isActivePanel(NavTab.GAMES) && <GamesScreen />}</div>
          <div className={'panel'}>{appState.isActivePanel(NavTab.APPS) && <AppsScreen />}</div>
          <div className={'panel'}>{appState.isActivePanel(NavTab.MISC) && <MiscScreen />}</div>
        </div>
      </div>
    </div>
  );
});
