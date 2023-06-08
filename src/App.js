import React from "react";
import "./App.css";
import CertificateTemp from "./components/CertificateTemp";
import { PDFViewer, pdf } from "@react-pdf/renderer";

function App() {
  const handleShareClick = async () => {
    const certificatePdf = <CertificateTemp />;
    const blob = await pdf(certificatePdf).toBlob();
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "asda");
    // try {
    //   if (navigator.share) {
    //     await navigator.share({ url: "blob:http://localhost:3000/45d70f1c-1478-4e9b-b3e5-9eccbb6b0827 " });
    //     console.log('Successfully shared the certificate.');
    //   }
    // } catch (error) {
    //   console.error("Error sharing the certificate:", error);
    // }
    // try {
    //   const pdfBlob = await CertificateTemp({ name: "John Doe" }).toBlob();
    //   if (navigator.share) {
    //     await navigator.share({
    //       title: "Certificate",
    //       files: [
    //         new File([pdfBlob], "certificate.pdf", {
    //           type: "application/pdf",
    //         }),
    //       ],
    //     });
    //   } else {
    //     saveAs(pdfBlob, "certificate.pdf");
    //   }
    // } catch (error) {
    //   console.error("Error sharing certificate:", error);
    // }
  };
  return (
    <div className="App">
      <div
        style={{
          disply: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleShareClick}>Share Certificate</button>
      </div>
      <div style={{ display: "none" }}>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <CertificateTemp />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
