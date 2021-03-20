export const showDetailModal = (resultArray, id) => {
  document.querySelector(".overlay").style.display = "block";

  const mealId = id.slice(9);
  
  const detailModalContainer = document.getElementById("detailModalContainer");  
  
  const detailRowDiv = buildModalDetail(resultArray, mealId);

  // console.log("detailRowDiv", detailRowDiv);
  detailRowDiv.classList.add("detailModal");
  detailRowDiv.setAttribute("id", "detailModal");

  detailModalContainer.append(detailRowDiv);

  // detailModal.classList.add("detailModalContainer");    
};

const buildModalDetail = (resultArray, mealId) => {
  // detailModal.style.display = "block";

  const detailRowDiv = document.createElement("div");   

  const closeModalButton = document.createElement("span");   
  closeModalButton.classList.add("closeModalButton");
  closeModalButton.innerHTML = "&times;";
  closeModalButton.setAttribute("id", "closeModalButton");

  closeModalButton.addEventListener("click", closeModal);

  resultArray.forEach(result => {
    if(result.id === mealId) {
      console.log(result.title);

      const modalTitle= document.createElement("div");
      modalTitle.classList.add("modalTitle");
      modalTitle.innerHTML = result.title;

      const modalImgIng = document.createElement("div");
      modalImgIng.classList.add("modalImgIng");

      const modalImgDiv = document.createElement("div");
      const modalImg = document.createElement("img");

      modalImgDiv.classList.add("modalImgDiv");
      modalImg.src = result.img;
      modalImg.alt = result.title;
      modalImgDiv.append(modalImg);

      const modalIngredientDiv = document.createElement("div");
      modalIngredientDiv.classList.add("modalIngredientDiv");
      const modalIngredientTitle = document.createElement("span");
      modalIngredientTitle.classList.add("modalIngredientTitle");

      // modalIngredientDiv.textContent = "Ingredients";
      modalIngredientTitle.innerHTML = "Ingredients" + "<br />";
      modalIngredientDiv.append(modalIngredientTitle);


      // const modalIngredientUl = document.createElement("ul");
      // modalIngredientUl.classList.add("modalIngredientUl");
      
      // for(let i=0; i < result["ingredients"].length; i++) {
      //   const modalIngredientLi = document.createElement("li");
      //   // console.log("Here", modalIngredientLi);
      //   modalIngredientLi.innerHTML = result.ingredients[i];
      //   modalIngredientUl.append(modalIngredientLi);
      // }

      for(let i=0; i < result["ingredients"].length; i++) {
        if(result.ingredients[i] === "  ") break;

        const modalIngredientLi = document.createElement("span");
        modalIngredientLi.innerHTML = "&#9830;" + result.ingredients[i] + "&emsp;";
        modalIngredientDiv.append(modalIngredientLi);
                
      }

      const modalDirectionsDiv = document.createElement("div");
      modalDirectionsDiv.classList.add("modalDirectionsDiv");
      const modalDirectionTitle = document.createElement("span");
      modalDirectionTitle.classList.add("modalDirectionTitle");
      modalDirectionTitle.innerHTML = "Directions" + "<br />";
      modalDirectionsDiv.append(modalDirectionTitle);

      const modalDirections = document.createElement("div");
      modalDirections.classList.add("modalDirections");
      modalDirections.innerHTML = result.recipe;
      modalDirectionsDiv.append(modalDirections);

      detailRowDiv.append(closeModalButton);

      detailRowDiv.append(modalTitle);   
      // modalIngredientDiv.append(modalIngredientUl);
      modalImgIng.append(modalImgDiv);
      modalImgIng.append(modalIngredientDiv);   
      detailRowDiv.append(modalImgIng);
      detailRowDiv.append(modalDirectionsDiv);

      // detailRowDiv.style.background = `url(${result.img})`;


    }
  });

  return detailRowDiv;
}

const closeModal = (event) => {
  event.preventDefault();

  document.getElementById("detailModal").remove();
  document.querySelector(".overlay").style.display = "none";

}