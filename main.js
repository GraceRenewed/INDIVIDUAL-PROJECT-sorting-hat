const students = [
   {
    id: 1,
    student: "Luna",
    house: "Hufflepuff",
   },
  {
    id: 2,
    student: "Ron",
    house: "Gryffindor",
  },
  {
    id: 3,
    student: "Hermonie",
    house: "Gryffindor",
  },
  {
    id: 4,
    student: "Harry",
    house: "Gryffindor",
  },
]

const Houses = [
  {
    id: 1,
    imageUrl: "https://thumbnail.imgbin.com/23/15/25/imgbin-gryffindor-fat-friar-the-bloody-baron-professor-filius-flitwick-nearly-headless-nick-harry-potter-lion-portrait-x5Z4azQY2TEZUfGZXqWAZKcFa_t.jpg",
    name: "student",
    houseAssgn: "Gryffindor"
  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/236x/1f/52/5e/1f525e707a27fe891f2b689131a5e0f7.jpg",
    name: "student",
    houseAssgn: "Hufflepuff"

  },
  {
    id: 3,
    imageUrl: "https://www.pngmart.com/files/12/Ravenclaw-House-PNG-Picture.png",
    name: "student",
    houseAssgn: "Ravenclaw"
  },
  {
    id: 4,
    imageUrl: "https://i.pinimg.com/236x/9b/cb/24/9bcb24c897c823f80401654dc529fa44.jpg",
    name: "student",
    houseAssgn: "Slytherin"
  }
]

//Utility funciton that puts html on the DOM by inserting
// information in the location specified by the divID 
const renderToDom = (divId, htmlToRender) => {
  //Gives a name to use in JS to a specific divId in html
  const selectedDiv = document.querySelector(divId);
  //tells JS to insert that information into the html document that will then render to the DOM
  selectedDiv.innerHTML = htmlToRender;
}

const cardsOnDom = (Houses) => {
  let domString = "";
  //The for loop allows us to go through each pet in the array and pull out data within them choosing which data will be displayed on the internet page using the arrow function above
  for (const house of Houses) {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
       <h3 class="student-name">${house.name}</h3>
      <button class="btn btn-danger" id="delete--${house.id}">Expel</button>
    </div>
      <div>
        <h3 class=${house.name}></h3>
    </div>`; 
  }

  //Places all the information from the app and puts it on the internet page
  renderToDom("#schoolAssgn", domString);
  }
  


// const introButton = document.querySelector("#introButton");
// const form = document.querySelector("#form");
// const schoolBox =document.querySelector("#schoolAssgn");


// //when the introButton(Let the Sorting Begin) is clicked
// //the Name entry field and submit(Sort Now)should appear
// introButton.addEventListener("click", () => {
//   const nameEntry = document.getElementById("nameEntry");
//   nameEntry.style.display = "block";
//   console.log("introButton test");
// });

//A function that takes the information from one of houses in the the Houses array and
//enters it into bootstrap html code below and puts it on the DOM   
// const schoolAssgn = (house) => {
//   let domString =
  
//     `<div class="card" style="width: 14rem;" >
//       <img src=${house.imageUrl} class="card-img-top" alt=${house.houseAssgn}>
//       <div class="card-body">
//       <h5 class="house-title">${house.houseAssgn}</h5>
//       <p class="welcome-text">Welcome, ${house.student} your path has been chosen!</p>
//       <a href="#" class="btn btn-primary">Expel</a>
//   </div>
//     </div>`;
  
//   renderToDom("#schoolAssgn", domString);
// }
  
  //A function that randomly selects a house from the Houses array
  //   const sorting_Houses = (Houses) => {
  //     const randomHouse = Math.floor(Math.random() * Houses.length);
  //     return Houses[randomHouse]
  //   }
  //   //This assigns the name randomHouse to the sorting_Houses function
  //   //and inserts a randomHouse into the schoolAssign function to 
  //   //render into HTML code
  //   const randomHouse = sorting_Houses(Houses);
   
  
  //  console.log(randomHouse)

  //  form.addEventListener("submit", schoolAssgn(randomHouse))

 
   
  //  const luna = document.querySelector("input");//tried this and serveral variations with and without .value(if value present says line 86 not a function)
    
  //  luna.addEventListener("click", () => {
  //  schoolAssgn();
  //  });    //tried click and submit
  // console.log(luna.addEventListener()); //of this code, returning null (next fix)
   //const inputValue = ("#student").valueOf;
   //console.log(inputValue);
   

   // store the value of the name and
   //store it to a variable, need to make it where the Houses stay once assigned
  // const createStudent = (e) => {
  //   e.preventDefault();

  //   const newStudent = {
  //     id: schoolAssgn.length + 1,
  //   }
  //  
  //   form.reset();
  // }
  const startApp = () => {
    cardsOnDom(Houses);
  }

  startApp();
  