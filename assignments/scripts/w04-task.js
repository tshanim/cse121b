/* LESSON 3 - Programming Tasks */

/* Profile Object  */
// Step 1: Declare a new object literal variable named myProfile to hold information about yourself
// Step 2: Inside of the object literal, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add a property named placesLived. Set its value to be an empty array

let myProfile = {
    name: "William Tshani",
    photo: "images/me.png",
    favoriteFoods: [
        "Meat",
        "veggies",
        "Fruits",
        "Pasta", 
        "Rice"
    ],
    hobbies: [
        "Reading",
        "Writing",
        "Watching TV",
        "Cycling"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

myProfile.placesLived.push(
    {
        place: "Johannesburg, South Africa",
        length: "13 years"
    },   
    
    {   place: "Harare, Zimbabwe",
        length: "7 months"
    },
    
    {   place: "Lilongwe, Malawi",
        length: "1 year"
    },
    
    {   place: "Lusaka, Zambia",
        length: "8 months"
    },
    
    {   place: "Lubumbashi, DR Congo",
        length: "25 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
// Step 1: Assign the value of the name property of the myProfile object to the HTML element with an ID of name

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo

document.querySelector("#photo").setAttribute("src", myProfile.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.

document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

myProfile.favoriteFoods.forEach((food)=> {
    let favoriteFoodElem = document.createElement("li");
    favoriteFoodElem.textContent = food;
    
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector("#favorite-foods").appendChild(favoriteFoodElem);
});

/* Hobbies List */
// Step 6: Repeat Step 4 for each hobby in the hobbies property

myProfile.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement("li");
    hobbyElem.textContent = hobby;

    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

    document.querySelector("#hobbies").appendChild(hobbyElem);
});

/* Places Lived DataList */
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement("dt");
    placesLivedPlace.textContent = placeLived.place;

    let placesLivedLength = document.createElement("dd");
    placesLivedLength.textContent = placeLived.length;

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

    document.querySelector("#places-lived").appendChild(placesLivedPlace);
    document.querySelector("#places-lived").appendChild(placesLivedLength);
});



