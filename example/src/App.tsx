import React, { FC } from 'react';

import Default from './components/Defaut';
import Draggable from './components/Draggable';
import DarkMode from './components/DarkMode';
import LongText from './components/LongText';
import HeaderFooter from './components/HeaderFooter';
import MaskClosable from './components/MaskClosable';
import Nested from './components/Nested';

import * as S from './styles';

export const App: FC = () => (
  <S.Wrapper>
    <h2>
      <span role="img" aria-label="emoji">
        🚀
      </span>{' '}
      bottom sheet examples
    </h2>
    <Default />
    <Draggable />
    <DarkMode />
    <LongText />
    <HeaderFooter />
    <Nested />
    <MaskClosable />
  </S.Wrapper>
);
