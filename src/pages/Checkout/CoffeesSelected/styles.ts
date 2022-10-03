import styled from 'styled-components'

export const CoffeessSelectedContainer = styled.div`
  width: 28rem;

  & > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
  }

  & > main {
    background-color: ${(props) => props.theme['base-card']};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 6px;
    border-top-right-radius: 36px;
    padding: 2.5rem;

    & > header {
      margin: 0 auto;

      hr {
        background-color: ${(props) => props.theme['base-button']};
        margin: 1.5rem 0;
        height: 1px;
        border: none;
      }
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & h2 {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
        font-weight: 400;
      }
      & h3 {
        color: ${(props) => props.theme['base-text']};
        font-size: 1rem;
        font-weight: 400;
      }
      & h4 {
        color: ${(props) => props.theme['base-text']};
        font-size: 1.25rem;
        font-weight: 700;
      }
      & h5 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: 700;
      }
    }

    & > div + div {
      margin-top: 0.75rem;
    }

    & > button {
      border: none;
      width: 100%;
      height: 2.875rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['yellow-normal']};
      color: ${(props) => props.theme['white-pure']};
      margin-top: 1.5rem;
      font-size: 0.875rem;
      font-weight: 700;
      cursor: pointer;
    }

    & > button:not(:disabled):hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    & > button:disabled {
      background-color: #ff000050;
      color: white;
      cursor: not-allowed;
    }
  }
`
