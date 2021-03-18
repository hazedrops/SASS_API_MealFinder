export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  const regex = /[ ]{2, }/gi;
 
  // Replace multiple spaces in the input into only one space
  const searchTerm = rawSearchTerm.replaceAll(regex, " "); 
  
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const mealSearchString = getMealSearchString(searchTerm);
  const mealSearchResults = await requestData(mealSearchString);

  console.log('mealSearchResults', mealSearchResults );
  
  let resultArray = [];

  // If the json data has the 'meals' property
  if(mealSearchResults['meals']) {
    resultArray = processmealResults(mealSearchResults['meals']);
  } 

  return resultArray;
};

const getMealSearchString = (searchTerm) => {
  // const maxChars = getMaxChars();

  const rawSearchString = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  const searchString = encodeURI(rawSearchString);

  console.log('searchString', searchString);
  
  return searchString;
}

// const getMaxChars = () => {
//   const width = window.innerWidth || document.body.clientWidth;
//   let maxChars;

//   if(width < 414) maxChars = 65;
//   if(width >= 414 && width < 1400) maxChars = 100;
//   if(width >= 1400) maxChars = 130;

//   return maxChars;
// }

const requestData = async (searchString) => {
  try {
    const response = await fetch(searchString);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

const processmealResults = (results) => {
  const resultArray = [];

  results.forEach(result => {
    const id = result.idMeal;
    const title = result.strMeal;
    const img = result.strMealThumb;
    const ingredient1 = result.strIngredient1;
    const ingredient2 = result.strIngredient2;
    const ingredient3 = result.strIngredient3;
    const ingredient4 = result.strIngredient4;
    const ingredient5 = result.strIngredient5;
    const recipe = result.strInstructions;
    const video = result.strYoutube;    

    const item = {
      id : id,
      title: title,
      img: img,
      ingredients: [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5],
      recipe: recipe,
      video: video
    };

    resultArray.push(item);
  });
  
  return resultArray;
};

