import React from 'react';
import App from './App';

type SolrReactProps = {
  name: String;
  surname: String;
};

export const SearchQueryFetch = ({
  name,
  surname
}: SolrReactProps) => {
  // @ts-ignore
 return <App />
};

export default SearchQueryFetch;

  