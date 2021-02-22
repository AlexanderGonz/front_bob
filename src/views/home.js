import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
// background-color: red;
padding: 1rem
`
const data = [{
  _id: 1,
  name:'alex',
  bags: 2,
  flightCode:'jiojdf'
},
{
  _id: 2,
  name:'Erick',
  bags: 4,
  flightCode:'jiojdf'
},
{
  _id: 3,
  name:'Erick',
  bags: 4,
  flightCode:'jiojdf'
}]
// no me ha dado tiempo a conectarlo con redux toolkit
const Home = () => {
  const [clients, setClients ] = useState([])

  useEffect(() => {
    setClients([data])
  })

  return (
    <Wrapper>
      {clients.map(client => (
        <Card name={client.name} bags={client.bags} flightCode={client.flightCode} key={client._id} /> 
      ))}
    </Wrapper>
  )
}

export default Home;