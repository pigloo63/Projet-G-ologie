/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ListOfMinerals from "../../component/MineralField/ListOfMinerals";

const Natifs = () => {
  //Appel Api pour récupérer les données des éléments Natifs
  const [dataNatifs, setDataNatifs] = useState([]);

  const url = "http://localhost:4000/api/mineral/Natifs";

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const Result = await result.json();
      setDataNatifs(Result.result);
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
          <ListOfMinerals data={dataNatifs} />
        </div>
      </div>
    </>
  );
};

export default Natifs;
