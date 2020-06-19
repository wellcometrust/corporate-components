import React, { createContext, useState } from 'react';

const defaultState = {
  isNavActive: false,
  toggleNav: () => {}
};

type NavContextProps = {
  isNavActive: boolean;
  toggleNav: (bool: boolean) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const NavContext = createContext<NavContextProps>(defaultState);

export const NavContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<NavContextProps>({
    isNavActive: false,
    toggleNav: bool =>
      setState(prevState => ({ ...prevState, isNavActive: bool }))
  });

  return <NavContext.Provider value={state}>{children}</NavContext.Provider>;
};

export default NavContext;
