
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, Alert} from 'react-native';
import { StackNavigator } from "react-navigation";
import SubProject from "./SubProject.js";

let logo = require('./Images/logo.png');

export default class ProjectTab extends Component {

  onClick(){
    alert("Clicked!");
  }

  render() {

    let projects = [
        {
          "title" : "Wakaf Fasiliti Masjid UPM",
          "expired" : "2017-12-31",
          "like" : "12",
          "current" : "55",
          "target" : "55555",
          "image" : require('./Images/logo.png'),
        },
        {
          "title" : "Wakaf Ambulan Pusat Kesihatan UPM",
          "expired" : "2017-12-31",
          "like" : "15",
          "current" : "88",
          "target" : "88888",
          "image" : require('./Images/home.jpg'),
        },
      ];

    return (
      <Container>
        <Content>
          <List dataArray={projects}
            renderRow={(project) =>
              <ListItem>
                <Card>
                  <CardItem cardBody button onPress={() => this.props.navigation.navigate("SubProject")}>
                    <Image source={project.image} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                      <Body>
                        <Text>{project.title}</Text>
                      </Body>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text note>Current Donation: RM {project.current}</Text>
                      <Text note>Target Donation: RM {project.target}</Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>{project.like} Likes</Text>
                      </Button>
                    </Left>
                    <Right>
                      <Text>Expired on: {project.expired}</Text>
                    </Right>
                  </CardItem>
                </Card>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
