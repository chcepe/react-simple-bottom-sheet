import React from 'react';

import { bottomSheet } from '../reactComponentLib';
import * as S from '../styles';

export default function App() {
  return (
    <S.Button
      onClick={() =>
        bottomSheet.create({
          dragHandle: ['mask', 'content', 'footer', 'header'],
          header: (
            <S.CenteredText>
              <S.Emoji>
                <span role="img" aria-label="emoji">
                  ⬆️
                </span>
              </S.Emoji>
            </S.CenteredText>
          ),
          footer: (
            <S.CenteredText>
              <S.Emoji>
                <span role="img" aria-label="emoji">
                  ⬇️
                </span>
              </S.Emoji>
            </S.CenteredText>
          ),
          content: (
            <S.Content>
              <S.CenteredText>
                Nulla est. Suspendisse sagittis ultrices augue. Praesent vitae arcu tempor neque lacinia pretium. Nulla
                pulvinar eleifend sem.
              </S.CenteredText>
              <S.Avatar />
              <S.CenteredText>
                Suspendisse sagittis ultrices augue. Fusce nibh. Etiam neque. Fusce suscipit libero eget elit. Aenean
                fermentum risus id tortor.
              </S.CenteredText>
            </S.Content>
          ),
        })
      }
    >
      All draggable
    </S.Button>
  );
}
