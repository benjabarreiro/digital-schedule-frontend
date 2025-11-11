"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardBootstrap({
  id,
  title,
  subtitle,
  description,
  description2,
  src,
  primaryBtnAction,
  primaryBtnTxt,
  secondaryBtnTxt,
  dangerBtnAction,
  dangerBtnTxt,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-4">{subtitle}</Card.Subtitle>
        <Card.Text>
          {description}
          <br />
          {description2}
        </Card.Text>
        <div
          className={`d-flex flex-column flex-md-row justify-content-${
            (secondaryBtnTxt || dangerBtnTxt) && primaryBtnTxt
              ? "between"
              : "end"
          } gap-2`}
        >
          {secondaryBtnTxt && (
            <Link href={`/doctor/${id}`} passHref>
              <Button variant="outline-secondary">{secondaryBtnTxt}</Button>
            </Link>
          )}
          {dangerBtnTxt && (
            <Button
              onClick={() => {
                console.log("hola");
                dangerBtnAction();
              }}
              variant="outline-danger"
            >
              {dangerBtnTxt}
            </Button>
          )}
          {primaryBtnTxt && (
            <Button
              onClick={() => {
                console.log("hola");
                primaryBtnAction();
              }}
              variant="primary"
            >
              {primaryBtnTxt}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBootstrap;
