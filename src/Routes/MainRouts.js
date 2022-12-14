import React, { useEffect, useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function MainRout() {
  const [cryptoList, setCryptoList] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=20").then(
      (resp) => {
        setCryptoList(resp.data["data"]);
        console.log(resp.data["data"]);
      }
    );
  }, []);
  return (
    <>
      <div id="header">
        <h1>CryptoLand</h1>
      </div>
      <div className="cryptoList">
        {cryptoList.map((item, key) => {
          return (
            <div
              onClick={() => {
                navigate(`/currency/${item.id}`);
              }}
            >
              <h1>Symbol:{item.symbol}</h1>
              <h1>Name:{item.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MainRout;
