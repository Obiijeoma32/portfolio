import React from "react";
import { Document, Page } from "react-pdf-js";

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={console.log}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
