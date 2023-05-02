import React, { createContext, ReactNode, useState } from 'react';
import { IStateType, personType, StateContextType } from '../types/state';

const initialState: IStateType = {
  page: '1',
  query: '',
  people: []
};

export const GlobalContext = createContext<StateContextType | null>(null);

const GlobalProvider = ({ children }: { children : ReactNode}) => {
  const [stateVars, setStateVars] = useState<IStateType>(initialState);

  const setPage = (page: string) => {
    setStateVars({...stateVars, page});
  }

  const setQuery = (query: string) => {
    setStateVars({...stateVars, query});
  }

  const setPeople = (people: personType[]) => {
    setStateVars({...stateVars, people});
  }

  const getPerson = (id: string) => {
    return stateVars.people.find((p) => p.id === id) || null;
  }

  return (
    <GlobalContext.Provider value={{ state: stateVars, setPage, setQuery, setPeople, getPerson }} >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
