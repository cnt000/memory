import styled from '@emotion/styled'

export const StyledPlayer = styled.div<{ highlighted: boolean }>`
  background: ${(props) => (props.highlighted ? 'green' : 'white')};
  border-radius: 8px;
  padding: 4px;
  animation:${(props) =>
    props.highlighted ? 'baloon 0.5s linear infinite;' : 'none'};

  @keyframes baloon {
    0% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
    100% {
      scale(0.7);
    }
  }
`
