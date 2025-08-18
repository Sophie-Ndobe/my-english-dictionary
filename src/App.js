import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">📖📖The English Dictionary📖📖</h1>
        <Dictionary />
        <footer className="text-center">
          This project was developed by{" "}
          <a
            href="https://github.com/Sophie-Ndobe?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Sophie Ndobe
          </a>
          , released as{" "}
          <a
            href="https://github.com/Sophie-Ndobe/my-english-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
          , and is hosted on{" "}
          <a
            href="https://english-ditionary-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
