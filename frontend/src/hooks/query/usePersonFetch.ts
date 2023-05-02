import { useEffect, useState } from "react";
import { getAllWithDetails } from "../../api/person";
import { personType } from "../../types/state";

const usePersonFetch = (page: string) => {
  const [data, setData] = useState<personType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllWithDetails(page)
    .then((res) => res.json())
     .then((data) => {
        setError(data.error);
        setData(data.data.listPeopleDetails.people);
        setLoading(false);
        setCount(data.data.listPeopleDetails.count);
    })
   }, [page]);

   return { data, loading, error, count };
};

export default usePersonFetch;
