import React, { useState } from 'react';
import { TextInput, Button, Text, Alert } from 'react-native';
import { PageWrapper } from '../../components/templates/PageWrapper';
import { Column } from '../../components/atoms/Column';
import { Colors } from '../../theme/colors';
import Input from '../../components/atoms/Input';
import LoginBox from '../../components/molecules/LoginBox';

export function AuthLoginScreen() {
  return (
    <PageWrapper heading="Nurdd" bgColor={Colors.black} padding={24}>
        <LoginBox/>
    </PageWrapper>
  );
}
