import { InputType } from "@/type";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function Input({
  labelName,
  type,
  inputState,
  inputSetState,
}: InputType) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <div>
        <label className="block text-sm font-medium leading-6 text-black">
          {labelName}
        </label>
        <div className="">
          <section className="relative">
            <input
              onChange={(e) => {
                inputSetState(e.target.value);
              }}
              value={inputState}
              id={labelName}
              name={labelName}
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              autoComplete={labelName}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {type === "password" && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
              </button>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
