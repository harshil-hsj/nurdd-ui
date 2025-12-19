import { PageWrapper } from '../../components/templates/PageWrapper';
import { Colors } from '../../theme/colors';
import ProductForm from '../../components/molecules/ProductForm';
import { KeyboardAvoidingView, Platform } from 'react-native';

export function AddProductScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={2} 
    >
    <PageWrapper heading="Nurdd" bgColor={Colors.black} padding={24}>
        <ProductForm/>
    </PageWrapper>
    </KeyboardAvoidingView>
  );
}
