import styled from 'styled-components'

export const HeroContainer = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;

  .bg-img {
    position: absolute;
    left: calc((100vw - 1140px) / 2 * -1);
    width: 100vw;
    height: 100%;
    background-image: url('src/assets/Background.png');
    background-size: 120% 400px;
    background-repeat: repeat;
    background-position: center center;
  }
`
export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 6rem auto;
`

export const Intro = styled.div`
  width: 36rem;
  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    line-height: 4rem;
  }
  .subtítulo {
    width: 95%;
    font-size: 1.25rem;
    margin: 1rem 0;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  font-size: 1rem;

  margin: 3rem 0 6.75rem 0;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .iconContainer {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    /*align-items: center;
    justify-content: center; */

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const IntroImage = styled.img`
  width: 476px;
  height: 360px;
`
