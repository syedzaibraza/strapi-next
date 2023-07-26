import React from "react";
import FilmsList from "../../../Components/Films";
import type { GetStaticProps, NextPage } from "next";

const Films: NextPage = ({ films }: any) => {
  const app = process.env.FILMS_URL;
  console.log("App", app);
  console.log("🚀 ~ file: page.tsx:7 ~ films:", films);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl uppercase w-2/4  bg-white rounded p-2 text-black">
        <div className="text-center">Films List</div>
        {/* <FilmsList /> */}
      </div>
    </div>
  );
};

export default Films;

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("http://localhost:1337/api/films");
  const film = await data.json();
  return {
    props: { films: film },
  };
};
