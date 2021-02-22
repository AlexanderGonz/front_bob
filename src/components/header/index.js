import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color:#282c34;
  color: white;
` 

const Header = () => {

  return (
    <Wrapper>
      Prueba Bob
    </Wrapper>
  )
}

export default Header