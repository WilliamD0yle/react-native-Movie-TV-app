import React from "react";
import { StatusBar, Platform } from "react";
import { StackNavigator } from "react-navigation";
// screens identified by the router
import NavigationDrawer from "./NavigationDrawer";
import Movies from '../Containers/Movies';
import MovieDetailsScreen from '../Containers/MovieDetailsScreen';
import TV from '../Containers/TV';
import TVDetailsScreen from '../Containers/TVDetailsScreen';
import EpisodesScreen from '../Containers/EpisodesDetailsScreen';
import Search from '../Containers/Search';

const PrimaryNav = StackNavigator(
	{
		NavigationDrawer: { screen: NavigationDrawer },
		Movies: { screen: Movies },
		MovieDetails: { screen: MovieDetailsScreen },
		TV: { screen: TV },
		TVDetails: { screen: TVDetailsScreen },
		EpisodesScreen: { screen: EpisodesScreen },
		Search: { screen: Search },
	},
	{
		initialRouteName: "NavigationDrawer",
		headerMode: 'none',
	}
);

export default PrimaryNav;
