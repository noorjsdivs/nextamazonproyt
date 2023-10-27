export interface ProductType {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  brand: string;
  category: string;
  quantity: number;
}
