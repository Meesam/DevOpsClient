const Login = () => {
  return (
    <div className="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 className="text-sky-700 text-3xl block text-center font-semibold">
        Login
      </h1>
      <hr className="mt-3" />
      <form method="post">
        <div className="mt-3">
          <label htmlFor="Email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="text"
            className="border w-full text-sm px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Email..."
          />
          <span className="text-xs text-red-500"></span>
        </div>
        <div className="mt-3">
          <label htmlFor="Password" className="block text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-sm px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Password..."
          />
          <span className="text-xs text-red-500"></span>
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
