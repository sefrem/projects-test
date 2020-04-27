import { useState, useEffect } from "react";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(searchTerm)

  const handleChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value);
  };

  return {
    searchTerm,
    handleChange,
  };
};

export default useSearch;
