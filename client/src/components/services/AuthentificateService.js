import React, { Component } from 'react';

export default class AuthenticationService {

   static isAuthenticated = false;

   static login(nni, password)
   {
     const requestOptions =
       {
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({ nni, password })
       };

     fetch(`https://127.0.0.1:8443/authent`, requestOptions)
       .then(response => {
           if (response.status < 200 || response.status >= 300)
           {
             // TODO : Gérer l'erreur !!--
             throw new Error(response.statusText);
           }
           console.log("return json");
           return response.json()
         }
       )
       .then(({ token }) => {
         this.isAuthenticated = true;
         localStorage.setItem('token', token);
         this.setState({isAuthenticated: true});
       });

    return true;
  }
}
