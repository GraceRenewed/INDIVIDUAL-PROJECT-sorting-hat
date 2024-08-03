const Houses = [
  {
    id: 1,
    imageUrl: "https://thumbnail.imgbin.com/23/15/25/imgbin-gryffindor-fat-friar-the-bloody-baron-professor-filius-flitwick-nearly-headless-nick-harry-potter-lion-portrait-x5Z4azQY2TEZUfGZXqWAZKcFa_t.jpg",
    name: "#name",
    houseAssgn: "Gryffindor"
  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/236x/1f/52/5e/1f525e707a27fe891f2b689131a5e0f7.jpg",
    name: "#name",
    houseAssgn: "Hufflepuff"

  },
  {
    id: 3,
    imageUrl: "https://www.pngmart.com/files/12/Ravenclaw-House-PNG-Picture.png",
    name: "#name",
    houseAssgn: "Ravenclaw"
  },
  {
    id: 4,
    imageUrl: "https://i.pinimg.com/236x/9b/cb/24/9bcb24c897c823f80401654dc529fa44.jpg",
    name: "#name",
    houseAssgn: "Slytherin"
  }
]

//Utility funciton that puts html on the DOM by inserting information in the location specified by the divID 
const renderToDom = (divId, htmlToRender) => {
  //Gives a name to use in JS to a specific divId in html
  const selectedDiv = document.querySelector(divId);
  //tells JS to insert that information into the html document that will then render to the DOM
  selectedDiv.innerHTML =htmlToRender;
}


const introButton = document.querySelector("#introButton");
const form = document.querySelector("#form");
const schoolAssgn =document.querySelector("#schoolAssgn")


//when the introButton(Let the Sorting Begin) is clicked
//the Name entry field and submit(Sort Now)should appear
introButton.addEventListener("click", () => {
  const nameEntry = document.getElementById("nameEntry");
  nameEntry.style.display = "block";
  console.log("introButton test");
});

  //Function that pulls a random house from the Houses array, trying to combine it with the schoolOnDom array so maybe I can get the random card to display on the DOM, no luck yet, it seems to be picking random Houses and showing the id only. Finally got it to do the same thing as the two seperate codes, so I combined them!!! Still not correct but progress:)
    function sorting_Houses ()  {
      
      let domString = "";
      const randomHouse = Math.floor(Math.random() * Houses.length);
          Houses.forEach((Houses) => {
            domString += `<div class="card" style="width: 14rem;" >
              <img src=${Houses.imageUrl} class="card-img-top" alt=${Houses.houseAssgn}>
              <div class="card-body">
              <h5 class="house-title">${Houses.houseAssgn}</h5>
                <p class="welcome-text">Welcome, ${Houses.name} your path has been chosen!</p>
              <a href="#" class="btn btn-primary">Expel</a>
            </div>
              </div>`;
              }
             )
              return Houses [randomHouse];
              //renderToDom("#hats", randomHouse)//returns nothing, needs return Houses [randomHouse] above it, tried sorting_Houses(and w/o), Houses does not like statement
              
    }
    //renderToDom("#hats", sorting_Houses()) //returns object Object on DOM
    const result = sorting_Houses();
  let randomH = result.randomHouse 
  let newHouse = result.sorting_Houses
  let DOM = result.domString;
  
  console.log(sorting_Houses()); //works if return on function says Houses[randomHouse]

  //Still no luck presenting random card on DOM:(

  // console.log(DOM);  undefined
  //console.log(newHouse) undefined
  //renderToDom("#hats", randomH) returns undefined
  //renderToDom("#hats", domString) says not defined in console
  //renderToDom("#hats", DOM) prints undefined on DOM



   // // These two work in the fact that they pull a random house and place them on the DOM and console log them but it is not in card format, I did try stringify but of course that just makes a string
  // function sorting_Houses () {
  //   const randomHouse = Math.floor(Math.random() * Houses.length);
  //   return Houses [randomHouse]
  // }

  // let randomHouse = sorting_Houses(Houses);
  // console.log(randomHouse) 


//Trying to combine the function and the array did not work, random function failed to work
  // let randomHouse = [  
  //   function sorting_Houses () {
  //     const randomHouse = Math.floor(Math.random() * Houses.length);
  //     return Houses [randomHouse]
  //   }
  // ]


//Tried this one and it did not work
// form.addEventListener("submit", function() { 
//   let randomHouse = Math.floor(Math.random() * Houses.length);
//   schoolAssgn.innerHTML = Houses[randomHouse]
// })

//Also tried this 
// const sortHouses = (Houses) => {
//   let randomHouse = Math.floor(Math.random() * Houses.length);
//   randomHouse.push(newHouses);
//   renderToDom("hats", newHouses)
// }


  //A function that takes the information from the Houses array and
// //enters it into bootstrap html code below and puts it on the DOM
// const schoolsOnDom = (Houses) => {
//   let domString ="";

//   Houses.forEach((Houses) => {
//     domString += `<div class="card" style="width: 14rem;" >
//       <img src=${Houses.imageUrl} class="card-img-top" alt=${Houses.houseAssgn}>
//       <div class="card-body">
//       <h5 class="house-title">${Houses.houseAssgn}</h5>
//         <p class="welcome-text">Welcome, ${Houses.name} your path has been chosen!</p>
//       <a href="#" class="btn btn-primary">Expel</a>
//     </div>
//       </div>`;
//       })
// //Calling the function and telling it to put the information in the HTML id and placing it on the DOM
//       renderToDom("#hats", domString)
//     }
