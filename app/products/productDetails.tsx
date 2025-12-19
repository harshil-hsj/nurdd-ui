import { useLocalSearchParams } from "expo-router";
import { ProductDetailScreen } from "../../screens/products/ProductDetailScreen";

export default function ProductDetailsScreen() {
  const params = useLocalSearchParams();
  return <ProductDetailScreen  />;
}
