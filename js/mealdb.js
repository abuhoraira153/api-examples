const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    if(searchFieldText == ''){
        console.log('Please lakfdlksdjflaskjdf')
    }
    else{
        console.log(searchFieldText)
    searchField.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    }
    
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.length == 0){
        alert ('No result found')
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick ="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
    `
    searchResult.appendChild(div);
    })
    
}
const loadMealDetail = mealDetail =>{
    // console.log(mealDetail)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal =>{
    // console.log(meal);
    const mealDetail = document.getElementById('meal-detail');
    const mealDetailDiv = document.createElement('div')
    mealDetailDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    mealDetail.appendChild(mealDetailDiv);

}
