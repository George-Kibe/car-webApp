import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <img src="/images/logo.svg" alt="Tesla Logo" />
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model X</a>
                <a href="#">Model 3</a>
                <a href="#">Model Y</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </CustomMenu>
            </RightMenu>
        </Container>
        
    )
}

export default Header

const Container =styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    right:0; top:0; left:0;

    `
const Menu =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    
    a {
        font-weight:600;
        text-color:black;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width:768px){
        display:none;
    }`

const RightMenu =styled.div`
    display:flex;
    align-items:center;
    a {
        font-weight:600;
        text-transform:uppercase;
        padding:10px;
     ]
    }`

const CustomMenu = styled.div`cursor:pointer;`