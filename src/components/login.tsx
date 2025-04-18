import React, { useRef, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const pwdInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  const usernameInputHandler = (value) => {
    setUsername(value);
  };

  const pwdInputHandler = (value) => {
    const numbersOnly = value.replace(/[^0-9]/g, "");
    setPwd(numbersOnly);
  };

  const focusInputEnd = (ref) => {
    if (ref.current) {
      ref.current.focus();
      const length = ref.current.value.length;
      ref.current.setSelectionRange(length, length);
    }
  };

  const login = () => {
    if (username == "윤정호" && pwd == "941015") {
      alert("loged in");
    } else {
      alert("not logged in");
    }
  };

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
        <div className="w-60 h-20 mt-6 mb-3 flex flex-col justify-around">
          <input
            name="username"
            placeholder="이름"
            value={username}
            ref={usernameInputRef}
            onChange={(e) => usernameInputHandler(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "ArrowDown") {
                focusInputEnd(pwdInputRef);
              }
            }}
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
            value={pwd}
            ref={pwdInputRef}
            onChange={(e) => pwdInputHandler(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                login();
              } else if (e.key === "ArrowUp") {
                focusInputEnd(usernameInputRef);
                // setTimeout(() => {
                //   if (usernameInputRef.current) {
                //     const length = usernameInputRef.current.value.length;
                //     usernameInputRef.current.setSelectionRange(length, length);
                //   }
                // }, 0);
              }
            }}
            className="
                bg-gray-50 text-center rounded-md py-1
                outline-none tracking-widest
                focus:bg-gray-100
                focus:text-xl
                transition-all
            "
          ></input>
        </div>
        <button
          onClick={() => login()}
          className="w-20 h-6 rounded-md bg-gray-300 hover:bg-gray-200 active:bg-gray-300"
        >
          접속
        </button>
      </div>
    </div>
  );
}
