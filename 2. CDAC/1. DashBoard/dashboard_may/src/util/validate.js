import React from 'react'

export const checkValidataSignIn = (email, password) => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(password);
  if(!isEmailValid)  return "Email is not valid";
  if(!isPasswordValid)  return "Password is not valid";
  return true;
}