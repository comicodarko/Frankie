import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import colors from './assets/colors';
import Menu from './components/Menu';

export default function App() {
	return (
		<SafeAreaView>
			<Menu />
			<StatusBar barStyle='light-content' backgroundColor={colors.pink}/>
		</SafeAreaView>
	);
};