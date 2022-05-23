import { action, makeObservable, observable } from 'mobx';

export const baseLinkUrl = 'https://mnewbigging.github.io/';

export enum NavTab {
  GAMES = 'GAMES',
  APPS = 'APPS',
  RANDOM = 'RANDOM',
}

export class AppState {
  public count = 0;
  public selectedTab = NavTab.GAMES;

  constructor() {
    makeObservable(this, {
      count: observable,
      incrementCount: action,
      selectedTab: observable,
      setSelectedTab: action,
    });
  }

  public setSelectedTab = (tab: NavTab) => {
    this.selectedTab = tab;
  };

  public getTabClass(tab: NavTab) {
    return this.isActivePanel(tab) ? 'active' : '';
  }

  public isActivePanel(tab: NavTab) {
    return tab === this.selectedTab;
  }

  public incrementCount = () => {
    this.count++;
  };
}
