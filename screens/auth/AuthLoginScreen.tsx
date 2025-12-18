import React, { useState } from 'react';
import { TextInput, Button, Text, Alert } from 'react-native';
import { PageWrapper } from '../../components/templates/PageWrapper';
import { Column } from '../../components/atoms/Column';
import { Colors } from '../../theme/colors';

export function AuthLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <PageWrapper heading="Login" bgColor={Colors.black} padding={24}>
      <Column style={{ gap: 16 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: Colors.gray900,
            color: Colors.white,
            padding: 12,
            borderRadius: 8,
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            backgroundColor: Colors.gray900,
            color: Colors.white,
            padding: 12,
            borderRadius: 8,
          }}
        />
      </Column>
    </PageWrapper>
  );
}
