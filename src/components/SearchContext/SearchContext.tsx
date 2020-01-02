import React, { createContext, useState } from 'react';

const defaultState = {
  isSearchActive: false,
  openSearch: () => {}
};

type SearchContextProps = {
  isSearchActive: boolean;
  openSearch: (bool: boolean) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const SearchContext = createContext<SearchContextProps>(defaultState);

export const SearchContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<SearchContextProps>({
    isSearchActive: false,
    openSearch: bool =>
      setState(prevState => ({ ...prevState, isSearchActive: bool }))
  });

  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
