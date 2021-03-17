import React from 'react';

import { bottomSheet } from '../reactComponentLib';
import * as S from '../styles';

import LoremIpsum from './LoremIpsum';

export default function App() {
  return (
    <S.Button
      onClick={() =>
        bottomSheet.create({
          content: (
            <S.Content>
              <S.CenteredText>
                <S.Emoji>
                  <span role="img" aria-label="emoji">
                    🔥🔥🔥
                  </span>
                </S.Emoji>
              </S.CenteredText>
              <LoremIpsum />
            </S.Content>
          ),
        })
      }
    >
      Long content
    </S.Button>
  );
}
