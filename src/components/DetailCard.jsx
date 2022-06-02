import React from "react";

export const DetailCard = ({ item }) => {
  return (
    <figure className=" mt-10 container mx-auto md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
      <img
        className="w-auto h-24 md:w-auto md:h-auto md:rounded-none rounded-full mx-auto "
        src={item ? item.thumbnail.path + "/portrait_xlarge.jpg" : ""}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{item ? item.description : ""}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {item ? item.name : ""}
          </div>
        </figcaption>
      </div>
    </figure>
  );
};
