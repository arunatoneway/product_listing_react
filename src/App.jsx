import Navbarcomp from "./components/navbarcomponent"
import { useState } from "react";
import Productcard from "./components/productcard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";


function App() {

  const products = [
    {
      title: "I Phone",
      category: "Electronics",
      ratting: "4",
      price: "100000",
      image: "https://www.geeky-gadgets.com/wp-content/uploads/2025/08/iPhone-17-Air-2.jpg"
    },
    {
      title: "I Fan",
      category: "Appliances",
      ratting: "4",
      price: "10000",
      image:"https://tse2.mm.bing.net/th/id/OIP._tuXX6uxd3bEiIl_bmDjuwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Lego Bunny",
      category: "Toys",
      ratting: "4.5",
      price: "5000",
      image:"https://m.media-amazon.com/images/I/81QOawp0LwL.jpg"
    },
    {
      title: "Shirt",
      category: "Fashion",
      ratting: "4",
      price: "800",
      image:"https://tse3.mm.bing.net/th/id/OIP.DK-6UYgz4CMCaASwCb3fGQHaIh?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Headset",
      category: "Electronics",
      ratting: "4",
      price: "1000",
      image:"https://www.bhphotovideo.com/images/images2500x2500/logitech_981_000719_g_pro_gaming_headset_1418048.jpg"
    },
    {
      title: "S Phone",
      category: "Electronics",
      ratting: "4",
      price: "9000",
      image: "https://www.geeky-gadgets.com/wp-content/uploads/2025/08/iPhone-17-Air-2.jpg"
    },
    {
      title: "Lego Parrot",
      category: "Toys",
      ratting: "4.5",
      price: "6000",
      image:"https://m.media-amazon.com/images/I/81i12VVBBcL._AC_SL1500_.jpg"
    },
    {
      title: "Oven",
      category: "Appliances",
      ratting: "4",
      price: "10000",
      image:"https://static.wixstatic.com/media/fd9026_2278803b508a4a38b4b8dc730540d246~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/fd9026_2278803b508a4a38b4b8dc730540d246~mv2.jpg"
    },
    {
      title: "Barbecue Lays",
      category: "Grocery",
      ratting: "4",
      price: "30",
      image:"https://i5.walmartimages.com/asr/f0391b25-d871-4b5f-9d12-827dff72bb24_1.9363f702dbf82f644b7dddd556350e4a.jpeg"
    },
    {
      title: "White Shirt",
      category: "Fashion",
      ratting: "4",
      price: "1000",
      image:"https://tse3.mm.bing.net/th/id/OIP.DK-6UYgz4CMCaASwCb3fGQHaIh?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Black Headset",
      category: "Electronics",
      ratting: "4",
      price: "2000",
      image:"https://www.bhphotovideo.com/images/images2500x2500/logitech_981_000719_g_pro_gaming_headset_1418048.jpg"
    },
    {
      title: "Lego IronMan",
      category: "Toys",
      ratting: "4.5",
      price: "6000",
      image:"https://m.media-amazon.com/images/I/81AVQ-ZJjXL._AC_SL1500_.jpg"
    },
    {
      title: "Tometo",
      category: "Grocery",
      ratting: "4.5",
      price: "50",
      image:"https://i5.walmartimages.com/seo/Fresh-Grape-Tomato-10-oz-Package_d889aac0-b18c-44d2-a583-9f74b4b3ae93.00b4d994b555cf1bf9b4fc8ac3d457d4.jpeg"
    }

  ]

  const [list, setList] = useState(products)

  const filterfnc = (filtertype) => {
    
    if (filtertype === "Electonics") {

      setList(products.filter((value) => {
        return value.category == 'Electronics'
      }))

    }
    else if (filtertype === "Appliances") {

      setList(products.filter((value) => {
        return value.category == 'Appliances'
      }))


    }
    else if (filtertype === "Fashion") {

      setList(products.filter((value) => {
        return value.category == 'Fashion'
      }))

    }
    else if (filtertype === "Toys") {

      setList(products.filter((value) => {
        return value.category == 'Toys'
      }))

    }
    else if (filtertype === "Grocery") {

      setList(products.filter((value) => {
        return value.category == 'Grocery'
      }))

    }
    else if (filtertype === "All") {
      setList(products)
    }
    else if (filtertype === "LtoHPrice") {
      setList(products.sort(function(a, b){return (a.price - b.price)}))
    }
    else if (filtertype === "HtoLPrice") {
      setList(products.sort(function(a, b){return (b.price - a.price)}))
    }
    else if (filtertype === "LtoHRattings") {
      setList(products.sort(function(a, b){return (a.ratting - b.ratting)}))
    }
    else if (filtertype === "HtoLRattings") {
      setList(products.sort(function(a, b){return (b.ratting - a.ratting)}))
    }
    else if(filtertype.slice(0,6) == "Search"){

      setList(products.filter((value) => {
        return  (value.title.toLowerCase().indexOf(filtertype.slice(6).toLowerCase())!= -1 || value.category.toLowerCase().indexOf(filtertype.slice(6).toLowerCase())!= -1) 
      }))
      
    }
  };


  return (
    <>
      <Navbarcomp filter={filterfnc} /><br />
      <h1 style={{textAlign:'center'}}>Products</h1><br />
      
      

      <Container ><Row ><Productcard product={list} /></Row></Container>




    </>
  )
}

export default App
