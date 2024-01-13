import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSelector } from "react-redux";
import "./About.css";

function AboutCard() {
  const about = useSelector((state) => state?.myData?.about?.myself);
  const interests = useSelector((state) => state?.myData?.about?.interests);
  const interestsArr = interests && interests.split(",");
  const quote = useSelector((state) => state?.myData?.about?.quote);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            className="about-card-content"
            dangerouslySetInnerHTML={{ __html: about }}
          />
          <p style={{ textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {interestsArr &&
              interestsArr.map((interest) => (
                <li className="about-activity">
                  <ImPointRight /> {interest}
                </li>
              ))}
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>{quote}</p>
          <footer className="blockquote-footer">Raveena</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
