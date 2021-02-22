import styled from 'styled-components'

const Wrapper = styled.div`
  flex-driection: column;
  align-items: center;
  justify-content: center;
  background-color: #DFDFDF;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem
`

const Card = ({ name, bags, flightCode }) => {


  return (
    <Wrapper>
      <p>Name: {name}</p>
      <p>Bags: {bags}</p>
      <p>Flight code: {flightCode}</p>
    </Wrapper>
  )
  
}

export default Card