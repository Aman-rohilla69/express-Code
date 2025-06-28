// import "dotenv/config";
// import express from "express";
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.send("hello aman ! Hello World");
// });
// app.get("/twitter",(req,res)=>{
//  res.send("Hello Twitter");
// // res.cookies.send("cookieName", "cookieValue", { maxAge: 900000, httpOnly: true });
// });
// app.get("/login",(req,res)=>{
//     res.send("<h1>Login Page</h1><form action='/login' method='post'><input type='text' name='username' placeholder='Username'><input type='password' name='password' placeholder='Password'><button type='submit'>Login</button></form>");
// })
// app.get("/youtube",(req, res) => {
//   res.send("<h2>Welcome to YouTube</h2><p>Enjoy your stay!</p>");
// });
// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
import express from "express";
import "dotenv/config";
// Importing dotenv to load environment variables
const app = express();
const PORT = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("Hello Aman Bhai!");
});
app.listen(process.env.PORT, () => {
  // Starting the server on the specified port
  console.log(`Server is running on http://localhost:${PORT}`);
});

// import express from "express";
import "dotenv/config";
const apps = express();
const PORTS = process.env.PORTS || 9000;
const apidata = [
  {
    username: "aman123",
    password: "abc@123",
    email: "aman@example.com",
    lastLogin: "2025-06-28T10:00:00Z",
  },
  {
    username: "rohit456",
    password: "xyz@456",
    email: "rohit@example.com",
    lastLogin: "2025-06-27T08:30:00Z",
  },
];
apps.get("/", (req, res) => {
  res.send("Hello aman!");
});
apps.listen(process.env.PORTS, () => {
  console.log(`Server is running on http://localhost:${PORTS}`);
});
apps.get("/twitter", (req, res) => {
  res.send("<h1>login page of admin!</h1> \n hello twitter!");
});
apps.get("/login", (req, res) => {
  res.send(
    "<h1>Login Page</h1><form action='/login' method='post'><input type='text' name='username' placeholder='Username'><input type='password' name='password' placeholder='Password'><button type='submit'>Login</button></form>"
  );
});
apps.get("/apidata",(req,res)=>(
  res.json(apidata)
))
apps.listen(process.env.PORTS, () => {
  console.log(`Server is running on http://localhost:${PORTS}`);
});
