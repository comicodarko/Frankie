import React, { useRef, useState } from 'react';
import { Keyboard, SafeAreaView, StatusBar } from 'react-native';

import api from './services/api';
import colors from './assets/colors';
import Input from './components/Input';
import Menu from './components/Menu';

export default function App() {
	const [showInput, setShowInput] = useState(false);
	const [inputText, setInputText] = useState('');
	const [label, setLabel] = useState('');
	const [request, setRequest] = useState({type: '', contentType: '', content: ''});
	const inputRef = useRef(null);

	const handleShowInput = () => {
		setShowInput(true);
		setTimeout(() => {
			inputRef.current.focus();
		}, 500);
	};
	const handleHiddenInput = () => setShowInput(false);

	async function handleRequest() {
		const obj = {...request, content: inputText};
		handleHiddenInput();
		const response = 
			request.type === 'new' && await api.post('/newContent', obj);
			request.type === 'search' && await api.post('/searchContent', obj);
			request.type === 'load' && await api.post('/loadContent', obj);
		console.log(response.data);
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar barStyle='light-content' backgroundColor={colors.pink} animated />
			<Menu handleShowInput={handleShowInput} setLabel={setLabel} setRequest={setRequest} />
			{showInput && 
				<Input 
					refer={inputRef} label={label} handleRequest={handleRequest} 
					value={inputText} setValue={setInputText}
				/>}
		</SafeAreaView>
	);
};