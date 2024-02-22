import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MMKV} from 'react-native-mmkv';
import NetInfo from '@react-native-community/netinfo';

import DataList from '../../components/DataList';
import ImpData from '../../data';

const HomeScreen = ({navigation}) => {
  const [compte, setCompte] = useState('');
  const [comptes, setComptes] = useState([]);
  const [con, setCon] = useState(false);
  const storage = new MMKV();

  const verif = () => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setCon(state.isConnected);
    });
  };

  const handleAddNote = () => {
    const storage = new MMKV();
    // Ajouter la note dans MMKV et mettre à jour l'état
    // setNoteText('aaaaaa');
    setCompte(ImpData.budget[0].name);
    // setComptes([...comptes, compte]);
    setComptes(ImpData);
    storage.set('compte', compte);
    // storage.set('notes', [noteText]);

    // storage.set('notes', 'notes');
    console.log('comptes', storage.getString('comptes'));
  };

  const syncData = () => {
    // Vérifier la connexion et synchroniser les données avec l'API
    // con ? console.log('envoie api') : handleAddNote();
    // handleAddNote();
    console.log('dddddd');
    // setCompte(ImpData.budget[0].name);
    // setComptes(...comptes, compte);
    // console.log('comptes', comptes);
    // storage.set('compte', compte);
    // con ? handleAddNote() : console.log('envoie api');
  };

  useEffect(() => {
    // Charger les notes depuis MMKV
    // Configurer la vérification périodique de la connexion Internet
    // const interval = setInterval(() => {
    //   syncData();
    // }, 10000);
    // return () => clearInterval(interval);
    // setNotes(noteText);
    verif();
    // setInterval(() => {
    //   verif();
    //   con ? syncData() : handleAddNote();
    // }, 10000);
    // con ? syncData() : handleAddNote();
    // con ? handleAddNote() : syncData();
  }, []);

  return (
    <View>
      <DataList data={ImpData} />
      <TouchableOpacity style={styles.loginBtn}>
        <Button
          title="Ajouter Un compte"
          onPress={() => navigation.navigate('Adder')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});

export default HomeScreen;
