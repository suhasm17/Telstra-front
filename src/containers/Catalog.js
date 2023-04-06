import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import iphone from '../Assets/iphone.png'
import samsung from '../Assets/samsung.png'
import pixel from '../Assets/pixel.png'
import Search from './Search'


function Catalog() {
    return (
      <Container>
       <form class="d-flex ms-1">
    
   <Search></Search>

  </form>
        <Row className="mt-3">
          <Col style={{ textAlign: 'left' }}>
        
            <p style={{ fontSize: '2.5rem', marginBottom: '2rem',fontWeight: 'thin' }}>FIND YOUR PHONES HERE</p>
            <div className="ui grid container">
            <div className='card'  style={{width:'350px',height:'350px',marginRight:'20px'}}>
                
                <div className='card__body'>
                    <img src={iphone} alt='img' style={{paddingTop:'3px',paddingBottom:'5px'}} />
                    <h2 className='card__title' style={{marginbottom: '30px'}}>IPHONES</h2>
                    <button className='card__btn' style={{ width:'95px',height:'35px',backgroundColor:'black',color:'white',marginleft: '-115px'}}><a href='/Products' style={{color:'white'}}>View</a></button>

                </div>
                </div>
               
                <div className='card' style={{width:'350px',height:'350px',marginRight:'20px'}}>
                <div className='card__body'>
                    <img src={samsung} alt='' style={{paddingBottom:'15px',paddingTop:'35px'}} />
                    <h2 className='card__title'>SAMSUNG</h2>
                    <button className='card__btn' style={{ width:'100px',height:'35px',backgroundColor:'black',color:'white'}}>View</button>

                </div>
                </div>

                <div className='card' style={{width:'350px',height:'350px',marginRight:'20px'}}>
                <div className='card__body'>
                    <img src={pixel} alt='' style={{paddingTop:'20px'}}/>
                    <h2 className='card__title'  style={{paddingTop:'14px'}}>GOOGLE PIXEL</h2>
                    <button className='card__btn' style={{ width:'100px',height:'35px',backgroundColor:'black',color:'white'}}>View</button>

                </div>
            </div>
       
</div>
            
          </Col>
         
          
        </Row>
      
      </Container>
    );
  }
  
  export default Catalog;