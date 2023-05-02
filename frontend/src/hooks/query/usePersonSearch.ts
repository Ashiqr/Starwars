import { useEffect, useState } from "react";
import { searchByName } from "../../api/person";
import { personType } from "../../types/state";

const usePersonSearch = (query: string) => {
  const [data, setData] = useState<personType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (query){
      setLoading(true);
      searchByName(query)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        setData(data.data.searchPeople.people);
        setLoading(false);
        setCount(data.data.listPeopleDetails.count);
      })
    }
   }, [query]);

   return { data, loading, error, count };
};

export default usePersonSearch;
