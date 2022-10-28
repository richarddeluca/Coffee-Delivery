import styled from 'styled-components'

export const HeroContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: url('src/assets/Background.png');
  background-repeat: no-repeat;
  background-position: center center;
`
export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 6rem auto;
`

export const Intro = styled.div`
  width: 36rem;
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    line-height: 2.6rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
  .subtítulo {
    width: 95%;
    font-size: 1.25rem;
    margin: 1rem 0;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InformationTexts = styled.div`
  position: relative;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 35px; /*1*/
    border: 1px solid transparent; /*2*/
    background: linear-gradient(
        315deg,
        ${(props) => props.theme['purple-']},
        ${(props) => props.theme['yellow-']}
      )
      border-box; /*3*/
    -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /*5'*/
    mask-composite: exclude; /*5*/
  }
`

export const Text = styled.div`
  display: flex;
  gap: 0.75rem;

  &.local {
    .iconBox {
      background-color: ${(props) => props.theme['purple-']};
    }
  }

  &.time {
    .iconBox {
      background-color: ${(props) => props.theme['yellow-']};
    }
  }

  &.payment {
    .iconBox {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
  .iconBox {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
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
  width: 492px;
  height: 293px;
  align-self: flex-end;
`
