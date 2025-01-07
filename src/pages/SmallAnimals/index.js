import React, { useEffect, useInsertionEffect, useState } from "react";
/* INSTRUCTION: import the getSmallAnimals function from the utils/api.js file */
import { getSmallAnimals } from "../../utils/api";
function SmallAnimals() {
  /* INSTRUCTION: create a state variable called smallAnimals and set it to an empty array */
  const [smallAnimals, setSmallAnimals] = useState([]);
  /* INSTRUCTION: create a state variable called search and set it to an empty string */
  const [search, setSearch] = useState("");

  /* INSTRUCTION: create a useEffect hook that fetches the small animals from the back-end server using the getSmallAnimals function */
  useEffect(() => {
    getSmallAnimals(search).then((data) => {
      setSmallAnimals(data);
      console.log(data);
    });
  }, [search]);
  /* INSTRUCTION: create a function called handleSearchChange that updates the search state variable */
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Small Animals</h2>

      <div className="search-form">
        <label htmlFor="search">Search (by name or animal type):</label>
        <input value={search} onChange={handleSearchChange}></input>
        {/* INSTRUCTION: create an input field that allows the user to search for small animals by name or animal type */}
      </div>

      {/* INSTRUCTION: create a table that displays the small animals. The table should have the following columns: Name, Animal Type, Age, and Gender. If there are no small animals, display a message saying "No small animals found." */}
      <table>
        <th>Name</th>
        <th>Animal Type</th>
        <th>Age</th>
        <th>Gender</th>
      </table>
      {smallAnimals.length > 0 ? (
        smallAnimals.map((animal) => (
          <table>
            <td>{animal.name}</td>
            <td>{animal.animalType}</td>
            <td>{animal.age}</td>
            <td>{animal.gender}</td>
          </table>
        ))
      ) : (
        <p>No animals found</p>
      )}
    </div>
  );
}

export default SmallAnimals;
