import { ReactNode } from 'react';

export type OnOpen = () => void;
export type OnClose = () => void;
export type CallBack = () => void;
export type OnCloseCustom = (cb: CallBack) => void;
export type Arrow = 'straight' | 'up' | 'down';
export type DragHandleType = 'content' | 'header' | 'footer' | 'mask';

interface BottomSheet {
  id?: string;
  content: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  dragHandle?: DragHandleType[];
  onClose?: OnClose;
  onOpen?: OnOpen;
  darkMode?: boolean;
  maskClosable?: boolean;
  debug?: boolean;
}

export type Props = {
  getHandleOpen?: (value: OnOpen) => void;
  getHandleClose?: (value: OnClose) => void;
  getHandleCloseCustom?: (value: OnCloseCustom) => void;
  getSheetVisibility?: (value: boolean) => void;
} & BottomSheet;

export type Create = {} & BottomSheet;

export interface SheetInfo {
  [key: string]: {
    close?: OnClose;
    open?: OnClose;
    visibility?: boolean;
    closeCustom?: OnCloseCustom;
  };
}

export interface CloseOptions {
  id?: string;
  callback?: CallBack;
}
