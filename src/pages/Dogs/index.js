import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getDogs function from the utils/api.js file */
import { getDogs } from "../../utils/api";

function Dogs() {
  /* INSTRUCTION: create a state variable called dogs and set it to an empty array */
  const [dogs, setDogs] = useState([]);

  /* INSTRUCTION: create a state variable called size and set it to an empty string */
  const [size, setSize] = useState("");

  /* INSTRUCTION: create a useEffect hook that fetches the dogs from the back-end server using the getDogs function */
  useEffect(() => {
    getDogs(size).then((data) => {
      setDogs(data);
      console.log(data);
    });
  }, [size]);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <h2>Dogs</h2>
      <div className="filters">
        <label htmlFor="size">Filter by size:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to filter the dogs by size */}
        <select value={size} onChange={handleChange}>
          <option>All</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      {/* INSTRUCTION: create a table that displays the dogs. The table should have the following columns: Breed, Size, Age, and Adoption Fee. If there are no dogs, display a message saying "No dogs found." */}
      <table>
        <th>Size</th>
        <th>Age</th>
        <th>Adoption Fee</th>
        <th>Breed</th>
      </table>
      {dogs.length > 0 ? (
        dogs.map((dog) => (
          <table>
            <td>{dog.breed}</td>
            <td>{dog.size}</td>
            <td>{dog.age}</td>
            <td>{dog.adoptionFee}</td>
          </table>
        ))
      ) : (
        <p>No dogs found</p>
      )}
    </div>
  );
}

export default Dogs;
