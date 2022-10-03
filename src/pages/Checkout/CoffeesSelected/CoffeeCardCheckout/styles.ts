import styled from 'styled-components'

export const CoffeeCardCheckoutContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 23rem;
  height: fit-content;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0.5rem 0.25rem;

  img {
    height: 4rem;
    width: auto;
  }

  main {
    & > p {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    div {
      display: flex;
      gap: 0.5rem;
      div {
        height: 2rem;
        width: 4.5rem;
        border-radius: 6px;
        background-color: ${(props) => props.theme['base-button']};
        display: flex;
        align-items: center;
        padding: 0px 0.5rem;
        gap: 0.25rem;
        user-select: none;

        svg {
          color: ${(props) => props.theme['purple-normal']};
          cursor: pointer;
        }

        svg:hover {
          color: ${(props) => props.theme['purple-dark']};
        }

        p {
          color: ${(props) => props.theme['base-title']};
          font-size: 1rem;
          flex: 1;
          text-align: center;
        }
      }
      button {
        height: 2rem;
        width: 5.6875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 6px;
        gap: 0.4375rem;
        background-color: ${(props) => props.theme['base-button']};

        svg {
          color: ${(props) => props.theme['purple-normal']};
        }
        p {
          color: ${(props) => props.theme['base-text']};
          font-size: 0.75rem;
          text-align: center;
        }
      }
      button:hover {
        background-color: ${(props) => props.theme['base-hover']};
        svg {
          color: ${(props) => props.theme['purple-dark']};
        }
        p {
          color: ${(props) => props.theme['base-subtitle']};
        }
      }
    }
  }

  h2 {
    font-size: 1rem;
    font-weight: 700;
    flex: 1;
    text-align: right;
  }
`
