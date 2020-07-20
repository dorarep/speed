import styled from 'styled-components'

type Props = {
  white?: boolean;
}

export const Circle = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: ${({white}) => white ? 'white' : 'rgba(136, 165, 191, 0.48)'};
  border-radius: 50%;
  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
`;
