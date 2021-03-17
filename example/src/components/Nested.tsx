import React from 'react';

import { bottomSheet } from '../reactComponentLib';
import * as S from '../styles';

import LoremIpsum from './LoremIpsum';

export default function App() {
  return (
    <S.Button
      onClick={() =>
        bottomSheet.create({
          footer: <SecondSheet />,
          content: (
            <S.Content>
              <S.CenteredText>
                <S.Emoji>
                  <span role="img" aria-label="emoji">
                    😄😄😄
                  </span>
                </S.Emoji>
              </S.CenteredText>
              <S.CenteredText>I am a nested bottom sheet</S.CenteredText>
            </S.Content>
          ),
        })
      }
    >
      Nested
    </S.Button>
  );
}

const SecondSheet = () => (
  <S.Button
    onClick={() =>
      bottomSheet.create({
        id: 'second',
        content: (
          <S.Content>
            <ThirdSheet />
            <LoremIpsum />
          </S.Content>
        ),
      })
    }
  >
    Open second sheet
  </S.Button>
);

const ThirdSheet = () => (
  <S.Button
    onClick={() =>
      bottomSheet.create({
        onClose: () => {
          bottomSheet.close({ id: 'second' });
        },
        id: 'third',
        content: (
          <S.Content>
            <S.CenteredText>
              <S.Emoji>
                <span role="img" aria-label="emoji">
                  ❤️
                </span>
              </S.Emoji>
            </S.CenteredText>
            <S.CenteredText>
              When you close me by swiping or clicking the mask, second sheet will also be closed.
            </S.CenteredText>
            <br />
            <S.Button
              onClick={() =>
                bottomSheet.close({
                  id: 'third',
                  callback: () => {
                    alert('Hey from callback!');
                  },
                })
              }
            >
              Close only me through callback
            </S.Button>
          </S.Content>
        ),
      })
    }
  >
    Open 3rd sheet
  </S.Button>
);
