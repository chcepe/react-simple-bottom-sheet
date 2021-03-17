import React from 'react';

import { bottomSheet } from '../reactComponentLib';
import * as S from '../styles';

export default function App() {
  return (
    <S.Button
      onClick={() =>
        bottomSheet.create({
          darkMode: true,
          content: (
            <S.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{' '}
            </S.Content>
          ),
        })
      }
    >
      Dark mode
    </S.Button>
  );
}
