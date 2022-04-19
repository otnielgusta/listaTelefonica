import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './lib/lista/lista';
import { getTelefones } from './lib/telefoneController';

export default function App() {

  const [lista, setLista] = useState([]);

  useEffect(()=>{
    getTelefones(setLista);
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.titleLista}>Lista Telefônica</Text>
      {
        lista.length > 0 ? <Lista lista={lista}/> : <View><Text>A lista está vazia</Text></View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLista:{
    marginBottom: 10,
    fontWeight: 'bold'
  },
});
