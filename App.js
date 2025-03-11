import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ResultadoScreen from './ResultadoScreen';
import InputField from './componentes/InputField';
import Botao from './componentes/Botao';
const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
 const [nome, setNome] = useState('');
 const [valor, setValor] = useState('');
 const [percentual, setPercentual] = useState('');
 const calcular = () => {
   if (!nome || !valor || !percentual) {
     alert('Preencha todos os campos!');
     return;
   }
   const valorNum = parseFloat(valor);
   const percentualNum = parseFloat(percentual);
   if (isNaN(valorNum) || isNaN(percentualNum)) {
     alert('Valores inválidos!');
     return;
   }
   const aumento = (valorNum * percentualNum) / 100;
   const novoValor = valorNum + aumento;
   navigation.navigate('Resultado', {
     nome,
     valorOriginal: valorNum,
     percentual: percentualNum,
     aumento,
     novoValor,
   });
 };
 return (
<View style={styles.container}>
<InputField label="Nome do Produto" value={nome} onChangeText={setNome} />
<InputField label="Valor Original" value={valor} onChangeText={setValor} keyboardType="numeric" />
<InputField label="Aumento (%)" value={percentual} onChangeText={setPercentual} keyboardType="numeric" />
<Botao titulo="Calcular" onPress={calcular} />
</View>
 );
}
export default function App() {
 return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Resultado" component={ResultadoScreen} />
</Stack.Navigator>
</NavigationContainer>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 20,
   justifyContent: 'center',
 },
});