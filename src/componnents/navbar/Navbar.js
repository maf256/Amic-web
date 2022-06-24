
import styled from 'styled-components'
import Logoimg from '../img/logo.png'
import {Link} from 'react-router-dom'


export  const Navbar = () => {
  return (
    <Header>
        <Link to='/'>
            <Logo src= {Logoimg}/>  
        </Link>
        <Ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutus'>About US</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
            <li><Link to='/contactus'>Contact Us</Link></li>
        </Ul>
        <Button>Get Started</Button>

    </Header>
  )
}

const Header = styled.header`
    display: flex ;
    max-width: 120rem;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
`

const Logo = styled.img`
    width: 100px;
    height: auto;

`
const Button = styled.button`
    width: 120px;
    height: 45px;
    background-color: #0085FF;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    font-size: 14px;
    :hover {
        box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
    }

`

const Ul = styled.ul `
    list-style: none;
    display: flex ;
    justify-content: space-between ;
    width: 58vw;
    padding: 0px 2vw ;
    
    li {
        
    }
    a {
        text-decoration: none;
        font-size: 18px;
        font-weight: 700;
        color: #6C6C6C;
        :hover{
            color: #298DEA;
        }

    }
`