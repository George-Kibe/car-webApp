import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section({title, description, backgroundImg,leftBtnText, rightBtnText}) {
    console.log(backgroundImg)
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        { rightBtnText &&  //if right button exists, show it, else dont
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow className="rounded mx-auto d-block" src={`${process.env.PUBLIC_URL }/images/down-arrow.svg`} />
            </Buttons>            
        </Wrap>
    )
}

//background-image:url('/images/model-s.jpg');
export default Section

const Wrap = styled.div`
    z-index:10;
    width: 100vw;
    height:100vh; 
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
background-image:${props => `url("${process.env.PUBLIC_URL }/images/${props.bgImage}")`};
    
`
const ItemText =styled.div`
    padding-top: 15vh;
    text-align: center;`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    })
    `

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;`

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;` //inherits properties of LeftButton

const DownArrow=styled.img`
    margin-top:10px;
    height:40px;
    display:block;
    margin-left: auto;
    margin-right: auto; 
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;`

const Buttons = styled.div``







