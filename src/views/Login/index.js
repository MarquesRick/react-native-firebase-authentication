import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonCustom from '../../components/ButtonCustom';
import { InputTextCustom } from '../../components/InputTextCustom';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <InputTextCustom 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
      />
      <InputTextCustom
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />
      
      <ButtonCustom onPress={() => navigation.navigate('Main')}>LOGAR 1</ButtonCustom>
      <ButtonCustom 
        onPress={() => { navigation.navigate('Create') }}
      >
        CADASTRAR USUÁRIO
      </ButtonCustom>
    </View>
  );
}
