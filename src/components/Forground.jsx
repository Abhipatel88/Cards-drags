import React, { useRef } from "react";
import Cards from "./Cards";


function Forground() {
    const refs = useRef(null);
  const data = [
    {
      decs: "lorem epsum hbo oijfoio iojof  oifoh",
      filesize: "0.6MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlord Now", tagColor: "bg-green-500" },
    },
    {
        decs: "lorem epsum hbo oijfoio iojof  oifoh",
        filesize: "0.6MB",
        close: true,
        tag: { isOpen: false, tagTitle: "Downlord Now", tagColor: "bg-green-500" },
      },
      {
        decs: "lorem epsum hbo oijfoio iojof  oifoh",
        filesize: "0.6MB",
        close: false,
        tag: { isOpen: true, tagTitle: "UpdATE ", tagColor: "bg-blue-600" },
      },
      {
        decs: "lorem epsum hbo oijfoio iojof  oifoh",
        filesize: "0.6MB",
        close: true,
        tag: { isOpen: true, tagTitle: "UpdATE ", tagColor: "bg-violet-600" },
      },
      {
        decs: "lorem epsum hbo oijfoio iojof  oifoh",
        filesize: "0.6MB",
        close: true,
        tag: { isOpen: true, tagTitle: "Superb ", tagColor: "bg-pink-600" },
      },
      {
        decs: "lorem epsum hbo oijfoio iojof  oifoh",
        filesize: "0.6MB",
        close: false,
        tag: { isOpen: true, tagTitle: "NOt Downlord ", tagColor: "bg-lime-600" },
      },

  ];
  return (
    <div ref={refs} className="w-full  top-0 left-0 h-screen  fixed z-[3] flex gap-3 flex-wrap">
        {data.map((item,index)=>(
            <Cards data={item} reference={refs}/>
        ))}
    </div>
  );
}

export default Forground;
