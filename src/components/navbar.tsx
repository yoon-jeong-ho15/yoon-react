import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div
      className="
      h-10 w-full
      flex flex-row
      justify-around
      items-center
      mt-8
      bg-green-700
      "
    >
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/board"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Board
      </NavLink>
    </div>
  );
}
