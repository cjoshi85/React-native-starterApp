/** @format */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import { name as appName } from './app.json';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent(appName, () => App);
