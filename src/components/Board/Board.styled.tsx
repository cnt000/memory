import styled from '@emotion/styled'
import { BoardProps } from './Board'

const rows: Record<string, { cols: number; gap: string }> = {
  12: { cols: 4, gap: '4%' },
  24: { cols: 6, gap: '3%' },
  48: { cols: 8, gap: '2%' },
}

export const StyledBoard = styled.ul<BoardProps>`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-gap: ${(props) => rows[props.cards.length].gap};
  grid-template-columns: repeat(
    ${(props) => rows[props.cards.length].cols},
    minmax(70px, 1fr)
  );
`
