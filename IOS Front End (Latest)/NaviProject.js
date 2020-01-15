import React, { Component } from "react";
import ProjectTab from "./ProjectTab.js";
import SubProject from "./SubProject.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    ProjectTab: { screen: ProjectTab, navigationOptions: { header: null }},
    SubProject: { screen: SubProject },
  }
));
