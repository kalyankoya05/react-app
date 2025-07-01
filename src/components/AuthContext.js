// import React, { createContext, useState, useEffect } from "react";
 
// export const AuthContext = createContext();

// const [users, setUsers] = useState(() => {
//   const storedUsers = localStorage.getItem("users");
//   return storedUsers
//     ? JSON.parse(storedUsers)
//     : [{ email: "snehal@admin.com", password: "admin", role: "admin" }];
// });

// const register = (email, password, role = "guest") => {
//   if (users.find(u => u.email === email)) {
//     throw new Error("User already exists.");
//   }
//   const newUser = { email, password, role };
//   //setUsers(prevUsers => [...prevUsers, newUser]);
//   setUsers([...users, { email, password, role }]);
// };

// const login = (email, password) => {
//   const user = users.find(u => u.email === email && u.password === password);
//   // setAuthData({ email });
//   if (!user) throw new Error("Invalid credentials.");
//   setCurrentUser(user);
// };
 
// export const AuthProvider = ({ children }) => {
//   const [users, setUsers] = useState([
//     { email: "snehal@admin.com", password: "admin", role: "admin" }
//   ]);
// return (
//     <AuthContext.Provider
//     value = {{users,currentUser,register,login,logout}}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
  
 
//   const [currentUser, setCurrentUser] = useState(null);