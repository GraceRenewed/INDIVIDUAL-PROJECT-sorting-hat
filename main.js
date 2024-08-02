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

// const schoolAssgn = document.querySelector("#schoolAssgn")

//when the introButton(Let the Sorting Begin) is clicked
//the Name entry field and submit(Sort Now)should appear
introButton.addEventListener("click", () => {
  const nameEntry = document.getElementById("nameEntry");
  nameEntry.style.display = "block";
  console.log("introButton test");
});

const schoolsOnDom = (Houses) => {
  let domString ="";

  Houses.forEach((item) => {
    domString += `<div class="card" style="width: 14rem;" >
      <img src=${item.imageUrl} class="card-img-top" alt=${item.houseAssgn}>
      <div class="card-body">
      <h5 class="house-title">${item.houseAssgn}</h5>
        <p class="welcome-text">Welcome, ${item.name} your path has been chosen!</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
      </div>`;
      })
// //Calling the function and telling it to put the information in the HTML id and placing it on the DOM
      // renderToDom("#hats", domString)
    }
   
  //Function that pulls a random house from the Houses array
    function sorting_Houses () {
      const randomHouse = Math.floor(Math.random() * Houses.length);
      return Houses [randomHouse]
    }
  
  let randomHouse = sorting_Houses(Houses);
  console.log(randomHouse)  

  renderToDom("#hats", "randomHouse"  + JSON.stringify(randomHouse))

const startApp = () => {
  
  // schoolsOnDom(Houses);
}

startApp();

//Trying to combine the function and the array did not work, random function failed to work
  // let randomHouse = [  
  //   function sorting_Houses () {
  //     const randomHouse = Math.floor(Math.random() * Houses.length);
  //     return Houses [randomHouse]
  //   }
  // ]

// form.addEventListener("submit", function() { 
//   let randomHouse = Math.floor(Math.random() * Houses.length);
//   schoolAssgn.innerHTML = Houses[randomHouse]
// })

// const sortHouses = (Houses) => {
//   let randomHouse = Math.floor(Math.random() * Houses.length);
//   randomHouse.push(newHouses);
//   renderToDom("hats", newHouses)
// }


// //A function that takes the information from the Houses array and
// //enters it into bootstrap html code below and puts it on the DOM
// const  studentsOnDom = (randomHouse) => {
//   let domString ="";

//   randomHouse => {
//     domString += `<div class="card" style="width: 14rem;" >
//       <img src=${item.imageUrl} class="card-img-top" alt=${item.houseAssgn}>
//       <div class="card-body">
//       <h5 class="house-title">${item.houseAssgn}</h5>
//         <p class="welcome-text">Welcome, ${item.name} your path has been chosen!</p>
 
//      <a href="#" class="btn btn-primary">Expel</a>
//     </div>
//       </div>`;
//       }
// //Calling the function and telling it to put the information in the HTML id and placing it on the DOM
//       renderToDom("#hats", domString)
//     }
