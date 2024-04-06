import React, { useContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from "@thirdweb-dev/react";
import { prepareContractCall, resolveMethod } from "thirdweb"
import { ethers } from "ethers";
import { contractAbi } from "/constant/index.js"; // Adjust the path accordingly

const StateContext = React.createContext();
export const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0x42404C3E4023E5D5e7cdF7C7b470efbb6920a057", contractAbi);
    // console.log("contract", contract);
    // console.log("useAddress", useAddress() );
    const address = useAddress();
    console.log("address of wallet",address);
    const connect = useMetamask();
    const realEstate = "Real Estate Dapp";

const { mutateAsync: listProperty, isLoading } = useContractWrite(
    contract,
    "listProperty"
);

    
    const createPropertyFunction = async (form) => {
        const {
            price, 
            propertyTitle,
            category,
            images,
            propertyAddress,
            description,
        } = form; 
        console.log("form", form.price, form.propertyTitle, form.images, form.category, form.propertyAddress, form.description);
        try {
            const data = await listProperty({
                args:[   
                        address, 
                        price, 
                        propertyTitle,
                        category,
                        images,
                        propertyAddress,
                        description
                ],
        });
            console.log("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err); // Add error handling
        }
    };
    // Provide state values and functions through context
    return (
        <StateContext.Provider value={{ address, connect, contract, realEstate, createPropertyFunction }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
