import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme['background-color']};
  opacity: 0.9;

  header {
    width: 70rem;
    margin: 0 auto;
    display: flex;
    padding: 2rem 0rem;
    align-items: center;
    justify-content: space-between;

    pre {
      display: flex;
      align-items: center;
    }

    img {
      height: 2.5rem;
      width: auto;
    }

    .sun {
      height: 4rem;
      margin-right: -1.75rem;
    }

    div {
      display: flex;
      gap: 0.75rem;

      a {
        text-decoration: none;
        padding: 0.5rem 0.5rem;
        border-radius: 6px;
      }

      a:first-child {
        display: flex;
        align-items: center;
        gap: 0.3125rem;
        color: ${(props) => props.theme['purple-normal']};
        background-color: ${(props) => props.theme['purple-light']};

        p {
          color: ${(props) => props.theme['purple-dark']};
          font-size: 0.875rem;
        }
      }

      a:last-child {
        position: relative;
        width: 2.375rem;
        height: 2.375rem;
        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};

        span {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 1000px;
          background-color: ${(props) => props.theme['yellow-dark']};
          color: ${(props) => props.theme['white-pure']};
          text-align: center;
          font-weight: 700;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
        }
      }
    }
  }
`
