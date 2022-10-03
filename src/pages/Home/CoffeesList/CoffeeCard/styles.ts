import styled from 'styled-components'
export const CoffeeCardContainer = styled.div`
  width: 16rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 6px;
  border-top-right-radius: 36px;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: auto;
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
    user-select: none;
  }

  & > div {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;

    p {
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.625rem;
      font-weight: 700;
    }
  }

  h1 {
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    width: 13.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    width: 13.5rem;
    margin-bottom: 2.0625rem;
  }

  footer {
    display: flex;
    align-items: center;
    width: 13rem;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    p {
      text-align: right;
      color: ${(props) => props.theme['base-text']};
      font-weight: 400;
      font-size: 0.875rem;

      span {
        text-align: right;
        font-family: 'Baloo 2', sans-serif;
        color: ${(props) => props.theme['base-text']};
        font-weight: 800;
        font-size: 1.5rem;
      }
      span:before {
        content: ' ';
      }
    }

    & > div {
      display: flex;
      gap: 0.5rem;

      div {
        height: 2.375rem;
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
        width: 2.375rem;
        height: 2.375rem;
        color: ${(props) => props.theme['base-card']};
        background-color: ${(props) => props.theme['purple-dark']};
        border-radius: 6px;
        border: none;
        padding: 0.5rem 0.5rem;
        cursor: pointer;

        svg {
          line-height: 0;
        }
      }

      button:hover {
        background-color: ${(props) => props.theme['purple-normal']};
      }
    }
  }
`
