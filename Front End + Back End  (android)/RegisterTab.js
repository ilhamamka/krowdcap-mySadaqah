import React, { Component } from 'react';
import { AppRegistry, View, Image, TouchableOpacity, Keyboard, StyleSheet, ImageBackground, Dimensions, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, InputGroup} from 'native-base';

let bgRegister = require('./Images/home.jpg');
let logo = require('./Images/logo.png');
const window = Dimensions.get('window');

export default class RegisterTab extends Component {

	constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'', 
			userPassword:'',
			userPhone:''
		}
	}

	userRegister = () =>{
		//alert('ok'); // version 0.48
		
		const {userName} = this.state;
		const {userEmail} = this.state;
		const {userPassword} = this.state;
		const {userPhone} = this.state;
		
		
		fetch('http://t4demo.com/faris/register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: userName,
				email: userEmail,
				password: userPassword,
				phone: userPhone,
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});
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
              <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 30,}}>Register</Text>
            </View>
            <View style={styles.viewCenter}>
                <Form>
                  <Item floatingLabel>
                    <Label style={{color: '#ffffff'}}>Full Name</Label>
                    <Input
						onChangeText= {userName => this.setState({userName})}
	  					style={{color: '#ffffff'}}
					/>
                  </Item>
                  <Item floatingLabel last>
                    <Label style={{color: '#ffffff'}}>Email Address</Label>
                    <Input
						onChangeText= {userEmail => this.setState({userEmail})}
	  					style={{color: '#ffffff'}}
					/>
                  </Item>
                  <Item floatingLabel>
                    <Label style={{color: '#ffffff'}}>Password</Label>
                    <Input
						onChangeText= {userPassword => this.setState({userPassword})}
	  					style={{color: '#ffffff'}}
					/>
                  </Item>
                  <Item floatingLabel>
                    <Label style={{color: '#ffffff'}}>Phone Number</Label>
                    <Input
						onChangeText= {userPhone => this.setState({userPhone})}
	  					style={{color: '#ffffff'}}
					/>
                  </Item>

                </Form>
            </View>
			<View style={styles.viewBottom}>
              <Button onPress={this.userRegister} block style={{backgroundColor:'#ffcc0090'}}>
                <Text>Register Now</Text>
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
    height: window.height+100,
    alignItems: 'center',
  },
  bgReg: {
    flex: 1,
    backgroundColor:'#00000099',
    height: window.height,
    width: window.width,
  },
  viewUpper: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  },
  viewCenter: {
    flex: 3,
    width: window.width,
  },
  viewBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
  },
  imgLogoReg: {
    height: 200,
    width: 200,
  },
});
