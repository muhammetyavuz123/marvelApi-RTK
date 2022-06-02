/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import axios from "axios";

export const CardList = () => {
  let offset = 0;

  const [datas, setData] = useState([]);

  const loadMore = () => {
    const tenMarvels = [];

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?limit=30&offset=${offset}&ts=1&apikey=8cf96a35fa238c333ff3048c2bcd2831&hash=432dfd7d397af01560333f861abc6b75`
      )
      .then(({ data }) => {
        data.data.results.forEach((p) => tenMarvels.push(p));
        setData((datas) => [...datas, ...tenMarvels]);
      });

    offset += 10;
  };

  const handleScrool = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadMore();
    }
  };

  useEffect(() => {
    loadMore();
    window.addEventListener("scroll", handleScrool);
  }, []);

  if (datas.length === 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-3">
        {datas.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};
