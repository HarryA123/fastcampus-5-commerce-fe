export type ProductDTOType = {
  name: string;
  capacity: number;
  price: number;
  description: string;
  reviewCount: number;
  avgRate: number;
  thumbnail: string;
  tag: Array<string | number>;
};
export type ProductParamGetType = {};
export type ProductParamPutType = {
  id: string;
  data: ProductDTOType;
};
export type ProductParamPatchType = {
  id: string;
  data: Partial<ProductDTOType>;
};
