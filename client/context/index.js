import React, {useContext,useEffect, createContext}from 'react'
import {useAddress, useContract, useMetamask, useContractWrite, useContractRead, useContractEvents} from "@thirdweb-dev/react"

import {ether} from "ethers"
const StateContext = createContext();
export const  StateContextProvider = ({children}) => {
    const {contract } = useContract();
    const address = useAddress();
    const connect = useMetamask();
    const realEstate = "Real Estate Dapp";
    return (
        <StateContext.Provider value={{address, connect, contract, realEstate}}>
            {children}
        </StateContext.Provider>
    )   
}

export const useStateContext = () => useContext(StateContext);