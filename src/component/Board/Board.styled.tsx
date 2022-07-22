import styled from '@emotion/styled'
import { BoardProps } from './Board'

export const StyledBoard = styled.ul<BoardProps>`
  display: grid;
  grid-gap: 4%;
  grid-template-columns: repeat(${(props) => props.setup.length}, 1fr);
  grid-template-rows: repeat(${(props) => props.setup[0].length}, 1fr);
`
