/* eslint-disable no-template-curly-in-string */
import React from "react";

export const Card = ({ item }) => {
  return (
    <figure className=" bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={
          item.thumbnail.path
            ? item.thumbnail.path + "/portrait_xlarge.jpg"
            : ""
        }
        alt=""
        width="384"
        height="512"
      />
      <figcaption className=" text-center font-medium">
        <a href={`detail/${item.id ? item.id : ""}`}>
          <div className="text-sky-500 dark:text-sky-400">
            {item.name ? item.name : ""}
          </div>
        </a>
      </figcaption>
    </figure>
  );
};
