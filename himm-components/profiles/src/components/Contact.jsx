import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

const Wrapper = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Box = styled.div`
    display: inline-block;
    height: 580px;
    width: 520px;
    z-index: 1;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: auto;
    top: 5%;
    bottom: 5%;
    left: 10%;
    right: 10%;
    border-radius: 10px;
    padding: 30px;
    background-color: white;
    transition: 0.2 ease-in;
    @media (max-width: 768px) {
        width: 60%;
        height: 85%;
        }
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const ContactButton = styled.button`
  display: block;
  width: 100%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 0px;
  background-image: radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%);
  font-weight: 600;  
  border-radius: 12px;
  height: 47px;
`;

const BTN = styled.button`
    display: block;
    width: 100%;
    background-color: white;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;  
    border-radius: 12px;
    height: 47px;
    border: 2px solid #C0C0C0;
    &:hover {
        border: 2px solid black;
      }
`;

const Input = styled.input`
    display: block;
    width: 96%;
    height: 10px;
    background-color: white;
    font-size: 14px;
    padding: 10px;
    font-weight: 600;  
    border-radius: 7px;
    border: 1px solid #C0C0C0;
    color: #484848;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    height: 31px;
    background-color: white;
    font-size: 14px;
    padding: 30px;
    font-weight: 500;  
    border-radius: 7px;
    border: 1px solid #C0C0C0;
    color: #484848;

`;

const LoginTitle = styled.div`
   font-size: 19px;
   font-weight: 620; 
   display: flex;
   flex: 1;
   Button {
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
   }
   span {
      align-items: center;
      justify-content: center;
      flex: 1;
      color: #484848;
      display: flex;
   }
`;

const IconLetter = styled.div`
    font-size: 17px;
    font-weight: 620; 
    display: flex;
    flex: 1;
    Button {
    cursor: pointer;
    &:hover{
        text-decoration: underline;
      }
    }
    span {
    align-items: center;
    justify-content: center;
    flex: 2;
    display: flex;
    }
`;

const Divider = styled.h4`
   font-size: 16px;
   text-align: center;
`;

const Mes = styled.h6`
   font-size: 10px;
   font-weight:350px;
`;

const PassInput = styled.input`
   height: 50px;
   width: 50px;
   margin-right:10px;
   margin-left: 56px;
   
   flex-flow: column wrap;
   @media (max-width: 900px) {
    width: 50%;
    height: 50%;
    }
`;

const Enter = styled.button`
    display: block;
    width: 100%;
    background-color: white;
    font-size: 16px;
    padding: 10px;
    font-weight: 600;  
    border-radius: 12px;
    cursor: pointer;
    height: 36px;
    &:hover {
        border: 2px solid black;
      }
`;


class Contact extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            page: 0,
            phoneNumber:'',
            password1: '',
            password2: '',
            password3: '',
            password4: '',
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleInputEnter = this.handleInputEnter.bind(this);
    }
    
    handleInputEnter(e) {
        if(e.Key === 'Enter') {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1].current.focus();
            event.preventDefault();
        }
    }

    handleContinue(e) {
        this.setState({
            page: this.state.page + 1
        })
    }
    handleChange(e) {
       e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleEnter(e) {
        alert('Successfully Logged In!')
    }
    
    render() {
        
        if (!this.props.logged) {
            return null;
        }
        return (
            <Wrapper logged={this.props.logged}>
                <div style={{
                    transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.show ? "1" : "0"}}>
                </div>
                <Box>
                    <div>
                         {this.state.page === 0   ?
                           <div>
                               <LoginTitle>
                                    <Button onClick={this.props.closeLogIn}> <img style={{ maxWidth: "30px", maxHeight: "30px", borderRadius: "50%"}}src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/cancel.jpg" /></Button> 
                                    <span>Log In</span>
                               </LoginTitle>
                                    <form>
                                        <label>
                                            Country / Region :
                                            <Select>
                                                <option>Uganda (+256)</option>
                                                <option>Ukraine (+380)</option>
                                                <option>United Arab Emirates (+971)</option>
                                                <option>United Kingdom (+44)</option>
                                                <option selected>United States (+1)</option>
                                                <option>Uzbekistan (+998)</option>
                                                <option>Vanuatu (+678)</option>
                                                <option>Vatican City (+379)</option>
                                                <option>Venezuela (+58)</option>
                                                <option>Vietnam (+84)</option>
                                                <option>Wallis and Futuna (+681)</option>
                                            </Select>
                                        </label>
                                    </form>
                                <label >
                                   <Input id="phoneNumber" value={this.state.phoneNumber} placeholder="Phone Number" onChange={this.handleChange}/>
                                </label>
                                <Mes>We’ll call or text you to confirm your number. Standard message and data rates apply.</Mes>
                                <ContactButton onClick={this.handleContinue}> Continue </ContactButton>
                                <br></br>
                                <Divider>or</Divider>
                                <BTN><IconLetter><img style={{ maxWidth: "30px", maxHeight: "30px", borderRadius: "50%"}}src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/e.jpg" /><span>Continue with email</span></IconLetter> </BTN>
                                <br></br>
                                <BTN><IconLetter><img style={{ maxWidth: "30px", maxHeight: "30px", borderRadius: "50%"}}src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/f.jpg" /><span>Continue with Facebook</span></IconLetter></BTN>
                                <br></br>
                                <BTN><IconLetter><img style={{ maxWidth: "30px", maxHeight: "30px", borderRadius: "50%"}}src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/g.jpg" /><span>Continue with Google</span></IconLetter></BTN>
                                <br></br>
                                <h5>Don't have an account? <a>Sign up</a></h5><br></br>
                           </div>
                         : 
                         <div>
                             <LoginTitle>
                                <Button onClick={this.props.closeLogIn}><img style={{ maxWidth: "30px", maxHeight: "30px", borderRadius: "50%"}}src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/cancel.jpg" /> </Button> 
                                <span>Confirm your number</span><br></br><br></br>
                             </LoginTitle>
                             <h5>Enter the code just sent to 4152617616:</h5>
                            <form tabIndex="0">
                                <PassInput id="password1" value={this.state.password1} onChange={this.handleChange} />
                                <PassInput id="password2" value={this.state.password2} onChange={this.handleChange} />
                                <PassInput id="password3" value={this.state.password3} onChange={this.handleChange}/>
                                <PassInput id="password4" value={this.state.password4} onChange={this.handleChange}/>
                            </form> 
                             <br></br>
                             <Enter onClick={this.handleEnter}>Enter</Enter>
                             <br></br>
                             <div>Didn't get a text? Send again</div>
                             <div>Log in another way</div>
                         </div>
                         }
                    </div>
                </Box>
            </Wrapper>
        )
    }
    
}

export default Contact;

{/* <form>
    <label>
        Country/Region:
        <select>
            <option>United States (+1)</option>
            <option>Uzbekistan (+998)</option>
            <option>Vanuatu (+678)</option>
            <option>Vatican City (+379)</option>
            <option>Venezuela (+58)</option>
            <option>Vietnam (+84)</option>
            <option>Wallis and Futuna (+681)</option>
        </select>
    </label>
</form> */}