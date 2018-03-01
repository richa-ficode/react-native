/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './HomeScreen';
import CreateHome from './CreateHome';

const Myrouter = () => {
  return (
  <Router>
    <Stack key="root" hideNavBar>
        <Scene key="createhome"
        component={CreateHome}
        title="CreateHome"
        />
        <Scene key="homescreen"
        component={HomeScreen}
        title="HomeScreen"
        initial/>
    </Stack>
  </Router>
  );
  }

  export default Myrouter;
