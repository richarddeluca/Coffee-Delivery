import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Intro,
  IntroImage,
  HeroContainer,
  HeroContent,
  InformationTexts,
  Text,
} from './styles'
import illustration from '../../assets/illustration.png'

export function SuccessPage() {
  return (
    <HeroContainer>
      <div className="bg-img" />
      <HeroContent>
        <Intro>
          <div>
            <h2>Uhu! Pedido confirmado</h2>
            <p className="subtítulo">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </div>
          <InformationTexts>
            <Text className="local">
              <div className="iconBox">
                <MapPin size={16} weight="fill" color="white" />
              </div>
              <div className="paddings">
                <p>
                  Entrega em{' '}
                  <span className="bold">Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </Text>
            <Text className="time">
              <div className="iconBox">
                <Timer size={16} weight="fill" color="white" />
              </div>
              <div className="paddings">
                <p>Previsão de entrega</p>
                <p>
                  <span className="bold">20 min - 30 min</span>{' '}
                </p>
              </div>
            </Text>
            <Text className="payment">
              <div className="iconBox">
                <CurrencyDollar size={16} weight="fill" color="white" />
              </div>
              <div className="paddings">
                <p>Pagamento na entrega</p>
                <p>
                  <span className="bold">Cartão de Crédito</span>
                </p>
              </div>
            </Text>
          </InformationTexts>
        </Intro>
        <IntroImage
          alt="ilustração: pessoa dirigindo uma moto com uma caixa de transporte na parte de trás. Estampada na caixa está logo do Coffee Delivery"
          src={illustration}
        />
      </HeroContent>
    </HeroContainer>
  )
}
