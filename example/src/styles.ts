import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Emoji = styled.div`
  font-size: 40px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  font-weight: bold;
`;

export const Button = styled.button<{ block?: boolean }>(
  ({ block }) => `
  width: ${block ? '100%' : 'auto'};
  padding: 15px;
  margin: 2px;
  display: block;
  background: #0b56ed;
  color: #fff;
  border: 0;
  border-radius: 10px;
  outline: 0;
  cursor: pointer;
  font-weight: bold;

  &:hover{
    opacity: 0.9;
  }
`,
);

export const Content = styled.div`
  padding: 20px;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: url('https://picsum.photos/200') no-repeat;
  background-size: cover;
  margin: 20px auto;
  border-radius: 100%;
`;

export const CenteredText = styled.div`
  width: 100%;
  text-align: center;
`;
