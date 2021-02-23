import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropDown from './DropDownCustom';

const searchLocation = () => {
  const [location, setLocation] = useState('Settle, WA');
  //   const [animal, setAnimal] = useState('dog');
  //   const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropDown] = useDropDown('Breed', '', breeds);

  return (
    <div className='search-params'>
      <h1>{location}</h1>
      <form>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Location'
          />
        </label>
        {/* <label htmlFor='animal'>
          Animal
          <select
            id='animals'
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>ALL</option>
            {ANIMALS.map((item) => (
              <option key={animal} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label> */}

        <AnimalDropDown />
        <BreedDropDown />

        <button> Submit</button>
      </form>
    </div>
  );
};

export default searchLocation;
