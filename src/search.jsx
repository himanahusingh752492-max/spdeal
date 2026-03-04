import React from "react";
import { useLocation } from "react-router-dom";
import { blog } from "./blog";
import Body from "./body";
import { Container, Row } from "react-bootstrap";

function SearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "";

  console.log("Query:", query); // <-- check if query is coming

  const filteredBlog = blog.filter(item =>
    item.name?.trim().toLowerCase().includes(query.trim().toLowerCase())
  );

  console.log("Filtered:", filteredBlog); // <-- check results

  return (
    <Container fluid className="body">
      <Container>
        <Row>
          {filteredBlog.length === 0 && <p>No results found for "{query}"</p>}
          {filteredBlog.map((v, i) => (
            <Body key={i} pitem={v} />
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default SearchPage;