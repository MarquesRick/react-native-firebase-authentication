import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ButtonCustom from '../../components/ButtonCustom';
import { InputTextCustom } from '../../components/InputTextCustom';
import styles from './styles';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Create({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  useEffect(() => {
    createUserWithEmailAndPassword(auth, 'teste@email.com', '123456')
      .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

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

      <InputTextCustom
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
      />

      <ButtonCustom onPress={() => { }}>CADASTRAR</ButtonCustom>
    </View>
  );
}
