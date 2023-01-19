import React, { useEffect, useState } from "react";
import ListOfMinerals from "../../component/MineralField/ListOfMinerals";

const Sulfates = () => {
  //Appel Api pour récupérer les données des éléments Sulfates
  const [dataSulfates, setDataSulfates] = useState([]);

  const url = "http://localhost:4000/api/mineral/Sulfates";

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const Result = await result.json();
      setDataSulfates(Result.result);
    } catch (error) {
      console.log("Pas de réponse de l'API");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="border rounded-3xl p-4 w-40">
          <span className="mb-10">Les minéraux:</span>
          <ListOfMinerals data={dataSulfates} />
        </div>
      </div>
    </>
  );
};

export default Sulfates;
