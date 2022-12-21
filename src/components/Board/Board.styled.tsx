import styled from '@emotion/styled'
import { rows } from '../../confs/setup'
import { BoardProps } from './Board'

export const StyledBoard = styled.ul<BoardProps>`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-gap: ${(props) => rows[props.cards.length].gap};
  grid-template-columns: repeat(
    ${(props) => rows[props.cards.length].cols},
    minmax(50px, 1fr)
  );

  @media (min-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => rows[props.cards.length].cols + 2},
      minmax(50px, 1fr)
    );
  }

  @media (orientation: landscape) {
    grid-template-columns: repeat(
      ${(props) => rows[props.cards.length].cols + 2},
      minmax(50px, 1fr)
    );
  }
`
