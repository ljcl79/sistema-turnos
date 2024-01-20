import React, { ReactNode, createContext, useState } from 'react';
import ICardRecord from '../interfaces/ICardRecord';

interface IState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lstCfg: Record<string, any>;
  lstHero: Array<ICardRecord>;
  lstGalleryServices: Array<ICardRecord>;
  lstTestimonials: Array<ICardRecord>;
}

interface IContextProps {
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}

export const AppContext = createContext({} as IContextProps);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }: AppProviderProps) => {
  const [state, setState] = useState<IState>({
    lstCfg:
    {
      'API_URL': 'http://localhost:3000'
    },
    lstHero: [],
    lstGalleryServices: [],
    lstTestimonials: [],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;