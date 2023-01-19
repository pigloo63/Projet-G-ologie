import React, { useEffect, useState } from "react";
import ListOfMinerals from "../../component/MineralField/ListOfMinerals";

const Silicates = () => {
  //Appel Api pour récupérer les données des éléments Silicates
  const [dataSilicates, setDataSilicates] = useState([]);

  const url = "http://localhost:4000/api/mineral/Silicates";

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const Result = await result.json();
      setDataSilicates(Result.result);
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
          <ListOfMinerals data={dataSilicates} />
        </div>
      </div>
    </>
  );
};

export default Silicates;
