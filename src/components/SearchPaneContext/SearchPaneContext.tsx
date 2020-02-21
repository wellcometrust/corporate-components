import React, { createContext, useState } from 'react';

const defaultState = {
  isSearchActive: false,
  toggleSearch: () => {}
};

type SearchPaneContextProps = {
  isSearchActive: boolean;
  toggleSearch: (bool: boolean) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const SearchPaneContext = createContext<SearchPaneContextProps>(
  defaultState
);

export const SearchPaneContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<SearchPaneContextProps>({
    isSearchActive: false,
    toggleSearch: bool =>
      setState(prevState => ({ ...prevState, isSearchActive: bool }))
  });

  return (
    <SearchPaneContext.Provider value={state}>
      {children}
    </SearchPaneContext.Provider>
  );
};

export default SearchPaneContext;
