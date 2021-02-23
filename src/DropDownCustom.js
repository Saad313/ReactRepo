import React, { useState } from 'react';

const useDropDown = (lable, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${lable.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor='lale'>
      {lable}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropDown;
