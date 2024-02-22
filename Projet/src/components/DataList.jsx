import React from 'react';
import {Text, View, FlatList} from 'react-native';

const DataList = ({data}) => {
  return (
    <FlatList
      data={data.budget}
      renderItem={({item}) => {
        return (
          <>
            <Text>
              Compte: {item.name} {item.type}
            </Text>
            <Text>montant: {item.montant}</Text>
            <Text>
              Plusvalue: {item.plusvalue} - {item.rendement}%
            </Text>
            <Text>adffasfasdfasfasf</Text>
          </>
        );
      }}
    />
  );
};

export default DataList;
