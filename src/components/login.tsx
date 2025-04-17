import React from "react";

export default function Login() {
  const login = () => {};
  return (
    <div className="flex justify-center">
      <div
        className="
            flex flex-col
            w-2/3 py-6
            items-center
            bg-cyan-500
            rounded-2xl
        "
      >
        <span
          className="block text-7xl text-gray-100 font-bold
            animate-letter-spacing
            "
        >
          당신은 누구신가요?
        </span>
        <form className="w-60 h-20 mt-6 mb-3 flex flex-col justify-around">
          <input
            name="username"
            placeholder="이름"
            className="
                bg-gray-50 text-center rounded-md py-1
                outline-none tracking-widest
                focus:bg-gray-100
                focus:text-xl
                transition-all
            "
          ></input>
          <input
            name="pwd"
            placeholder="생년월일"
            className="
                bg-gray-50 text-center rounded-md py-1
                outline-none tracking-widest
                focus:bg-gray-100
                focus:text-xl
                transition-all
            "
          ></input>
        </form>
        <button
          onClick={() => login()}
          className="w-20 h-6 rounded-md bg-gray-300 hover: active:bg-gray-400"
        >
          접속
        </button>
      </div>
    </div>
  );
}
