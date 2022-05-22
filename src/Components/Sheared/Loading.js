import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-sky-400  rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loading;
