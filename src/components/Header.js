import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] =useState(true);
    const cars = useSelector(selectCars)
    //console.log(cars)

    return (
        <Container>
            <a>
              <svg width="100" height="24" xmlns="http://www.w3.org/2000/svg">
                <g>
                <g stroke="null" id="svg_5">
                <path stroke="null" id="svg_4" fill="#000" d="m0.33333,2.84514a2.83227,5.1168 0 0 0 2.04391,3.65562l3.19141,0l0.16351,0.11606l0,14.54857l1.99134,0l0,-14.52749l0.18104,-0.11606l3.19434,0a2.86731,5.1801 0 0 0 2.0439,-3.65559l0,-0.03694l-12.80944,0l0,0.01583zm69.67086,-0.02109l-1.98551,0l0,18.38354l9.09245,0a2.82643,5.10625 0 0 0 1.73441,-3.61868l-8.84721,0l0.00586,-14.76486zm-15.27965,3.61868c1.057,-0.52752 1.94464,-2.01507 2.15779,-3.62922l-11.12468,0.03163l0,10.84024l9.10121,0l0,3.81385l-7.14199,0a3.97101,7.17407 0 0 0 -2.54319,3.69254l11.64734,0l0,-11.11452l-9.0983,0l0,-3.63451l7.00182,0zm33.92006,14.75432l1.97383,0l0,-7.39562l7.17702,0l0,7.39562l1.97089,0l0,-11.08815l-11.12175,-0.02111l0,11.10927zm-63.39023,-14.71212l7.59164,0a2.79431,5.04822 0 0 0 2.0585,-3.69254l-11.70864,0a2.80599,5.06932 0 0 0 2.0585,3.69254zm0,7.26373l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69251l-11.70864,0a2.81183,5.07987 0 0 0 2.0585,3.69251zm0,7.45893l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69254l-11.70864,0a2.80891,5.0746 0 0 0 2.0585,3.69254zm65.14507,-14.71212l7.59164,0a2.79723,5.0535 0 0 0 2.06142,-3.69254l-11.71156,0a2.80015,5.05877 0 0 0 2.0585,3.69254z" className="tds-icon-fill--primary"/>
                </g>
                </g>
              </svg>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href='#'>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>                    
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index} ><a href='#'>{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>                
                <li><a href="#">Diesel</a></li>
                <li><a href="#">Petrol</a></li>
                <li><a href="#">Upholstery</a></li>                
            </BurgerNav>
        </Container>
        
    )
}

export default Header

const Container =styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    right:0; top:0; left:0;
    z-index:1;

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

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;`


const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props =>props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.3s;

    li{
        padding:15px 0;
        color:black;
        border-bottom:1px solid rgba(0,0,0,.2);

        a{
            font-weight:600;

        }
    }    
    `

const CustomClose = styled(CloseIcon)`
    cursor:pointer;`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;`