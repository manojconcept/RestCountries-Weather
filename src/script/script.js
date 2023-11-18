console.log("Linked");

// --------------------------> createElement
let documentTitle = document.createElement('title');
document.head.append(documentTitle);
let textElement = document.createTextNode("Rest Countries & Weather using fetch API");
documentTitle.appendChild(textElement);

// --------------------------> body
let bodyDiv = document.createElement("div");
document.body.append(bodyDiv);
bodyDiv.classList.add("container", "g-4");

let carBDiv = document.createElement("div");
bodyDiv.append(carBDiv);
carBDiv.classList.add("row", "col-1", "g-4", "col-sm-12","mt-5");

let url = "https://restcountries.com/v3.1/all";
let getDataRest = fetch(url);

console.log(getDataRest);
getDataRest
  .then((response) => response.json())
  .catch((reason) => console.error("Error:", reason))
  .then((data) => {
    // Sort data by country name
    data = data.sort((a, b) => {
      if (a.name.common < b.name.common) return -1;
    });
    console.log(data[0].flags.alt)
    // Loop through the data and create card elements
    for (let i = 0; i < data.length; i++) {
      let cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "col-3", "mt-2");

      let imageUrl = data[i].flags.svg; 
      let imageUrlAlt = data[i].flags.alt;
      cardDiv.innerHTML = `
        <div class="card-header">${data[i].name.common}</div>
        <div class="card-body">
          <img class="card-img-top" src="${imageUrl}" alt="Flag of ${imageUrlAlt}">
          <h5 class="card-title">${data[i].name.common}</h5>
          <h5 class="card-title">Captial : ${data[i].name.common}</h5>
          <h5 class="card-title">Captial : ${data[i].name.common}</h5>
          <h5 class="card-title">Captial : ${data[i].name.common}</h5>
          <button type="button" class="btn btn-primary">Click me</button>

        </div>
      `;

      carBDiv.appendChild(cardDiv);
    }
  });
