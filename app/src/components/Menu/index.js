import React from 'react';
import GameIcon from 'react-native-vector-icons/Ionicons';
import MovieIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import NewIcon from 'react-native-vector-icons/Foundation';
import TodoIcon from 'react-native-vector-icons/AntDesign';
import ListIcon from 'react-native-vector-icons/FontAwesome';

import {MenuWrapper} from './styles';
import colors from '../../assets/colors';
import MenuButton from './components/MenuButton';

export default function Menu({handleShowInput, setLabel, setRequest}) {
  function handleSetRequest(request) {
    setLabel(request.label);
    setRequest(request);
    handleShowInput();
  }

  return (
    <MenuWrapper>
      <MenuButton
        icon={<TodoIcon name="checksquare" color={colors.blue} size={50} />}
        items={[
          {
            id: 1,
            label: 'Novo',
            icon: <NewIcon name="burst-new" color={colors.pink} size={40} />,
            action: () =>
              handleSetRequest({
                label: 'Nova Tarefa',
                type: 'new',
                contentType: 'todo',
              }),
          },
          {
            id: 2,
            label: 'Listar',
            icon: <ListIcon name="list-alt" color={colors.pink} size={30} />,
            action: () =>
              handleSetRequest({
                label: 'Listar Tarefas',
                type: 'list',
                contentType: 'todo',
              }),
          },
        ]}
      />
      <MenuButton
        icon={<GameIcon name="game-controller" color={colors.blue} size={50} />}
        items={[
          {
            id: 1,
            label: 'Novo',
            icon: <NewIcon name="burst-new" color={colors.pink} size={40} />,
            action: () =>
              handleSetRequest({
                label: 'Novo Jogo',
                type: 'new',
                contentType: 'games',
              }),
          },
          {
            id: 2,
            label: 'Buscar',
            icon: <SearchIcon name="search1" color={colors.pink} size={30} />,
            action: () =>
              handleSetRequest({
                label: 'Buscar Jogo',
                type: 'search',
                contentType: 'games',
              }),
          },
        ]}
      />
      <MenuButton
        icon={<MovieIcon name="movie-open" color={colors.blue} size={50} />}
        items={[
          {
            id: 1,
            label: 'Novo',
            icon: <NewIcon name="burst-new" color={colors.pink} size={40} />,
            action: () =>
              handleSetRequest({
                label: 'Novo Filme',
                type: 'new',
                contentType: 'movies',
              }),
          },
          {
            id: 2,
            label: 'Listar',
            icon: <SearchIcon name="search1" color={colors.pink} size={30} />,
            action: () =>
              handleSetRequest({
                label: 'Listar Filmes',
                type: 'search',
                contentType: 'movies',
              }),
          },
          {
            id: 3,
            label: 'Buscar',
            icon: <SearchIcon name="search1" color={colors.pink} size={30} />,
            action: () =>
              handleSetRequest({
                label: 'Buscar Filmes',
                type: 'search',
                contentType: 'movies',
              }),
          },
        ]}
      />
    </MenuWrapper>
  );
}
