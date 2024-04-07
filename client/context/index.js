import React, { useContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite, useContractRead, useContractEvents } from "@thirdweb-dev/react";
import { prepareContractCall, resolveMethod } from "thirdweb"
import { ethers } from "ethers";
import { contractAbi } from "/constant/index.js"; // Adjust the path accordingly
import { title } from 'process';

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

    // 1.updateProperty()
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

    // 2.updateProperty()
    const {mutateAsync: updateProperty, isLoading: updatePropertyLoading} = 
    useContractWrite(contract, "updateProperty");

    const updatePropertyFunction = async(form) => {
        const {productId, propertyTitle, description, category, images, propertyAddress} = form;
        try {
            const data = await updateProperty({
                args:[
                    address,
                    productId, 
                    propertyTitle, 
                    category, 
                    images, 
                    propertyAddress,
                    description, 
                ]
            })
            console.log("contract call sussecsfully ", data);
        } catch (error) {
            console.log("eroor",error)
        }
    }

    // 3. updatePrice function
    const { mutateAsync: updatePrice, isLoading: updatePriceLoading} = 
    useContractWrite(contract, "updatePrice");
    const updatePriceFuncion = async(form)=> {
        const {productId, price} = form;
        try {
            const data = await updatePrice([address, productId, price]);
            console.log("Transaction successfuly")
        } catch (error) {
            
        }
    }

    // 4.buyProperty
    const { mutateAsync: buyProperty, isLoading: buyPropertyLoading} = 
    useContractWrite(contract, "buyProperty");

    const buyPropertyFunction = async(from) => {
        const {id} = from;
        try {
            const data = await buyProperty({args:[id, address]})
            console.log("buying successfully", data)
        } catch (error) {
            console.log("buying fial", error);
        }
    }

    // 5. add Review 
    const { mutateAsync: addReview, isLoading: addReviewLoading} = 
    useContractWrite(contract, "addReview");
    const addReviewFunction = async(from)=> {
        const {productId, rating, comment} = from
        try {
            const data = await addReview({args:[productId, rating, comment]});
            console.log("successfully added review", data);
        } catch (error) {
            console.log("adding review fail", error);
        }
    } 
    // 6. like Review
    const { mutateAsync: likeReview, isLoading: likeReviewLoading} = 
    useContractWrite(contract, "likeReview");
    const likeReviewFunction = async (from) => {
        const {productId, reviewIndex} = from;
        try {
            const data = await likeReview({args:[productId, reviewIndex, address]})
        } catch (error) {
            console.log("liking err", err)
        }
    }
    // 7. getAllProperties
    const getPropertiesData = async() => {
        try {
            const properties = await contract.call("getAllProperties");
            const parsedProperties = properties.map((property, i) =>( {
                owner: property.owner,
                title: property.propertyTitle,
                description: property.description,
                category: property.category,
                price: ethers.utils.formatEther(property.price.toString()),
                productId: property.productID.toNumber(),
                reviewers: property.reviewers,
                reviews: property.reviews,
                image: property.images,
                address: property.propertyAddress,
            }))
            return parsedProperties;
            console.log(properties);
        } catch (error) {
            console.log("Error while loading data", error);
        }
    }
    // 8. getHighestratedProduct
    const {data: getHighestRatedProduct, isLoading: getHighestRatedProductLoading} 
    = useContractRead(contract, "getHighestRatedProduct")
    // 9. getHighestratedProduct
    const getProductReviewsFunction = (productId) => {
        try {
            const {data: getProductReviews, isLoading: getProductReviewsLoading} 
            = useContractRead(contract, "getProductReviews");
            return (getProductReviews, getProductReviewsLoading);
        } catch (error) {
            console.log("getProductReviews Function ", error);
        }
    }

    // 10. getPropertyFucition
    const getPropertyFucition = (id) => {
        try {
            const {data: getProperty, isLoading: getPropertyLoading} =
            useContractRead("getProperty");
            return (getProperty, getPropertyLoading);
        } catch (error) {
            console.log("getgetProperty", error);
        }
    }
    
    // 11.getUserProperties
    const getUsersPropertiesFunction = () => {
        try {
            const {data: getUserProperties, isLoading: getUserPropertiesLoading} =
            useContractRead("getUsersProperties", [address]);
            return getUserProperties, getUserPropertiesLoading;
        } catch (error) {
            console.log("error while getting user property", error);
        }
    }
    // 12. getUserReviews
    const getUserReviewsFuction = () => {
        try {
            const {data: getUserReviews, isLoading: getUserReviewsLoading} =
            useContractRead("getUserReviews", [address]);
            return getUserReviews, getUserReviewsLoading;
        } catch (error) {
            console.log("error", error);
        }
    }
    // 13. totalProperty ()
    const totalPropertyFuction = () => {
        try {
            const {data: totalProperty, isLoading: totalPropertyLoading} = useContractRead(contract, "propertyIndex");
            return (totalProperty, totalPropertyLoading); 
        } catch (error) {
            
        }
    }

    // 14 totalReviews 
    const totalReviewsFunction = () => {
        try {
            const {data: totalReviewsCount, isLoading: totalReviewsCountLoading} = 
            useContractWrite(contract, "reviewsCounter");
            return (totalReviewsCount, totalReviewsCountLoading);
        } catch (error) {
            console.log("total reviews", error);
        }
    }

    // how to read data with 
    // get specifice   event

    const {data:event} = useContractEvents(contract, "PropertyListed");
    // GET ALL EVENT
    const {data: allEvents} = useContractEvents(contract);
    // SET DEFAULT
    const {data: eventWithoutListener} = useContractEvents(contract, undefined,{subscribe:false})
    // console.log("event", event);
    // console.log("allEvents", allEvents);
    console.log("eventWithoutListener", eventWithoutListener);
    return (
        <StateContext.Provider value={{ address, 
        connect, 
        contract, 
        realEstate, 
        createPropertyFunction,
        //REAL PROPERTY DATA
        updatePropertyFunction,
        updatePriceFuncion,
        getPropertiesData,
        buyPropertyFunction,
        addReviewFunction,
        likeReviewFunction,
        getProductReviewsFunction,
        getHighestRatedProduct,
        getPropertyFucition,
        getUsersPropertiesFunction,
        getUserReviewsFuction,
        totalPropertyFuction,
        totalReviewsFunction
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
