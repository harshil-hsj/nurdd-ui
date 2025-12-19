import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { PageWrapper } from '../../components/templates/PageWrapper';
import { Colors } from '../../theme/colors';
import ProductBox from '../../components/molecules/ProductBox';
import { getAllProducts, Product } from '../../api/product.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/molecules/Loading';
import { Ionicons } from '@expo/vector-icons';
import { Row } from '../../components/atoms/Row';
import {Text} from 'react-native'
import { router, useFocusEffect } from 'expo-router';

export function AllProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false)
  const [favProducts, setFavourites] = useState<Product[]>([]);
  useFocusEffect(
  useCallback(() => {
    let isActive = true;

    (async () => {
      try {
        const apiProducts = await getAllProducts();
        if (!isActive) return;
        setProducts(apiProducts);
        await AsyncStorage.setItem("products", JSON.stringify(apiProducts));

        const favsJson = await AsyncStorage.getItem("favourites");
        const favTitles: string[] = favsJson ? JSON.parse(favsJson) : [];

        const favs = apiProducts.filter((p) =>
          favTitles.includes(p.Title)
        );
        setFavourites(favs);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      isActive = false; 
    };
  }, [])
);
  const handleToggleFavourite = async (product: Product) => {
    let updatedFavs: Product[];
    let favTitles = favProducts.map((p) => p.Title);
    if (favTitles.includes(product.Title)) {
      updatedFavs = favProducts.filter((p) => p.Title !== product.Title);
      favTitles = favTitles.filter((t) => t !== product.Title);
    } else {
      updatedFavs = [...favProducts, product];
      favTitles.push(product.Title);
    }

    setFavourites(updatedFavs);
    await AsyncStorage.setItem("favourites", JSON.stringify(favTitles));
  };

  return (
    <PageWrapper heading="Nurdd" bgColor={Colors.black} padding={24}>
        <Row style={{marginBottom:10}}>
        <Ionicons name="add" color={Colors.white} size={24} onPress={()=>{router.push('/products/addProduct')}}/>
        <Text style={{color:Colors.white}}>{"Click to Add Item"}</Text>
        </Row>
        <Loading visible={loading}/>
        <ScrollView contentContainerStyle={{ paddingBottom: 16, gap:16 }}>
        {products.map((item) => (
          <ProductBox
            key={item.Title}
            {...item}
            isFavourite={favProducts.some((p) => p.Title === item.Title)}
            onToggleFavourite={() => handleToggleFavourite(item)}
          />
        ))}
      </ScrollView>
    </PageWrapper>
  );
}
