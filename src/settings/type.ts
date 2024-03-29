import { Dispatch, ReactNode } from 'react';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Scrollbar = 'scrollbar',
  News = 'news',
  Ready = 'ready',
}

export enum LoadingProcessType {
  Ball = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export type TLoadingProcessState = {
  enabled?: boolean;
  type?: LoadingProcessType;
  body?: '';
};

export type TScrollbarState = {
  enabled?: boolean;
};

export type TNewsState = {
  enabled?: boolean;
  html?: string;
};

export type TReadyState = {
  enabled?: boolean;
  contacts?: string;
};

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  scrollbar?: TScrollbarState;
  news?: TNewsState;
  ready?: TReadyState;
}

export interface IAction {
  state: IState | TLoadingProcessState | TScrollbarState | TNewsState | TReadyState;
  type: ActionType;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}

export type ScrollbarElement = HTMLDivElement & {
  set: (v: number) => void;
};
