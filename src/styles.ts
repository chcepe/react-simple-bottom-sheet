import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Arrow } from './types';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  zindex: 99999999;
  background: rgba(0, 0, 0, 0.5);
`;

export const DraggableContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const HandleIcon = styled.div<{ type?: Arrow }>(
  ({ type = 'straight' }) => `
  width: 14px;
  height: 10px;
  margin: auto;
  display: flex;
  .bs-drag-handle-ic {
    width: 14px;
    position: relative;
    display: block;
    opacity: 0.2;
    top: -5px;
    transform: scale(0.8);

    &::before,
    &::after {
      border-radius: 10px;
      content: "";
      position: absolute;
      width: 3px;
      height: 15px;
      top: 50%;
      transition: all 0.1s ease-in-out;
      background: #000;
    }
    &::before {
      transform-origin: 50% 50%;
      ${type === 'straight' ? `transform: rotate(90deg);` : ''}
      ${type === 'down' ? `transform: rotate(120deg);` : ''}
      ${type === 'up' ? `transform: rotate(60deg);` : ''}
      
    }
    &::after {
      transform-origin: 50% 50%;
      ${type === 'straight' ? `transform: rotate(90deg);` : ''}
      ${type === 'down' ? `transform: rotate(60deg);` : ''}
      ${type === 'up' ? `transform: rotate(120deg);` : ''}
      right: 0;
    }
  }
`,
);

export const Sheet = styled(motion.div)<{ darkMode?: boolean }>(
  ({ darkMode }) => `
  width: 100%;
  height: auto;
  background: ${darkMode ? '#282828' : '#fff'};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  ${darkMode ? '* { color: #fff }' : ''};

  ${
    darkMode
      ? `
  ${HandleIcon}{
    .bs-drag-handle-ic {
      &::before,
      &::after {
          background: #fff;
        }
      }
    }
  `
      : ''
  }
  
`,
);

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 90vh;
  position: relative;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const BodyContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
`;

export const Header = styled.div<{ withBorder?: boolean }>(
  ({ withBorder }) => `
  padding: 17px;
  position: relative;
  ${
    withBorder
      ? `
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);`
      : ''
  }
`,
);

export const HeaderContent = styled.div`
  padding-top: 10px;
`;

export const Footer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  padding: 10px;
`;

export const Mask = styled(motion.div)<{ debug?: boolean; cursorMove?: boolean }>(
  ({ debug, cursorMove }) => `
  ${cursorMove ? `cursor: move;` : ''}
  ${
    debug
      ? `
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjQkNCQ0JDIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYyMEgxMFYxMFoiIGZpbGw9IiNCQ0JDQkMiLz4KPHBhdGggZD0iTTEwIDBIMjBWMTBIMTBWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDEwSDEwVjIwSDBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
    `
      : ''
  }
`,
);

export const DragHandle = styled.div.attrs({ className: 'draggable' })<{ debug?: boolean }>(
  ({ debug }) => `
  &.draggable{ cursor: move; }
  ${
    debug
      ? `
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxMFYxMEgwVjBaIiBmaWxsPSIjQkNCQ0JDIi8+CjxwYXRoIGQ9Ik0xMCAxMEgyMFYyMEgxMFYxMFoiIGZpbGw9IiNCQ0JDQkMiLz4KPHBhdGggZD0iTTEwIDBIMjBWMTBIMTBWMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDEwSDEwVjIwSDBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
      opacity: 0.2;
    `
      : ''
  }
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,
);
