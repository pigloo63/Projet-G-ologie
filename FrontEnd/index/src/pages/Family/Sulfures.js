import React, { useState, useEffect } from "react";
import ListOfMinerals from "../../component/MineralField/ListOfMinerals";

const Sulfures = () => {
  //Appel Api pour récupérer les données des éléments Sulfures
  const [dataSulfures, setDataSulfures] = useState([]);

  const url = "http://localhost:4000/api/mineral/Sulfures";

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const Result = await result.json();
      setDataSulfures(Result.result);
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
          <span className="mb-10 font-bold">Les minéraux:</span>
          <ListOfMinerals data={dataSulfures} />
        </div>
      </div>
    </>
  );
};

export default Sulfures;
