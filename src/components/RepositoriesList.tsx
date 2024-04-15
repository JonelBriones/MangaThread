import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelectors";
import ThreadCard from "./ThreadCard";

const RepositoriesList = () => {
  const { displayThreads } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  useEffect(() => {
    displayThreads();
  }, []);
  console.log(data);
  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <div>
          {data.map((thread) => (
            <ThreadCard {...thread} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;
