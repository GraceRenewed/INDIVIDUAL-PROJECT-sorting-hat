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

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML =htmlToRender;
}


const introButton = document.querySelector("#introButton");
const sortButton = document.querySelector("#sortButton");

//when the introButton(Let the Sorting Begin) is clicked
//the Name entry field and introButton(Sort Now)should appear
introButton.addEventListener("click", () => {
  const nameEntry = document.getElementById("nameEntry");
  nameEntry.style.display = "block";
  console.log("introButton test");
});


//A function that takes the information from the Houses array and
//enters it into bootstrap html code below and puts it on the DOM
  const schoolAssgn = (Houses) => {
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
  }
//Function that picks a random house
function sorting_Houses () {
  const randomHouse = Math.floor(Math.random() * Houses.length);
  return Houses[randomHouse];
}
//When the sortButton(Sort Now) is clicked 
//a random house is selected
 sortButton.addEventListener("click", () => {
     console.log(sorting_Houses())
    });
  
    //renderToDom("#hats", sortButton.addEventListener())
    
  


const startApp = () => {
  schoolAssgn(Houses);
  sortButton
}

startApp();
//  //a function to take information that is selected or created and place it on the DOM, uses the new item Id and the text on the card
//  const renderToDom = (divId, cardToRender) => {
//     //creates a variable and makes it equal to the element we want to put on the DOM
//     const selectedElement=document.querySelector(divId);
//     //takes the new card and places it in the HTML file and replaces what is there to put on the DOM
//     selectedElement.innerHTML = cardToRender;
    
//  };

//  const sortBtn = () => {
//     const domString = 






//     //Calling the function and telling it to put the information in the HTML id and placing it on the DOM
//     renderToDom("#schoolAssignments", domString);
