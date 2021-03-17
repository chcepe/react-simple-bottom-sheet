import React from 'react';

import { bottomSheet } from '../reactComponentLib';
import * as S from '../styles';

import LoremIpsum from './LoremIpsum';

export default function App() {
  return (
    <S.Button
      onClick={() =>
        bottomSheet.create({
          header: <S.Header>Lorem ipsum</S.Header>,
          footer: (
            <S.Button onClick={() => bottomSheet.close()} block>
              Close
            </S.Button>
          ),
          content: (
            <S.Content>
              <LoremIpsum />
            </S.Content>
          ),
        })
      }
    >
      With Header & Footer
    </S.Button>
  );
}
