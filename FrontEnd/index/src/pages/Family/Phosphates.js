import React, { useState, useEffect } from "react";
import ListOfMinerals from "../../component/MineralField/ListOfMinerals";

const Phosphates = () => {
  //Appel Api pour récupérer les données des éléments Phosphates
  const [dataPhosphates, setDataPhosphates] = useState([]);

  const url = "http://localhost:4000/api/mineral/Phosphates";

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const Result = await result.json();
      setDataPhosphates(Result.result);
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
        <div className="border rounded-3xl p-4 w-40  bg-white">
          <span className="mb-10">Les minéraux:</span>
          <ListOfMinerals data={dataPhosphates} />
        </div>
      </div>
    </>
  );
};

export default Phosphates;
