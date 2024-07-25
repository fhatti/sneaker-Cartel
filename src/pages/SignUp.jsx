import React, { useState } from "react";
import User from "../models/User";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const registerService = new User();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerService.registerUser(
        formData.email,
        formData.password
      );
      if (user.errorCode) {
        setMessage(user.errorMessage);
        setIsSuccess(false);
      } else {
        setMessage("User registered successfully!");
        setIsSuccess(true);
        // Reset form data after successful submission
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setMessage("An error occurred during registration.");
      setIsSuccess(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] bg-bg">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {message && (
          <div
            className={`mb-4 p-4 rounded-md ${
              isSuccess
                ? "bg-background text-headline"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-button hover:bg-button hover:text-headline py-2 rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {isSuccess && (
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/login")}
              className=" hover:underline"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUp;
