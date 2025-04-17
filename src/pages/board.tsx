import React from "react";
import Login from "../components/login";
import BoardList from "../components/board-list";

export default function Board() {
  return (
    <>
      <div>
        <h1 className="text-5xl">게시판</h1>
      </div>
      <Login />
    </>
  );
}
