import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          {/* <a
            href="https://greenoar.oas.psu.ac.th/team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="danger" size="lg">
              Go to Green OAR
            </Button>
          </a> */}

          <iframe
            className="responsive-iframe"
            title="Green office"
            position="absolute"
            frameBorder="0"
            src="https://app.powerbi.com/view?r=eyJrIjoiNTg3YjI3OWQtZmE5My00OWNmLTg1YzEtYTdmNTE3NTlmNWMyIiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
