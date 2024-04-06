import React, {useState, useEffect} from 'react'
// INTERNAL IMPORT 
import {useStateContext} from "../context";
import {checkIfImage} from "../utils";
import { exit } from 'process';
import { ethers } from 'ethers';
const index = () => {
  const {address, connect, contract, realEstate, createPropertyFunction} = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });
  const handleFromFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName]: e.target.value});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    checkIfImage(form.images, async(exists) => {
      if(exists){
        setIsLoading(true);
        await createPropertyFunction({
          ...form,
          price: ethers.utils.parseUnits(form.price, 18)
        });
        console.log("form price handle" ,ethers.utils.parseUnits(form.price, 18));
        setIsLoading(false);
      }else{
        alert("Please provide valid image URL");
        setForm({...form, images: ""});
      }
    });
  }
  return (
    <div>
      <h1>{realEstate}</h1>
      <button onClick={() => connect()}>connect</button>
      <p>{address}</p>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' placeholder='propertyTitle' 
          onChange={(e) => handleFromFieldChange("propertyTitle", e)}/>
        </div>
        <div>
          <input type='text' placeholder='description' 
          onChange={(e) => handleFromFieldChange("description", e)}/>
        </div>
        <div>
          <input type='text' placeholder='category' 
          onChange={(e) => handleFromFieldChange("category", e)}/>
        </div>
        <div>
          <input type='number' placeholder='price' 
          onChange={(e) => handleFromFieldChange("price", e)}/>
        </div>
        <div>
          <input type='url' placeholder='images' 
          onChange={(e) => handleFromFieldChange("images", e)}/>
        </div>
        <div>
          <input type='text' placeholder='propertyAddress' 
          onChange={(e) => handleFromFieldChange("propertyAddress", e)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default index