import axios from "axios";
import { API_BASE_URL } from "../env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Product = {
  Title: string;
  Type: string;
  SubType: string;
  Description: string;
  Details: string;
};

export type ProductResponse = {
  statusCode: number;
  data: Product | Product[];
  message?: string;
};


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await api.get("/user/products");
  if (res?.data ) return res?.data as any;
  throw new Error(res.data.message || "Failed to fetch products");
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await api.get(`/user/products/${id}`);
  if (res?.data) return res.data as any;
  throw new Error(res.data.message || "Failed to fetch product");
};

export const createProduct = async (product: Product): Promise<Product> => {
  const res = await api.post("/user/products", product);
  if (res?.data) return res.data;
  throw new Error(res.data.message || "Failed to create product");
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const res = await api.patch(`/user/products/${encodeURIComponent(id)}`, product);
  if (res?.data) return res.data;
  throw new Error(res.data.message || "Failed to update product");
};

export const deleteProduct = async (id: string): Promise<void> => {
  const res = await api.delete(`/user/products/${encodeURIComponent(id)}`);
  if (res?.data) throw new Error(res.data.message || "Failed to delete product");
};

