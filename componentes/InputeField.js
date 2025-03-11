import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
export default function InputField({ label, value, onChangeText, keyboardType }) {
 return (
<View style={styles.container}>
<Text style={styles.label}>{label}</Text>
<TextInput
       style={styles.input}
       value={value}
       onChangeText={onChangeText}
       keyboardType={keyboardType}
       placeholder={`Digite ${label.toLowerCase()}`}
     />
</View>
 );
}
const styles = StyleSheet.create({
 container: {
   marginBottom: 10,
 },
 label: {
   fontSize: 18,
   fontWeight: 'bold',
 },
 input: {
   borderWidth: 1,
   borderColor: '#ccc',
   padding: 10,
   borderRadius: 5,
 },
});