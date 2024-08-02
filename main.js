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


//when the introButton(Let the Sorting Begin) is clicked
//the Name entry field and submit(Sort Now)should appear
introButton.addEventListener("click", () => {
  const nameEntry = document.getElementById("nameEntry");
  nameEntry.style.display = "block";
  console.log("introButton test");
});


//A function that takes the information from the Houses array and
//enters it into bootstrap html code below and puts it on the DOM
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
//Calling the function and telling it to put the information in the HTML id and placing it on the DOM
      renderToDom("#hats", domString)
    }

    //Function that picks a random house
    form.addEventListener("#submit", function(event) {
      event.preventDefault();
      const studentName =document.getElementById("#name").value
      console.log(studentName)

    })
      
      function sorting_Houses () {
      const randomHouse = Math.floor(Math.random() * Houses.length);
      return Houses [randomHouse]

    }
   
    console.log( sorting_Houses() )
//Empty array where new student cards will go

const randomHouse = [{}];
    
  console.log(randomHouse);
 
// randomHouse.push(sorting_Houses)    
  //Function that makes a new card and places it in the randomHouse array when the form is pressed  
// const newStudent = (e) => {
//     e.preventDefault();

//     //Makes a new card with the information(I think this is all the information I need for this because I want the random function to pull a card from the schoolsOnDom function, which is already styled and has the information on it, the name should populate from the name id which is assigned in the html of the form)
//     const newCard = {
//       id: assgnHouse.length + 1,
//     }
//     //Calls the sortingHouse function and puts newCard in assgnHouse array and resets form
//     sorting_Houses();
//     randomHouse.push(newCard);
//     form.reset();
//   }

// //EventListener that is activates the newStudent function
// form.submit("submit", newStudent);
