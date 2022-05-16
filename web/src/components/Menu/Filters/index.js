import React, { useContext } from "react";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FiltersWrapper } from "./styles";

import { GlobalContext } from '../../../contexts/global';

export default function Filters({ filterType, handleActionFilter, setShowFilters }) {
  const { movieGenres, linkTypes, todoTypes } = useContext(GlobalContext);
  const filters =
    filterType === 'todo' ? todoTypes
  : filterType === 'movies' ? movieGenres
  : filterType === 'links' && linkTypes;

  return (
    <FiltersWrapper className="animationShow" onMouseLeave={() => setShowFilters('')}>
      {filters.map(filter => 
        <span key={filter.id} className="filter" 
          onClick={() => handleActionFilter(filterType, filter.name)}>
          {filter.id ? filter.name : <FcAlphabeticalSortingAz size={12} />}
        </span>
      )}
    </FiltersWrapper> 
  )
}