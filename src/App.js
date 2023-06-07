import "./App.css";
import CertificateTemp from "./components/CertificateTemp";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <div>check</div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <CertificateTemp />
      </PDFViewer>
    </div>
  );
}

export default App;
