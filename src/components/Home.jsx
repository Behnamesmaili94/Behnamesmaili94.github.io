import {Header} from "./Header";
import {Main} from "./Main";
import {Aside} from "./Aside";
import {Footer} from "./Footer";
import React from "react";

export const Home = () => {
  return(
      <div className={"w-full"}>
          <div className={"grid grid-cols-6"}>
              <div className={"z-10 sticky top-0 col-span-full row-span-1 bg-zinc-100 opacity-90 "}><Header/></div>
              <div className={"col-start-1 row-start-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-sm"}><Aside/></div>
              <div className={"col-start-2 col-end-7 row-start-2"}><Main/></div>
              <div className={"col-span-full order-last bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500"}><Footer/></div>
          </div>
      </div>)
}