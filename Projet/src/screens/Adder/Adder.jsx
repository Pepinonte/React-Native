import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';

const ajout = (nomCompte, montantCompte) => {
  console.log('ajout');
};

export default function Adder({navigation}) {
  const [nomCompte, setNomCompte] = useState('');
  const [montantCompte, setMontantCompte] = useState('');

  const postUser = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 121,
          name: nomCompte,
          montant: montantCompte,
        }),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View>
        <TextInput
          value={nomCompte}
          onChangeText={setNomCompte}
          placeholder="nom du compte"
        />
        <TextInput
          value={montantCompte}
          onChangeText={setMontantCompte}
          placeholder="montant du compte"
        />
        <Button
          title="login"
          onPress={() => {
            postUser().then(data => console.log(data));
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </View>
  );
}
