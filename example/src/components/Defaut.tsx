import React from 'react';

import { bottomSheet } from '../reactComponentLib';
import * as S from '../styles';

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
                    👋
                  </span>
                </S.Emoji>
              </S.CenteredText>
              <S.CenteredText>Hello world!</S.CenteredText>
            </S.Content>
          ),
        })
      }
    >
      Default
    </S.Button>
  );
}
