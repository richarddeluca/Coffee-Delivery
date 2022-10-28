import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Intro,
  Items,
  IntroImage,
  HeroContainer,
  HeroContent,
  Item,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <div className="bg-img" />
      <HeroContent>
        <Intro>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className="subtítulo">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <Items>
            <Item color="rgb(199, 135, 37)">
              <div className="iconContainer">
                <ShoppingCart size={16} weight="fill" color="white" />
              </div>
              <p>Compra simples e segura</p>
            </Item>
            <Item color="#574F4D">
              <div className="iconContainer">
                <Package size={16} weight="fill" color="white" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item color="#DBAC2C">
              <div className="iconContainer">
                <Timer size={16} weight="fill" color="white" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item color="#8047F8">
              <div className="iconContainer">
                <Coffee size={16} weight="fill" color="white" />
              </div>
              <p>O café chega fresquinho até você</p>
            </Item>
          </Items>
        </Intro>
        <IntroImage src="src/assets/Imagem.svg" />
      </HeroContent>
    </HeroContainer>
  )
}
