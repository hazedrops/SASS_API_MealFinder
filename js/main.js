'use strict';

import { clearSearchText, setSearchFocus, showClearTextButton, clearPushListener } from "./searchBar.js";
import { deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine } from "./searchResults.js";
import { getSearchTerm } from "./dataFunctions.js";
import { retrieveSearchResults } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // Set the focus
  setSearchFocus();

  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" function 
const submitTheSearch = (event) => {
  event.preventDefault();
  
  // Delete search results
  deleteSearchResults();

  // Process the search
  processTheSearch();

  // Set the focus
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  // Clear the stats line
  clearStatsLine();

  const searchTerm = getSearchTerm();
  
  if (searchTerm === "") return;

  const resultArray = await retrieveSearchResults(searchTerm);
  // console.log("rrr", resultArray);

  // If there are any results, build search results
  if(resultArray.length) buildSearchResults(resultArray);

  console.log(resultArray.length);

  // if(resultArray.length > 10) pagination(resultArray);
  
  // Set stats line
  setStatsLine(resultArray.length);
};