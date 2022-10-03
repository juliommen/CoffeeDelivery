import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 70rem;
  margin: 0 auto;
  margin-top: 11.5rem;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  h1 {
    margin-top: 5rem;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }

  h2 {
    margin-top: 0.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
  }

  main {
    margin-top: 2.5rem;
    width: 32.875rem;
    padding: 2.5rem;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 6px;
    border-top-right-radius: 36px;

    & > div + div {
      margin-top: 2rem;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      header {
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme['background-color']};
      }

      .purple {
        background-color: ${(props) => props.theme['purple-normal']};
      }
      .yellow {
        background-color: ${(props) => props.theme['yellow-normal']};
      }
      .yellow-dark {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
