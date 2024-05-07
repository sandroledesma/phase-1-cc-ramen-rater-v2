// index.js

  function displayRamen() { 
    fetch("http://localhost:3000/ramen") // fetch the images from the db.json database
    .then((response) => response.json()) // converts the fetched response into JSON format
    .then(ramen => { // processes the fetched data
      const imageOfRamen = document.getElementById("ramen-menu"); // "connects" the image pulled into the HTML id="ramen-menu"
      const firstRamen = ramen[0];

      const ramenImage = document.getElementById("detail-image");
      ramenImage.src = firstRamen.image;

      const ramenName = document.getElementById("name");
      ramenName.textContent = firstRamen.name;

      const ramenRestaurant = document.getElementById("restaurant");
      ramenRestaurant.textContent = firstRamen.restaurant;

      ramen.slice(1).forEach(ramenItem => { // loop through each ramen object in the database ("for each object, take image and name")
        const img = document.createElement('img'); // create an image element for each ramen image
        img.src = ramenItem.image; // pulls the image src url from db.json (key: image)
        img.alt = ramenItem.name; // pulls the image name from db.json (key: name)
        img.addEventListener('click', () => {
          handleClick(ramenItem);
        })
        imageOfRamen.appendChild(img); // appends the imageOfRamen to HTML 
        }); 
      })
      .catch(error => console.error('Error fetching ramen:', error));
    }

    function handleClick(ramen) {
      console.log('Image Clicked:', ramen);
        const detailImage = document.querySelector('.detail-image'); 
        const nameOfRamen = document.querySelector('.name');
        const restaurantOfRamen = document.querySelector('.restaurant');
        const ratingOfRamen = document.querySelector('#rating-display'); 
        const commentOfRamen = document.querySelector('#comment-display');

      detailImage.src = ramen.image;
      detailImage.alt = ramen.image;
      nameOfRamen.textContent = ramen.name;
      restaurantOfRamen.textContent = ramen.restaurant;
      ratingOfRamen.textContent = ramen.rating;
      commentOfRamen.textContent = ramen.comment;
    }
  
    function addSubmitListener() {
      const addNewRamen = document.getElementById("new-ramen");
      addNewRamen.addEventListener("submit", event => {
        event.preventDefault();

        const newName = document.getElementById("new-name").value;
        const newRestaurant = document.getElementById("new-restaurant").value;
        const newImage = document.getElementById("new-image").value;
        const newRating = document.getElementById("new-rating").value;
        const newComment = document.getElementById("new-comment").value;

        fetch("http://localhost:3000/ramen", { //post request should end with {} for the code block of method and headers
          method: "POST", 
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",            
          },
          body: JSON.stringify({ // new fields and key 
            name: newName, 
            restaurant: newRestaurant, 
            image: newImage,
            rating: newRating,
            comment: newComment
          })
        })
        .then((response) => response.json())
        .then(data => { // why are images getting doubled up at refresh
            console.log("New Ramen added:", data);
            // displayRamen();
            //newImage.appendChild(img);
            clearForm();
        })
        .catch(error => console.error('Error adding new ramen:', data));
    });
  }

  function clearForm() {
    document.getElementById("new-name").value = "";
    document.getElementById("new-restaurant").value = "";
    document.getElementById("new-image").value = "";
    document.getElementById("new-rating").value = "";
    document.getElementById("new-comment").value = "";
  }

  function main() {
    displayRamen();
    addSubmitListener();
  }

  main();



/*

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; */
