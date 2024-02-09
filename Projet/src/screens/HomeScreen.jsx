import React from 'react';
import {Text, View} from 'react-native';

import DataList from '../components/DataList';

import ImpData from '../data';

const HomeScreen = () => {
  return (
    <View>
      <DataList data={ImpData} />
    </View>
  );
};

export default HomeScreen;
