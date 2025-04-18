import React, { useState } from "react";
import Login from "../components/login";
import BoardList from "../components/board-list";

export default function Board() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>
        <h1 className="text-5xl">게시판</h1>
      </div>
      {isLoggedIn ? <BoardList /> : <Login />}
    </>
  );
}
