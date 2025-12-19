import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { PageWrapper } from '../../components/templates/PageWrapper';

import { Colors } from '../../theme/colors';
import ProductDetailsBox from '../../components/molecules/ProductDetailsBox';
import { useLocalSearchParams } from 'expo-router';

type Props = {
  Title: string;
  Type: string;
  SubType: string;
  Description: string;
  Details: string;
};

export function ProductDetailScreen() {
 const params= useLocalSearchParams<Props>();
  return (
    <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={2} 
        >
    <PageWrapper heading={params.Title} bgColor={Colors.black} padding={24}>
        <ProductDetailsBox {...params}/>
    </PageWrapper>
    </KeyboardAvoidingView>
  );
}
