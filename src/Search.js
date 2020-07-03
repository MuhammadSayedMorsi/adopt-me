import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./UseDropdown";

// SEarch Loaction Component!
const SearchLocation = () => {
  const [location, setLocation] = useState("Seatle WA");
  const [breeds, setBreeds] = useState([]);

  // animal dropdown
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // breed dropdown
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // serch Pets
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    // set pets with the animals from api, or complete to empty array
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={event => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="Location">
          <input
            id="location"
            type="text"
            value={location}
            placeholder="location"
            // change location on change
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchLocation;
