import { Column } from '../atoms/Column';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Row } from '../atoms/Row';
import { getIconWithTitleName } from '../../utils/getIconWithTitleName';
import {router} from "expo-router"

type Props = {
  Title: string;
  Type: string;
  SubType: string;
  Description: string;
  Details: string;
  isFavourite?:boolean;
  onToggleFavourite
};

export default function ProductBox(prop:Props) {

    const goToDetails = () => {
  router.push({
    pathname: "/products/productDetails",
    params: {
      Title: prop.Title,
      Type: prop.Type,
      SubType: prop.SubType,
      Description: prop.Description,
      Details: prop.Details
    },
  });
};

  return (
    <Row style={{
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.gray900,
    borderRadius: 16,
    padding: 12,
    maxHeight:100,
    justifyContent: "space-between"
    }}
    >
    <Row 
    style={{
      gap:8,
      alignItems: "center",
    }}>
    <Ionicons name={getIconWithTitleName(prop.Type)} size={32} color="white"/>

    <Column >
    <TouchableOpacity onPress={goToDetails}>
     <Text style={{color:Colors.white}}>{prop.Title}</Text>
     <Text style={{color:Colors.gray100, fontWeight:"100", maxWidth:"80%"}}>{prop.Description}</Text>
     </TouchableOpacity>
    </Column>
    </Row>
      <TouchableOpacity onPress={prop.onToggleFavourite} >
        <Ionicons
          name={prop.isFavourite ? "heart" : "heart-outline"}
          size={28}
          color={prop.isFavourite ? Colors.red : Colors.white}
        />
      </TouchableOpacity>
    </Row>
  );
}


