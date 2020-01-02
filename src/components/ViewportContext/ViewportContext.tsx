import React, { createContext, useEffect, useState } from 'react';
import mediaQueries from 'utils/media-queries';

const defaultState = {
  isMobile: true,
  setIsMobile: () => {}
};

type ViewportContextProps = {
  isMobile: boolean;
  setIsMobile: (bool: boolean) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const ViewportContext = createContext<ViewportContextProps>(
  defaultState
);

export const ViewportContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<ViewportContextProps>({
    isMobile: true,
    setIsMobile: bool =>
      setState(prevState => ({ ...prevState, isMobile: bool }))
  });

  /**
   * useEffect hook with empty array argument is equivalent of
   * componentDidMount lifecycle method
   * used here to provide client side functionality
   * for setting up media query list (MQL) listener
   */
  useEffect(() => {
    const mql: MediaQueryList = window.matchMedia(mediaQueries.mediumMax);
    const handler = (event: MediaQueryListEvent) => {
      state.setIsMobile(event.matches);
    };

    // Set initial state
    state.setIsMobile(mql.matches);

    // Set up listener
    mql.addListener(handler);

    // Remove listener on cleanup
    return () => mql.removeListener(handler);

    // Empty array as final argument ensures effect is only run on mount and unmount
  }, []);

  return (
    <ViewportContext.Provider value={state}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContext;
