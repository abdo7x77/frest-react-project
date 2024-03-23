import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproduct } from '../rtk/slices/Products-slice';
import { addToCart } from '../rtk/slices/Cart-slice';

function Products(){
    const products=useSelector((state)=>state.products);
    console.log(products);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchproduct());
    },[])
    return(
        <Container className='py-5'>
            <div className='row py-5' >
                {products.map((product)=>(
                    <div className='col' key={product.id}>
                    <Card style={{ width: '18rem' }}>
                  <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Card.Text>
                    <h3>{product.price}$</h3>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
                  </Card.Body>
                </Card>
                            </div>
                ))}
                {/* <div className='col'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div> */}
            </div>
            
        </Container>
    )
}export default Products;