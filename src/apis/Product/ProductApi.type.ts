export type ProductDTOType = {
  name: string;
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
