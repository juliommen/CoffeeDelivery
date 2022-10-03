import styled from 'styled-components'
export const CoffeeslistContainer = styled.div`
  width: 70rem;
  margin: 0 auto;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    margin-top: 3.375rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
  }
`
