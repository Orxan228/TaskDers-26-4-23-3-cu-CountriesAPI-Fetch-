let API_URL = "https://restcountries.com/v3.1/all";
let cardsWrapper = document.querySelector(".cards-row");
let input = document.querySelector("#search");

fetch(API_URL)
.then(resp => resp.json())
.then(data => {
    data.forEach(country => {
        cardsWrapper.innerHTML += `<div class="col-lg-3 col-sm-12">
        <div class="card">
            <img height="175" class="card-img-top" src="${country.flags.png}" alt="${country.flags.alt}">
            <div class="card-body">
              <h5 class="card-title"><a href="#">${country.name.common}</a></h5>
              <div class="card-data">
                <p><b>Population:</b> <span>${country.population}</span></p>
                <p><b>Region:</b> <span>${country.region}</span></p>
                <p><b>Capital:</b> <span>${country.capital}</span></p>
              </div>
            </div>
          </div>
    </div>`
    });
})

input.addEventListener("keyup" ,()=>{
  fetch(API_URL)
  .then(resp => resp.json())
  .then(data => {
    cardsWrapper.innerHTML = ``
    data.forEach(country => {
      if (country.name.common.toLowerCase().includes(input.value.toLowerCase())) {
        cardsWrapper.innerHTML += `<div class="col-lg-3 col-sm-12">
        <div class="card">
            <img height="175" class="card-img-top" src="${country.flags.png}" alt="${country.flags.alt}">
            <div class="card-body">
              <h5 class="card-title"><a href="#">${country.name.common}</a></h5>
              <div class="card-data">
                <p><b>Population:</b> <span>${country.population}</span></p>
                <p><b>Region:</b> <span>${country.region}</span></p>
                <p><b>Capital:</b> <span>${country.capital}</span></p>
              </div>
            </div>
          </div>
       </div>`
      }
  });
})})
