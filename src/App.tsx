import './app.scss';
import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState, NavTab } from './AppState';

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
          className={'random heading ' + appState.getTabClass(NavTab.RANDOM)}
          onClick={() => appState.setSelectedTab(NavTab.RANDOM)}
        >
          Random
        </div>
      </div>
      <div className={'body'}>
        <div className={'view-panels ' + appState.selectedTab}>
          {/* <div className={'panel'}>{appState.isActivePanel(NavTab.GAMES) && <GamesScreen />}</div>
          <div className={'panel'}>{appState.isActivePanel(NavTab.APPS) && <AppsScreen />}</div>
          <div className={'panel'}>{appState.isActivePanel(NavTab.RANDOM) && <RandomScreen />}</div> */}
        </div>
      </div>
    </div>
  );
});
