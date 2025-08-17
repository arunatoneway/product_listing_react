import Navbarcomp from "./components/navbarcomponent"
import { useState } from "react";

function App() {

  const products = [
    {
      title: "Smart Phone",
      category: "Electronics",
      ratting: "4",
      price: "10000"
    },
    {
      title: "Fan",
      category: "Appliances",
      ratting: "4",
      price: "10000"
    },
    {
      title: "Shirt",
      category: "Fashion",
      ratting: "4",
      price: "10000"
    },
    {
      title: "Headset",
      category: "Electronics",
      ratting: "4",
      price: "10000"
    }
  ]

  const [list, setList] = useState(products)

  const filterfnc = (filtertype)=>{
    if(filtertype==="Electonics"){

      setList(products.filter((value)=>{
        return value.category == 'Electronics'
      }))

      console.log(list)
      
    }
    else if(filtertype==="Appliances"){

      setList(products.filter((value)=>{
        return value.category == 'Appliances'
      }))

      console.log(list)

    }
    else if(filtertype==="Fashion"){

      setList(products.filter((value)=>{
        return value.category == 'Fashion'
      }))

      console.log(list)

    }
    else if(filtertype==="Toys"){

      setList(products.filter((value)=>{
        return value.category == 'Toys'
      }))

      console.log(list)

    }
    else if(filtertype==="Grocery"){

      setList(products.filter((value)=>{
        return value.category == 'Grocery'
      }))

      console.log(list)

    }
  };


  return (
    <>
      <Navbarcomp filter = {filterfnc}/>



      <h1>helloo world</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae hic alias! Reprehenderit dolorum totam quaerat! Quis consequuntur eligendi non mollitia natus eveniet quas, doloremque laborum quaerat excepturi deleniti exercitationem!</p>

    </>
  )
}

export default App
