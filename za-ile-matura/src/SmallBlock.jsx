import React from "react";

function smallblock({ item }) {
  return (
    <div className="bg-slate-900 border-solid border-4 rounded-2xl border-gray-500 text-4xl text-center text-white p-4 align-center">
      <p>{item}</p>
    </div>
  );
}

export default smallblock;
