import React, { useRef, useEffect, useState } from 'react';
// import './search.css';

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  useEffect(() =>{
    inputRef.current.focus();
  }, []);
  
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <header>
      <input ref={inputRef} type="text" placeholder="Search..." value={searchValue} onChange={handleChange}/>
    </header>
  );
}

