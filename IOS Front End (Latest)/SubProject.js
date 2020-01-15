import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem , Footer, FooterTab} from "native-base";
import YouTube from 'react-native-youtube';

let projectTitle = "Wakaf Fasiliti Masjid UPM";
let projectYTid = "KVZ-P-ZI6W4";
let projectDesc = "Merupakan salah satu skin Dana Wakaf Ilmu UPM yang bertujuan menjana sumber kewangan untuk menambah baik kemudahan masjid.";

const Item = Picker.Item;
export default class PickerExample extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{flex: 5}}>
          <Title>{projectTitle}</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (


      <Container>
        <Content>
          <YouTube
          videoId={projectYTid} // The YouTube video ID
          play={false}           // control playback of video with true/false
          hidden={false}        // control visiblity of the entire view
          fullscreen={true}    // control whether the video should play inline
          onReady={(e)=>{this.setState({isReady: true})}}
          onChangeState={(e)=>{this.setState({status: e.state})}}
          onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
          onError={(e)=>{this.setState({error: e.error})}}
          style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
          />

          <Text style={{marginHorizontal:15}}>{projectDesc}</Text>
          <Text style={{marginHorizontal: 15, marginTop: 20}}>Choose amount:</Text>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="RM 5" value="key0" />
              <Item label="RM 10" value="key1" />
              <Item label="RM 20" value="key2" />
              <Item label="RM 50" value="key3" />
              <Item label="RM 100" value="key4" />
            </Picker>
          </Form>
          </Content>
          <Footer>
          <FooterTab>
            <Button full style={{backgroundColor:'green'}}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>FUND NOW</Text>
            </Button>
          </FooterTab>
        </Footer>


      </Container>




    );
  }
}

/*
<Left>
  <Button transparent onPress={() => this.props.navigation.goBack()}>
    <Icon name="arrow-back" />
  </Button>
</Left>


import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
​export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Text>
              I have changed the text color.
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

*/
