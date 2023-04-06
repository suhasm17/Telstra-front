import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import phone from '../Assets/phones.png'
import headphone from '../Assets/headphones.png'
import watch from '../Assets/watch.png'
import Search from './Search'

function Home() {
    return (
      <Container>
       <form class="d-flex ms-1">
<Search></Search>
    

  </form>
        <Row className="mt-3">
          <Col style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }} >BUY YOUR</h1>
            <p style={{ fontSize: '2.5rem', marginBottom: '2rem',fontWeight: 'bold' }}>FAVORITE PRODUCTS HERE</p>
            <div className="ui grid container">
            <div className='card'  style={{width:'350px',height:'350px',marginRight:'20px'}}>
                
                <div className='card__body'>
                    <img src={phone} alt='img' style={{paddingTop:'25px',paddingBottom:'35px'}}/>
                    <h2 className='card__title' style={{marginbottom: '40px'}}>PHONES</h2>
                    <button className='card__btn' style={{ width:'95px',height:'35px',backgroundColor:'black',marginleft: '-115px'}}><a href='/Catalog' style={{color:'white'}}>View</a></button>

                </div>
                </div>
               
                <div className='card' style={{width:'350px',height:'350px',marginRight:'20px'}}>
                <div className='card__body'>
                    <img src={watch} alt='' style={{paddingBottom:'20px'}}/>
                    <h2 className='card__title'>SMARTWATCH</h2>
                    <button className='card__btn' style={{ width:'100px',height:'35px',backgroundColor:'black',color:'white'}}>View</button>

                </div>
                </div>
               

                <div className='card' style={{width:'350px',height:'350px',marginRight:'20px'}}>
                <div className='card__body'>
                    <img src={headphone} alt='' style={{paddingTop:'20px'}} />
                    <h2 className='card__title' style={{paddingTop:'20px'}}>HEADSETS</h2>
                    <button className='card__btn' style={{ width:'100px',height:'35px',backgroundColor:'black',color:'white'}}>View</button>

                </div>
            </div>
       </div>

            
          </Col>
         
          
        </Row>
      
      </Container>
    );
  }
  
  export default Home;