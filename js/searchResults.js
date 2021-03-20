export const deleteSearchResults = () => {
  const parentElement = document.getElementById("searchResults");
  let child = parentElement.lastElementChild;

  while(child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

export const buildSearchResults = (resultArray) => {
  const searchResults = document.getElementById("searchResults");
  const resultRowDiv = document.createElement("div");   

  resultArray.forEach(result => {
    const resultColDiv = createResultLinks(result);
    resultRowDiv.append(resultColDiv);    
  });

  resultRowDiv.classList.add("row");
  resultRowDiv.classList.add("resultRowDiv"); 

  searchResults.append(resultRowDiv);
  searchResults.classList.add("searchResults");
};

const createResultLinks = (result) => {
  const resultColDiv = document.createElement("div");
  resultColDiv.classList.add("col-6");
  resultColDiv.classList.add("p-3");
  
  const resultImgLink = document.createElement("a");
  resultImgLink.target = "_blank";

  const resultImg = document.createElement("img");
  resultImg.src = result.img;
  resultImg.alt = result.title;
  resultImg.classList.add("resultImg");
  resultImg.setAttribute("id",`resultImg${result.id}`);

  const resultLink = document.createElement("a");
 
  resultLink.textContent = result.title;
  resultLink.target = "_blank";
  resultLink.classList.add("resultLink");
  
  resultImgLink.append(resultImg);
  resultColDiv.append(resultImgLink);
  resultColDiv.append(resultLink);

  return resultColDiv;
}

export const clearStatsLine = () => {
  document.getElementById("stats").textContent = "";
};

export const setStatsLine = (numberOfResults) => {
  const statLine = document.getElementById('stats');

  if(numberOfResults) {
    statLine.textContent = `Displaying ${numberOfResults} results.`;
  } else {
    statLine.textContent = "Sorry, no results."
  }
}
