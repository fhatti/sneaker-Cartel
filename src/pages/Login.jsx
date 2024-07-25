import React, { useState } from 'react';
import User from '../models/User'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const loginService = new User();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginService.logInUser(formData.email, formData.password);
      if (result.errorCode) {
        setMessage(result.errorMessage);
        setIsSuccess(false);
      } else {
        setMessage('Login successful!');
        setIsSuccess(true);
        navigate('/homepage'); 
      }
    } catch (error) {
      setMessage('An error occurred during login.');
      setIsSuccess(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] bg-bg">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        {message && (
          <div
            className={`mb-4 p-4 rounded-md ${
              isSuccess
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate('/signUp')}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
