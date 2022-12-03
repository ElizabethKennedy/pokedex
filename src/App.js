


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;*/
const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
