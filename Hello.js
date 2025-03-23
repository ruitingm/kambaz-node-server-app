export default function Hello(app) {
  const hello = (req, res) => {
    res.send("<h1>Hello World!</h1>");
  };
  const home = (req, res) => {
    res.send("Welcome to Full Stack Development!");
  };
  app.get("/hello", hello);
  app.get("/", home);
}
