/* eslint-disable prettier/prettier */
import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const getUsers = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

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
        name: 'post',
      }),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const putUser = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/users/1';

  try {
    const response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 121,
        name: 'put',
      }),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/users/1';

  try {
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const HomeScreen = () => {
  const [getRes, setGetRes] = useState();
  const [postRes, setPostRes] = useState();
  const [putRes, setPutRes] = useState();
  const [deleteRes, setDeleteRes] = useState();

  useEffect(() => {
    getUsers().then(val => {
      console.log(`la reponse de la request get ${JSON.stringify(val)}`);
      setGetRes(val);
    });
    postUser().then(val => {
      console.log(`reponse de la request post ${JSON.stringify(val)}`);
      setPostRes(val);
    });
    putUser().then(val => {
      console.log(`reponse de la request put ${JSON.stringify(val)}`);
      setPutRes(val);
    });
    deleteUser().then(val => {
      setDeleteRes(val);
      console.log(
        ` le request delete ne renvoie pas de reponse, donc si pas d'erreur c'est tout good`,
      );
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={getRes}
        renderItem={({item}) => (
          <View>
            <Text>{JSON.stringify(item.name)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
