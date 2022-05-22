import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("Tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary py-3 uppercase">
        Tools and Equipment
      </h2>
      <div className="flex h-1 justify-center my-3 ">
        <div class="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div class=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div class=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
