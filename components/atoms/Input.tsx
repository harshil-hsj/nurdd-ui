import { TextInput, StyleSheet, Text } from 'react-native';
import { Colors } from '../../theme/colors';
import { Column } from './Column';

type Props = {
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  subheading?:string;
  multiline?:boolean
};

export default function Input(props: Props) {
  return (
    <Column style={{alignItems:"flex-start", width:"100%", padding:8}}>
    {
      props.subheading && (
        <Text style={{color:Colors.white}}>
        {props.subheading}
        </Text>
      )
    }
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={Colors.white}
      multiline={props.multiline}
    />
    </Column>
  );
}
const styles = StyleSheet.create({
  input: {
    width:"90%",
    borderRadius: 8,
    borderWidth: 1,
    fontWeight:400,
    borderColor: Colors.gray300,
    paddingHorizontal: 12,
    backgroundColor: Colors.gray600,
    fontSize: 12,
    color:Colors.white
  },
});

