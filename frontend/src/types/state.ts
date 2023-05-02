export type personType ={
    id: string;
    name: string;
    height: string; 
    mass: string;
    gender: string; 
    homeworld: {name: string};
}

export interface IStateType {
    page: string;
    query: string;
    people: personType[];
}

export type StateContextType = {
    state: IStateType;
    setPage: (page: string) => void;
    setQuery: (query: string) => void;
    setPeople: (people: personType[]) => void;
    getPerson: (id: string) => personType | null;
};