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

    // searchResults.append(resultLinks);

    // const resultItem = createResultItem(result);

    // const resultContents = document.createElement("div");
    // resultContents.classList.add("resultContents");

    // // If the result has and image
    // if(result.img) {
    //   const resultImage = createResultImage(result);
    //   resultContents.append(resultImage);
    // }

    // const resultText = createResultText(result);
    // resultContents.append(resultText);
    // resultItem.append(resultContents);

    // const searchResults = document.getElementById("searchResults");
    // searchResults.append(resultItem);
  });

  resultRowDiv.classList.add("row");
  resultRowDiv.classList.add("resultRowDiv"); 

  searchResults.append(resultRowDiv);
  searchResults.classList.add("searchResults");
};

const createResultLinks = (result) => {
  // console.log('result in createResultLinks', result);
  const resultColDiv = document.createElement("div");
  resultColDiv.classList.add("col-6");
  resultColDiv.classList.add("p-3");
  
  // resultColDiv.classList.add("mx-auto");
  
  const resultImgLink = document.createElement("a");
  // resultImgLink.href = `https://www.themealdb.com/meal.php?c=${result.id}`;
  // resultImgLink.href = "#";
  resultImgLink.target = "_blank";

  const resultImg = document.createElement("img");
  resultImg.src = result.img;
  resultImg.alt = result.title;
  resultImg.classList.add("resultImg");
  resultImg.setAttribute("id",`resultImg${result.id}`);
  // resultImg.setAttribute("id","resultImg");


  // const resultInfo = document.createElement("div");
  const resultLink = document.createElement("a");
  // resultLink.href = "#";
  // resultLink.href = `https://www.themealdb.com/meal.php?c=${result.id}`;
  resultLink.textContent = result.title;
  resultLink.target = "_blank";
  resultLink.classList.add("resultLink");


  // resultInfo.classList.add("resultInfo");
  // resultColDiv.classList.add("col-6");
  // resultInfo.classList.add("p-3");

  // resultInfo.append(resultLink);




  // const resultUl = document.createElement("ul");

  // const resultList = document.createElement("li");
  
  // const resultLink = document.createElement("a");
  // resultLink.href = `https://www.themealdb.com/meal.php?c=${result.id}`;
  // resultLink.textContent = result.title;
  // resultLink.target = "_blank";

  // resultList.append(resultLink);
  // resultUl.append(resultList);
  // resultDiv.append(resultUl);
  
  resultImgLink.append(resultImg);
  resultColDiv.append(resultImgLink);
  resultColDiv.append(resultLink);

  return resultColDiv;
}


// const createResultItem = (result) => {
//   const resultItem = document.createElement("div");
//   resultItem.classList.add("resultItem");

//   const resultTitle = document.createElement("div");
//   resultTitle.classList.add("resultTitle");

//   const link = document.createElement("a");
//   link.href = `https://en.wikipedia.org/?curid=${result.id}`;
//   link.textContent = result.title;
//   link.target = "_blank";

//   resultTitle.append(link);
//   resultItem.append(resultTitle);
//   return resultItem;
// };

// const createResultImage = (result) => {
//   const resultImage = document.createElement("div");
//   resultImage.classList.add("resultImage");

//   const img = document.createElement("img");
//   img.src = result.img;
//   img.alt = result.title;

//   resultImage.append(img);

//   return resultImage;
// };

// const createResultText = (result) => {
//   const resultText = document.createElement("div");
//   resultText.classList.add("resultText");
  
//   const resultDescription = document.createElement("p");
//   resultDescription.classList.add("resultDescription");
//   resultDescription.textContent = result.text;

//   resultText.append(resultDescription);
  
//   return resultText;
// };

export const clearStatsLine = () => {
  // console.log("stats", document.getElementById("stats"));
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
