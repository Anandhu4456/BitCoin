import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function Currency() {
  let { id } = useParams();
  const [coin, setCoin] = useState({
    name: "",
    symbol: "",
    price_btc: "",
    price_usd: "",
    volume24: "",
  });
  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then((resp) => {
      console.log(resp.data[0]);
      setCoin({
        name: resp.data[0].name,
        symbol: resp.data[0].symbol,
        price_btc: resp.data[0].price_btc,
        price_usd: resp.data[0].price_usd,
        volume24: resp.data[0].volume24,
      });
    });
  }, []);

  return (
    <div>
      <h1>Name: {coin.name}</h1>
      <h1>Symbol: {coin.symbol}</h1>
      <h1>Price: {coin.price_btc}</h1>
      <h1>Price in USD: {coin.price_usd}</h1>
      <h1>Volume in last 24 hrs: {coin.volume24}</h1>
    </div>
  );
}
