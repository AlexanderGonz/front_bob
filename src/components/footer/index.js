import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color:#282c34;
  color: white;
  min-height: 5rem;
 
` 

const Footer = () => {

  return (
    <Wrapper>
      Footer 
    </Wrapper>
  )
}

export default Footer