import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 0;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
`
export const FormContainer = styled.form`
  margin: 0 auto;
  padding: 2rem;
  max-width: 100%;
  padding: 2.5rem;

  .addressInputs {
    display: grid;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-template-columns: 37.5% 50% 12.5%;
    display: grid;
    /* grid-template-columns: 3fr 4fr 1fr; */
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'CEP . .' 'rua rua rua' 'numero complemento complemento'
      'bairro cidade UF';

    .CEP {
      grid-area: CEP;
    }
    .rua {
      grid-area: rua;
    }
    .numero {
      grid-area: numero;
    }
    .complemento {
      grid-area: complemento;
    }
    .bairro {
      grid-area: bairro;
    }
    .cidade {
      grid-area: cidade;
    }
    .UF {
      grid-area: UF;
    }

    input {
      height: 2.625rem;
      padding: 0.75rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};
      border: 1px solid ${(props) => props.theme['base-button']};
    }
  }
`
export const FormaDePagamento = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  padding: 2.5rem;
`
export const InputTextBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 22px 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 2px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  .textoMaior {
    grid-area: 1 / 2 / 2 / 3;
  }
  .textoMenor {
    grid-area: 2 / 2 / 3 / 3;
    font-size: 0.875rem;
  }
  margin-bottom: 2.5rem;
`
export const RadioContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  width: 100%;
`
export const RadioPaymentItem = styled(RadioGroup.Item)`
  padding: 1rem;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 0.75rem;
  width: 100%;
  cursor: pointer;

  span {
    color: ${(props) => props.theme['base-text']};
  }
  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme['purple-']};
  }
  svg {
    color: ${(props) => props.theme['purple-']};
  }
`
