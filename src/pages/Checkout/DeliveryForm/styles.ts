import styled from 'styled-components'

export const DeliveryFormContainer = styled.div`
  flex: 1;
  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
  }

  main {
    padding: 2.5rem;
    margin-bottom: 0.75rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    header {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;

      & > svg {
        color: ${(props) => props.theme['yellow-dark']};
      }

      h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 400;
      }
      h3 {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
      }
    }

    & > div {
      input {
        border-radius: 4px;
        padding: 0.75rem;
        border: 1px solid ${(props) => props.theme['base-button']};
        background-color: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-text']};
      }
      input::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
      input:focus::placeholder {
        color: transparent;
      }
      input:focus {
        border: 1px solid ${(props) => props.theme['yellow-dark']};
      }
      br + input {
        margin-top: 0.75rem;
      }
      input:nth-child(1) {
        width: 12.5rem;
      }
      input:nth-child(3) {
        width: 100%;
      }
      input:nth-child(5) {
        margin-right: 0.75rem;
        width: 12.5rem;
      }
      input:nth-child(6) {
        width: 21.75rem;
      }

      input:nth-child(8) {
        width: 12.5rem;
        margin-right: 0.75rem;
      }
      input:nth-child(9) {
        margin-right: 0.75rem;
        width: 17.25rem;
      }
      input:nth-child(10) {
        width: 3.75rem;
      }
    }
  }

  footer {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    header {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;

      & > svg {
        color: ${(props) => props.theme['purple-normal']};
      }

      h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 400;
      }
      h3 {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
      }
    }

    & > div {
      display: flex;
      gap: 0.75rem;
      button {
        border-radius: 6px;
        border: none;
        width: 11.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 0.75rem;
        color: ${(props) => props.theme['base-text']};
        font-size: 0.75rem;
        background-color: ${(props) => props.theme['base-button']};
        cursor: pointer;
        line-height: 1.6;

        svg {
          color: ${(props) => props.theme['purple-normal']};
        }
      }
      button:not(.active):hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
      .active {
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme['purple-normal']};
      }
    }
  }
`
