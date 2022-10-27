import { QueryHookParams } from '@apis/type';

import { useQuery } from '@tanstack/react-query';

import ProductApi from './ProductApi';
import { ProductParamGetType } from './ProductApi.type';

export const PRODUCT_API_QUERY_KEY = {
  GET: (param?: ProductParamGetType) => ['Product-list', param],
  GET_BY_ID: (id?: string) => ['Product-by-id', id],
};

export function useGetProductQuery(
  params?: QueryHookParams<typeof ProductApi.getProduct>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => ProductApi.getProduct(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}

export function useGetProductByIdQuery(
  params: QueryHookParams<typeof ProductApi.getProductById>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => ProductApi.getProductById(params?.variables),
    params?.options,
  );

  return { ...query, queryKey };
}
