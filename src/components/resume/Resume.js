import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useSelector } from "react-redux";
import Particle from "../home/Particle";
import "./Resume.css";
import pdf from "../../Assets/Raveenareddy.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState();
  const url = useSelector((state) => state?.myData?.resume);
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{
              maxWidth: "250px",
              marginBottom: "50px",
              marginTop: "120px",
            }}
            className="download-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            onLoadSuccess={onDocumentLoadSuccess}
            file={pdf}
            className="d-flex flex-column  align-items-center justify-content-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            ))}
            {/* <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} /> */}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", margin: "50px 0px" }}
            className="download-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
