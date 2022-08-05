import styled from '@emotion/styled'
import { BoardProps } from './Board'

export const StyledBoard = styled.ul<BoardProps>`
  width: 800px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-gap: 4%;
  grid-template-columns: repeat(
    ${(props) => (props.cards.length === 12 ? 4 : 6)},
    1fr
  );
  grid-template-rows: repeat(
    ${(props) => (props.cards.length === 12 ? 3 : 4)},
    1fr
  );
`
