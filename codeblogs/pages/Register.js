import axios from 'axios';
import React, { useState } from 'react'


const Register = () => {
  const registeruser = ()=>{
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }


  
  
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
      <section >
        <div className="container min-h-screen px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/3 md:w-2/3 mx-auto">
            <div className="flex flex-col flex-wrap m-2">
              <div className="p-2">
                <div>
                  <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input  type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2">
                <div>
                  <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2">
                <div>
                  <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                  <input type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={registeruser} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}


export default Register