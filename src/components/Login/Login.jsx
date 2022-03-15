import styled from 'styled-components';
import React from 'react';
import './LoginStyle.css';
import FancyInput from "./Input"
import FancyButton from "./Button"
import axios from 'axios';
import { Component } from 'react/cjs/react.production.min';
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: #1312128f;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.3);
    backdrop-filter: blur(2.5px);
    border-radius:15px ;
    color: #ffffff;
    text-transform: uppercase ;
    letter-spacing: 0.5em;
    @media screen and (max-width: 320px) {
        width: 90% ;
        height: 90% ;
    }

    @media screen and (max-width: 360px) {
        width: 90% ;
        height: 90% ;

    }
     @media screen and (max-width: 411px) {
        width: 90% ;
        height: 90% ;

    }
    @media screen and (max-width: 768px) {
        width: 90% ;
        height: 90% ;

    }
     @media screen and (max-width: 1024px) {
        width: 90% ;
        height: 90% ;

    }
    @media screen and (max-width: 1280px) {
        width: 90% ;
        height: 90% ;

    }

`;

const Title = styled.h2`
margin: 3rem 0 2rem 0 ;

`;

const ClickableText = styled.h3`
margin: 1rem 0 2rem 0 ;
cursor: pointer;
color:white;
font-size:small;

`;

const InputText = styled.div`
display:flex ;
margin: 1rem 0 2rem 0 ;
flex-direction:column ;
justify-content: space-around;
align-items: center ;
height: 20% ;
width: 100% ;
`;

const Buttons = styled.div`
    display:flex ;
    flex-direction:column ;
    height: 20% ;
    justify-content: space-around;
    align-items: center ;
    margin: 1rem 0 2rem 0 ;
    width:100% ;
`;
let error=""

export class Login extends Component{
    state={
     
        error:""
    }
    render() {

  
        let loginReq = () => {
            console.log("login");
        
          
        
         
                axios.post("http://localhost:8000/api/login",{    
                "email":"teddfsfdsfdfsst@test.com",
                "password":"123456789@aA",     
           
            }).then(response=> {
                this.setState({
                    error:response.statusText
                    });
                console.log(response);
              })
              .catch(error=> {
              
                error=error.response.data.message
                
                this.setState({
                    error:error
                    });
                console.log(error)
              });
           
           
        
        
        
        }
    return (
    <body className="Login">

<Container>   
        <Title>welcome</Title>
        <InputText>
        <FancyInput type="text" placeholder='Email'></FancyInput>
        <FancyInput type="password" placeholder='Password'></FancyInput>
        </InputText>
        <ClickableText>Forgot Password?</ClickableText>
        <Buttons>
            <FancyButton onClick={loginReq} nameButton='Login'></FancyButton>
            <FancyButton nameButton='Register'></FancyButton>
        </Buttons>
      
        <label>{this.state.error}</label>
    </Container>
    </body>

     );
    }
    } 



export default Login;