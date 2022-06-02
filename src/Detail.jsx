/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailCard, Tittle } from "./components";
import { fetchMarvel, getMarvel } from "./Redux/Slice/MarvelsSlice";
import { fetchComics, getAllcomics } from "./Redux/Slice/ComicsSlice";

function Detail() {
  const marvel = useSelector(getMarvel);
  const comics = useSelector(getAllcomics);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchMarvel(id));
    dispatch(fetchComics(id));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="text-red-700">
        <Tittle tittle={"Character Detail"} />
        <DetailCard item={marvel[0]} />
        <Tittle tittle={"Comics"} />

        {comics.map((comic, idx) => (
          <DetailCard key={idx} item={comic} />
        ))}
      </header>
    </div>
  );
}

export default Detail;
