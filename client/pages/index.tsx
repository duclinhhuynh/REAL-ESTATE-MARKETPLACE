import React, {useState, useEffect} from 'react'
// INTERNAL IMPORT 
import {useStateContext} from "../context";
const index = () => {
  const {address, connect, contract, realEstate} = useStateContext();
  return (
    <div>
      <h1>{realEstate}</h1>
      <button onClick={() => connect()}>connect</button>
      <p>{address}</p>
    </div>

  )
}

export default index