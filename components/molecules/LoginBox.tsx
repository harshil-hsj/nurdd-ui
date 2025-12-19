import { useState } from 'react';
import { Column } from '../atoms/Column';
import Input from '../atoms/Input';
import { Text } from 'react-native';
import { Button } from '../atoms/Button';
import { Colors } from '../../theme/colors';
import { login } from '../../api/auth.api';
import { router } from 'expo-router';
import Loading from './Loading';
import PopupMessage from './PopupMessage';

export default function LoginBox() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMessage, setMessage] = useState("");
  const showMessagePopup = (isSuccess) => {
  setMessage(isSuccess);
  setTimeout(() => setMessage(""), 1500);
};

  const onPress= async()=>{
    setLoading(true);
    const response = await login(email,password);
    if(response?.statusCode == 200){
      setLoading(false);
      showMessagePopup("true");
      router.replace('/products/allProductsScreen');
    }
    else{
       setLoading(false);
      showMessagePopup("false");
    }
  }

  return (
    <Column style={{alignItems:"center", gap:8, width:'100%', backgroundColor:Colors.gray900, borderRadius:16,padding:12,position:"relative"}}>
    <Loading visible={loading}/>
    { showMessage ==="true" && <PopupMessage isSuccess={true} message='Authenticated'/> }
    { showMessage==="false" && <PopupMessage isSuccess={false} message='Invalid Credentials'/>}
    <Text style={{color:Colors.white, fontSize:24}}>{"Login"}</Text>
    <Input  value={email} placeholder='' onChangeText={(email)=>setEmail(email)} subheading="Email"/>
    <Input value={password} placeholder='' onChangeText={(password)=>setPassword(password)} secureTextEntry={true} subheading="Password" />
    <Button title="Login" onPress={onPress} backgroundColor={Colors.blue} textColor={Colors.white}/>
    </Column>
  );
}


