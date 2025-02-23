// hooks/useFetch.js
import { defaultFetchOptions } from '@/config';
import { QueryKey, useQuery } from '@tanstack/react-query';

type FetchData = {
  queryKey: QueryKey;
};

const fetchData = async ({ queryKey }: FetchData) => {
  const token = localStorage.getItem("token");
  const url = queryKey[0] as string;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...defaultFetchOptions
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

function useFetch<T = unknown>(queryKey: QueryKey, options = {}) {
  const defaultOptions = {
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
    ...options,
  };

  const queryResult = useQuery<T>({
    queryKey,
    queryFn: () => fetchData({ queryKey }),
    ...defaultOptions,
  });

  return queryResult;
};

export default useFetch;
