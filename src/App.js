import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <a
            href="https://greenoar.oas.psu.ac.th/team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="danger" size="lg">
              Go to Green OAR
            </Button>
          </a>

          <iframe
            frameBorder="0"
            title="green office"
            width="1024"
            height="612"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzk4NTBmMTgtMmU4OS00Mjk2LWI0ZjMtZDhhNjc2M2I1NjNlIiwidCI6IjhlNjM0ZTY3LTlkNjYtNDZkMi1hNTI5LWUxYjcwOGM1ZDhiYyIsImMiOjEwfQ%3D%3D&pageName=ReportSection"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
