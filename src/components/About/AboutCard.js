import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vikas Vadhiya </span>
            from <span className="purple"> Vapi, Gujarat, India.</span>
            <br />
            I am currently employed as a software developer at TechStaunch Solution Pvt Ltd.
            <br />
            I have completed Computer Engineering in 2022 from Gujarat Technological University.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket/Watch
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Push Beyond Limits.!"{" "}
          </p>
          <footer className="blockquote-footer">Vikas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
