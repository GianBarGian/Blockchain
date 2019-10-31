import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getBalance, getRecieved, getSent } from './helpers'
import { mockChain } from './chain'

function App() {
  const [id, setId] = useState('')
  const [input, setInput] = useState('')
  const [chain, setChain] = useState([])
  const [balance, setBalance] = useState('No Id provided')
  const [received, setReceived] = useState([])
  const [sent, setSent] = useState([])
  
  useEffect(() => {
    // axios.get('http://0.0.0.0:5000/chain')
    //   .then(res => setChain(res.data.chain))
    setChain(mockChain)
    if (id) {
      setBalance(getBalance(chain, id)) 
      setReceived(getRecieved(chain, id))
      setSent(getSent(chain, id))
    }
  }, [id])
  
  const handleChange = event => {
    setInput(event.target.value)
  }

  const onClick = event => {
    event.preventDefault()
    setId(input)
    setInput('')
    
  }
  return (
    <div className="App">
      <form>
        <input value={input} onChange={handleChange} type='text' placeholder='Input your Id' />
        <button onClick={onClick}>Submit your Id</button>
      </form>
      {id && <h1>Hi {id}</h1>}
      <p>Your balance is: {balance}</p>
      <h2>Your received payments</h2>
      {received.length && received.map(transaction => {
        return (
          <div>
            <h4>Sender</h4>
            <p>{transaction.sender}</p>
            <h4>Amount</h4>
            <p>{transaction.amount}</p>
          </div>
        )
      } )}
      <h2>Your sent payments</h2>
      {sent.length && sent.map(transaction => {
        return (
          <div>
            <h4>Recipient</h4>
            <p>{transaction.recipient}</p>
            <h4>Amount</h4>
            <p>{transaction.amount}</p>
          </div>
        )
      } )}
    </div>
  );
}

export default App;
