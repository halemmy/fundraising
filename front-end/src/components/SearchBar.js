import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import setQuery from "set-query-string";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setQuery(searchInput);
    console.log(searchInput);
  };

  return (
    <div>
      <Form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <Button type="submit" value="Search" size="sm" variant="dark secondary">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
