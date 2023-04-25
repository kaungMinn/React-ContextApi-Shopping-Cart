import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Navbar, Nav,Container } from 'react-bootstrap'
import { DeviceMobile, ShoppingCart, Suitcase } from 'phosphor-react'

const DefaultLayout = () => {

  const styles = {
    fontFamily: 'Lobster_Two',
    fontWeight: 'normal',
    fontSize: '30px'
    
  }
  return (
    <>
        <Navbar bg="light" variant="light" className='sticky-top'>
            <Container>
            <Link className="navbar-brand d-flex text-secondary" to="/" >Kaung     <span className='text-primary'>&nbsp;Mobile</span> <DeviceMobile size={20} className="text-primary"/></Link>
            <Nav>
                
                <div className='d-flex justify-content-between align-items-center'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/shop" className='nav-link'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={30} className="text-white bg-primary rounded-circle p-1"/>
                </Link>
                </div>
                
            </Nav>

            
            </Container>
      </Navbar>

        <div className="container">
            <Outlet/>
        </div>
    
    </>
  )
}

export default DefaultLayout
