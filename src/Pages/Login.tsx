import React from "react";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postWithoutToken, ResponseType } from "../Utils/request-axios";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

type formData = {
  UserName: string;
  Password: string;
};

interface LoginResponse {
  expiration: string;
  token: string;
}

const Login = () => {
  const navigate = useNavigate();
  const setToken = useStore((state) => state.setToken);
  const setExpiration = useStore((state) => state.setExpiration);

  const schema: ZodType<formData> = z.object({
    UserName: z.string(),
    Password: z.string().min(3).max(100),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const handleLogin = async (data: formData) => {
    try {
      const response: ResponseType = await postWithoutToken(
        "Authentication/login",
        data
      );
      if (response?.statusText === "OK") {
        let resp = response?.data as LoginResponse;
        setToken(resp?.token);
        setExpiration(resp?.expiration);
        navigate("/users");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 className="text-sky-700 text-3xl block text-center font-semibold">
        Login
      </h1>
      <hr className="mt-3" />
      <form method="post" onSubmit={handleSubmit(handleLogin)}>
        <div className="mt-3">
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border w-full text-sm px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Email..."
            {...register("UserName")}
          />
          {errors.UserName && (
            <span className="text-xs text-red-500">
              {errors.UserName.message}
            </span>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-sm px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Password..."
            {...register("Password")}
          />
          {errors.Password && (
            <span className="text-xs text-red-500">
              {errors.Password.message}
            </span>
          )}
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <label className="text-sm">Remember Me</label>
          </div>
          <div>
            <a className="text-sky-700 text-sm hover:underline" href="#">
              Forget Password?
            </a>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="border-2 border-sky-700 bg-sky-700 text-white py-1 w-full rounded-md"
          >
            Login
          </button>
        </div>
        <div className="mt-3">
          <a className="text-sky-700 text-sm hover:underline" href="#">
            New User?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
