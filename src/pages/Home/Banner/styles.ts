import styled from 'styled-components'

export const BannerContainer = styled.div`
  margin-top: 6.5rem;
  height: 34rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  background-image: url('src/assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 36.75rem;
    background-color: transparent;
    gap: 4.125rem;

    & > div:first-child {
      h1 {
        font-family: 'Baloo 2';
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.3;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 1rem;
      }

      p {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        line-height: 1.3;
      }
    }

    & > div:last-child {
      height: 6.25rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  img {
    height: 22.5rem;
    width: auto;
  }
`

const CIRCLE_ICON_COLORS = {
  purple: 'purple-normal',
  black: 'base-text',
  yellow: 'yellow-normal',
  yellowDark: 'yellow-dark',
} as const

interface CircleIconProps {
  iconColor: keyof typeof CIRCLE_ICON_COLORS
}

export const CircleIcon = styled.div<CircleIconProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  height: fit-content;
  flex: 1;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 1000%;
    background-color: ${(props) =>
      props.theme[CIRCLE_ICON_COLORS[props.iconColor]]};

    svg {
      margin: 0.5rem;
      color: ${(props) => props.theme['background-color']};
      background-color: ${(props) =>
        props.theme[CIRCLE_ICON_COLORS[props.iconColor]]};
      line-height: 0;
    }
  }

  p {
    white-space: nowrap;
  }
`
