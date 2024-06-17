"use client";

import React, { useState } from "react";

const WishListAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const isAuthenticated = formData.username.trim() !== '' && formData.password.trim() !== '' ? true : false;
    setAuthenticated(isAuthenticated);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
    <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-center">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          className="w-full bg-slate-950 p-1 rounded-lg border-2 border-teal-950 text-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-center">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className="w-full bg-slate-950 p-1 rounded-lg border-2 border-teal-950 text-center"
        />
      </div>
      <div className="w-full">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
          Sign In
        </button>
      </div>
    </form>
  </div>
  );
};

export default WishListAuth;