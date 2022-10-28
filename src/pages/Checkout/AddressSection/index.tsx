import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  Container,
  FormContainer,
  InputsContainer,
  FormaDePagamento,
  InputTextBox,
  RadioContainer,
  RadioPaymentItem,
} from './styles'

export function FormSection() {
  return (
    <Container>
      <h2>Complete seu pedido</h2>
      <InputsContainer>
        <FormContainer>
          <InputTextBox>
            <MapPin size={22} />
            <p className="textoMaior">Endereço de Entrega</p>

            <p className="textoMenor">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </InputTextBox>
          <div className="addressInputs">
            <input placeholder="CEP" type="text" className="CEP" />
            <input placeholder="Rua" type="text" className="rua" />
            <input placeholder="Número" type="text" className="numero" />
            <input
              placeholder="Complemento"
              type="text"
              className="complemento"
            />
            <input placeholder="Bairro" type="text" className="bairro" />
            <input placeholder="Cidade" type="text" className="cidade" />
            <input placeholder="UF" type="text" className="UF" />
          </div>
        </FormContainer>
        <FormaDePagamento>
          <InputTextBox>
            <CurrencyDollar size={22} />
            <p className="textoMaior">Pagamento</p>

            <p className="textoMenor">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </InputTextBox>
          <RadioContainer defaultValue="credito">
            <div>
              <RadioPaymentItem id="r1" value="credito">
                <CreditCard size={16} /> <span>CARTÃO DE CRÉDITO</span>
              </RadioPaymentItem>
            </div>
            <div>
              <RadioPaymentItem id="r2" value="debito">
                <Bank size={16} /> <span>CARTÃO DE DÉBITO</span>
              </RadioPaymentItem>
            </div>
            <div>
              <RadioPaymentItem id="r3" value="dinheiro">
                <Money size={16} /> <span>DINHEIRO</span>
              </RadioPaymentItem>
            </div>
          </RadioContainer>
        </FormaDePagamento>
      </InputsContainer>
    </Container>
  )
}
