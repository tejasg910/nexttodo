"use client";
import React from "react";

const JoinButton = () => {
  const join = () => {
    console.log(Math.random(39039012));
  };
  return (
    <div>
      <button
        onClick={join}
        className="bg-slate-100 border px-4 py-1 shadow-sm"
      >
        Generate the Link
      </button>
    </div>
  );
};

export default JoinButton;
