import React from "react";
import { useAuthForm } from "../hooks/use-auth-form";

export const PasswordInput = () => {
  const { register } = useAuthForm();
  return (
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        {...register("password")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="8文字以上で入力してください"
      />
    </div>
  );
};
