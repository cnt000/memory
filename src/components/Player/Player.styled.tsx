import styled from '@emotion/styled'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledPlayer = styled.div<{
  highlighted: boolean
  right?: boolean
}>`
  padding: 4px;
  flex-basis: 160px;
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`

export const StyledPlayerEfx = styled.div<{
  highlighted: boolean
  right?: boolean
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 120px;
  animation:${(props) =>
    props.highlighted ? 'baloon 0.5s linear infinite;' : 'none'};
  /* background: ${(props) => (props.highlighted ? 'green' : 'white')}; */
  border-radius: 8px;
  box-shadow: 4px 10px 10px ${(props) =>
    props.highlighted ? 'green' : 'white'};

  @keyframes baloon {
    0% {
      transform: scale(1.2);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    70% {
      transform: scale(0.8);
    }
    100% {
      scale(0.7);
    }
  }`
