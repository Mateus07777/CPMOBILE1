import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function Botao({ titulo, onPress }) {
 return (
<TouchableOpacity style={styles.botao} onPress={onPress}>
<Text style={styles.texto}>{titulo}</Text>
</TouchableOpacity>
 );
}
const styles = StyleSheet.create({
 botao: {
   backgroundColor: 'blue',
   padding: 15,
   alignItems: 'center',
   borderRadius: 5,
 },
 texto: {
   color: '#fff',
   fontSize: 18,
   fontWeight: 'bold',
 },
});