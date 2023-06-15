import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import phone from '../Assets/phones.png'
import headphone from '../Assets/headphones.png'
import watch from '../Assets/watch.png'


function Home() {
    return (
      <Container style={{ overflowY: 'hidden' ,height: '85vh'}}>
      
        <Row className="mt-3">
          <Col style={{ textAlign: 'left'}}>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400', fontSize: '2.5rem', marginBottom: '1rem', marginLeft: '95px',}}>BUY YOUR</h1>
            <p style={{fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', marginBottom: '2rem',fontWeight: 'bold', marginLeft:'95px' }}>FAVOURITE PRODUCTS HERE</p>
            <div style={{ display: 'flex', marginBottom:'50px', justifyContent:'center', alignItems:'center', flexWrap: 'wrap', marginLeft:'95px'}}>
            <div style={{width:'300px',height:'450px',marginRight:'100px',background: '#fff', borderRadius: '10px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Sofia Sans Condensed', 'sans-serif'",paddingTop:'20px' }}>
                    <img src={phone} alt='img' style={{padding:'20px', height: '250px', width: '200px'}}/>
                    <h2 style={{marginTop: '30px', lineHeight: "40px", fontFamily: "'Sofia Sans Condensed', 'sans-serif'", fontSize: "40px"}}>PHONES</h2>
                    <button style={{ width:'170px',height:'50px', border: 'None', marginTop:'10px', backgroundColor: '#D9D9D9', borderRadius:'35px'}}><a href='/phones'  style={{color:'black', textDecoration:'None', fontSize: '20px'}}>Buy Now</a></button>

                </div>
                </div>
               
                <div style={{width:'300px',height:'450px',marginRight:'100px',background: '#fff', borderRadius: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Sofia Sans Condensed', 'sans-serif'",paddingTop:'20px' }}>
                    <img src={watch} alt='watch' style={{padding:'20px', height: '250px', width: '200px'}}/>
                    <h2 style={{marginTop: '30px', lineHeight: "40px", fontFamily: "'Sofia Sans Condensed', 'sans-serif'", fontSize: "40px"}}>SMARTWATCH</h2>
                    <button style={{ width:'170px',height:'50px', border: 'None', marginTop:'10px', backgroundColor: '#D9D9D9', borderRadius:'35px'}}><a href='/watches'  style={{color:'black', textDecoration:'None', fontSize: '20px'}}>Buy Now</a></button>

                </div>
            </div>
               

                <div style={{width:'300px',height:'450px',marginRight:'100px',background: '#fff', borderRadius: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Sofia Sans Condensed', 'sans-serif'",paddingTop:'20px' }}>
                    <img src={headphone} alt='headphone' style={{padding:'20px', height: '250px', width: '200px'}} />
                    <h2 style={{marginTop: '30px', lineHeight: "40px", fontFamily: "'Sofia Sans Condensed', 'sans-serif'", fontSize: "40px"}}>HEADSETS</h2>
                    <button style={{ width:'170px',height:'50px', border: 'None', marginTop:'10px', backgroundColor: '#D9D9D9', borderRadius:'35px'}}><a href='/headsets'  style={{color:'black', textDecoration:'None', fontSize: '20px'}}>Buy Now</a></button>

                </div>
            </div>
       </div>

            
          </Col>
         
          
        </Row>
      
      </Container>
    );
  }
  
  export default Home;