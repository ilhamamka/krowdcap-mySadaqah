import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Title, Body} from 'native-base';
import Tab1 from './LoginTab.js';
import Tab2 from './RegisterTab.js';
import Tab3 from './NaviProject.js';

export default class KrowdcapRegister extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Body><Title>Krowdcap</Title></Body>
        </Header>
        <Tabs initialPage={0}>
          <Tab heading="Login">
            <Tab1 />
          </Tab>
          <Tab heading="Register">
            <Tab2 />
          </Tab>
          <Tab heading="Project">
            <Tab3 />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}
