// index.js

document.addEventListener("DOMContentLoaded", (event) => { // ensures that the DOM is fully loaded before executing the code
  function displayRamen() { 
    fetch("http://localhost:3000/ramen") // fetch the images from the db.json database
    .then((response) => response.json()) // converts the fetched response into JSON format
    .then(ramen => { // processes the fetched data
      const imageOfRamen = document.getElementById("ramen-menu"); // "connects" the image pulled into the HTML id="ramen-menu"
      ramen.forEach(ramen => { // loop through each ramen object in the database ("for each object, take image and name")
        const img = document.createElement('img'); // create an image element for each ramen image
        img.src = ramen.image; // pulls the image src url from db.json (key: image)
        img.alt = ramen.name; // pulls the image name from db.json (key: name)
        img.addEventListener('click', () => {
          handleClick(ramen);
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
        // why are rating and comment different from above? 
        const ratingOfRamen = document.getElementById('rating-display'); 
        const commentOfRamen = document.getElementById('comment-display');

      detailImage.src = ramen.image;
      detailImage.slt = ramen.image;
      nameOfRamen.textContent = ramen.name;
      restaurantOfRamen.textContent = ramen.restaurant;
      ratingOfRamen.textContent = ramen.rating;
      commentOfRamen.textContent = ramen.comment;
    }
    window.onload = displayRamen;
  
    // function addSubmitListener(newRamen) {
    //   const addNewRamen = document.getElementById("new-ramen")
    //   addNewRamen.addEventListener("submit", event => {
    //     event.preventDefault();

    //     const newName = event.target["new-name"].value;
    //     const newRestaurant = event.target["new-restaurant"].value;
    //     const newImage = event.target["new-image"].value;
    //     const newRating = event.target["new-rating"].value;
    //     const newComment = event.target["new-rating"].value;

    //     fetch("http://localhost:3000/ramen")
    //       method: "POST", 
    //       headers: {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json",            
    //       },
    //       body: JSON.stringify({ // fields/key below should be identical to db.json
    //         name: newName, 
    //         restaurant: newRestaurant, 
    //         image: newImage,
    //         rating: newRating,
    //         comment: newComment
    //       })
    //     .then((response) => response.json())
    //     .then(newRamen => { // this .then element is to place image on the ramen carousel?
    //         const imageOfRamen = document.getElementById("ramen-menu"); // "connects" the image pulled into the HTML id="ramen-menu"
    //         ramen.forEach(ramen => { // loop through each ramen object in the database ("for each object, take image and name")
    //           const img = document.createElement('img'); // create an image element for each ramen image
    //           img.src = ramen.image; // pulls the image src url from db.json (key: image)
    //           img.alt = ramen.name; // pulls the image name from db.json (key: name)
    //           imageOfRamen.appendChild(img); 
    //         })
    //     })
    //   } 
      
    });
  



  
  /*


const main = () => {}
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}



})


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; */
