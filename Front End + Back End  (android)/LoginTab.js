import React, { Component } from 'react';
import { AppRegistry, View, Image, TouchableOpacity, Keyboard, StyleSheet, ImageBackground, Dimensions, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, InputGroup} from 'native-base';
import { StackNavigator } from 'react-navigation';

let bgRegister = require('./Images/home.jpg');
let logo = require('./Images/logo.png');
const window = Dimensions.get('window');

export default class LoginTab extends Component {

	constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}
	
	login = () =>{
		const {userEmail,userPassword} = this.state;
		//here we will send our data to server with fetch
		
		fetch('http://t4demo.com/faris/login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				 //this.props.navigation.navigate("Profile");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		
		
		Keyboard.dismiss();
	}

  	render() {
    return (
      <Container>
        <Content>
          <ImageBackground source={bgRegister} style={styles.imgBgReg}>
          <View style={styles.bgReg}>
            <View style={styles.viewUpper}>
              <Image source={logo} style={styles.imgLogoReg}/>
              <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 40,}}>Krowdcap</Text>
              <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30,}}>Login</Text>
            </View>
            <View style={styles.viewCenter}>
                <Form>
                  <Item floatingLabel last>
                    <Label style={{color: '#ffffff'}}>Email Address</Label>
                    <Input style={{color: '#ffffff'}}
						   onChangeText={userEmail => this.setState({userEmail})}/>
                  </Item>
                  <Item floatingLabel>
                    <Label style={{color: '#ffffff'}}>Password</Label>
                    <Input style={{color: '#ffffff'}}
						   onChangeText={userPassword => this.setState({userPassword})}/>
                  </Item>
                </Form>
            </View>
            <View style={styles.viewBottom}>
              <Button onPress={this.login} block style={{backgroundColor:'#ffcc0090'}}>
                <Text>Get Started</Text>
              </Button>
            </View>
          </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  imgBgReg: {
    flex: 1,
    height: window.height,
    alignItems: 'center',
  },
  bgReg: {
    flex: 1,
    backgroundColor:'#00000099',
    height: window.height,
    width: window.width,
  },
  viewUpper: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  },
  viewCenter: {
    flex: 1.1,
    width: window.width,
  },
  viewBottom: {
    flex: 1,
    width: window.width,
  },
  imgLogoReg: {
    height: 200,
    width: 200,
  },
});
