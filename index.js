function getDogImage(breed) {
  // add breed at the end of the API link
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    // account for 404 error
    .then((response) => {
      if (response.status === 404) {
        console.log("error breed not found");
      } else {
        return response.json();
      }
    })
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Breed not found. Try another."));
}

function displayResults(responseJson) {
  //replace the existing image with the new one
  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    // create a variable breed to store the form value
    const breed = $("form #img-breed").val();
    getDogImage(breed);
  });
}

$(function () {
  console.log("App ready!");
  watchForm();
});
