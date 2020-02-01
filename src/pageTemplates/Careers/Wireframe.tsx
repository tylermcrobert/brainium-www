import styled from 'styled-components'

const BenefitWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

const CareerListWrapper = styled.div`
  padding: 4rem 0;
  background: #eee;
`

const ListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 1rem 0;
`

export default {
  BenefitWrapper,
  CareerListWrapper,
  ListItem,
}
