import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


import Col from 'react-bootstrap/Col';



function Productcard({ product }) {

    function addtocart(name,price){
       return alert(`Item has been added to cart
                Item  : ${name}
                Price : ${price}`)
    
    }

    return (
        

            <>{product.map((pd) => {
                return <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card  style={{ width: 'auto', marginBottom:'24px' }}>
                        <Card.Img variant="top" src = {pd.image}  style={{height:'200px'}} />
                        
                        <Card.Body>
                            <Card.Title>{pd.title}</Card.Title>
                            <Card.Text>
                                Ratting : {pd.ratting}
                                <br />
                                Price : {pd.price}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>addtocart(pd.title,pd.price)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </Col>



            })}</>



        
    );
}

export default Productcard