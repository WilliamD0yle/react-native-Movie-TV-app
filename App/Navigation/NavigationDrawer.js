import React from "react";
import { DrawerNavigator } from "react-navigation";
import Movies from '../Containers/Movies';
import TV from '../Containers/TV';
import DrawerContent from "../Containers/DrawerContent";

const icons = {Movies:'local-movies', TV:'tv'};

const NavigationDrawer = DrawerNavigator({
  Movies: { screen: Movies },
  TV: { screen: TV },
	},
	{
		initialRouteName: "Movies",
		contentComponent: props => <DrawerContent {...props} icons={icons} />,
	}
);

export default NavigationDrawer;
