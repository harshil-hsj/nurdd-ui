import axios from 'axios';
import { API_BASE_URL } from '../env';
import sha256 from 'crypto-js/sha256';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email: string, password: string) => {
try
  {
  const enctyptedPassword = sha256(password).toString();
  const res = await axios.post(`${API_BASE_URL}/auth/login`, {
   "email":email,
    "password":enctyptedPassword,
  });
  if(res?.data?.access_token){
    await AsyncStorage.setItem('accessToken', res?.data?.access_token);
    return {"message":"Logged In Successfully",statusCode:200};
  }
  return {"message":"Invalid Credentials", statusCode:401};
}
catch(error:any){
  return {"message":error.response?.data?.message || 'Login failed', statusCode:500};
}
};
