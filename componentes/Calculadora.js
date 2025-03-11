import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ResultadoScreen({ route }) {
 const { nome, valorOriginal, percentual, aumento, novoValor } = route.params;
 return (
<View style={styles.container}>
<Text style={styles.titulo}>Resultado do Cálculo</Text>
<Text style={styles.texto}>Produto: {nome}</Text>
<Text style={styles.texto}>Valor Original: R$ {valorOriginal.toFixed(2)}</Text>
<Text style={styles.texto}>Aumento: {percentual}%</Text>
<Text style={styles.texto}>Valor do Aumento: R$ {aumento.toFixed(2)}</Text>
<Text style={styles.texto}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
</View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 20,
   justifyContent: 'center',
   alignItems: 'center',
 },
 titulo: {
   fontSize: 22,
   fontWeight: 'bold',
   marginBottom: 20,
 },
 texto: {
   fontSize: 18,
   marginBottom: 10,
 },
});
