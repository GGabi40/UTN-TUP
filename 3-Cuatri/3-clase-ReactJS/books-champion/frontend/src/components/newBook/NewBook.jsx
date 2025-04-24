import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewBook = ({ onBookAdded }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [available, setAvailable] = useState("");

  const handleAddBook = async (event) => {
    event.preventDefault();

    const bookData = {
      title,
      author,
      rating: parseInt(rating, 10),
      pageCount: parseInt(pageNumber, 10),
      summary: "",
      imageUrl,
      available,
    };

    try {
      const res = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData),
      });

      if (!res.ok) {
        console.error("Fallo al crear nuevo libro.");
      }

      const newBook = await res.json();
      console.log(newBook);

      onBookAdded(newBook);

      setTitle("");
      setAuthor("");
      setRating("");
      setPageNumber("");
      setImageUrl("");

    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Card className="m-4 mx-auto p-3" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={handleAddBook}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar título"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar autor"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                  onChange={(e) => setRating(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                  onChange={(e) => setPageNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar url de imagen"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col
              md={3}
              className="d-flex flex-column justify-content-end align-items-end"
            >
              <Form.Check
                type="switch"
                id="available"
                className="mb-3"
                label="¿Disponible?"
                onChange={(e) => setAvailable(e.target.checked)}
              />
              <Button variant="primary" type="submit">
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewBook;
