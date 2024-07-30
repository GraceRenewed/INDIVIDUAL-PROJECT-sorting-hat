const Houses = [
  {
    id: 1,
    imageUrl: "https://thumbnail.imgbin.com/23/15/25/imgbin-gryffindor-fat-friar-the-bloody-baron-professor-filius-flitwick-nearly-headless-nick-harry-potter-lion-portrait-x5Z4azQY2TEZUfGZXqWAZKcFa_t.jpg",
    studentName: "random",
    houseAssgn: "Gryffindor"
  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/236x/1f/52/5e/1f525e707a27fe891f2b689131a5e0f7.jpg",
    studentName: "",
    houseAssgn: "Hufflepuff"

  },
  {
    id: 3,
    imageUrl: "https://www.pngmart.com/files/12/Ravenclaw-House-PNG-Picture.png",
    studentName: "",
    houseAssgn: "Ravenclaw"
  },
  {
    id: 4,
    imageUrl: "https://i.pinimg.com/236x/9b/cb/24/9bcb24c897c823f80401654dc529fa44.jpg",
    studentName: "",
    houseAssgn: "Slytherin"
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML =htmlToRender;
}


const introButton = document.querySelector("#introButton");
const sortButton = document.querySelector("#sortButton");
const schoolAssgn = document.querySelector("#schoolAssgn");

//when the introButton(Let the Sorting Begin) is clicked
//the Name entry field and introButton(Sort Now)should appear
introButton.addEventListener("click", () => {
  const nameEntry = document.getElementById("nameEntry");
  nameEntry.style.display = "block";
  console.log("introButton test");
});


//When the sortButton(Sort Now) is clicked 
//a random house is selected
sortButton.addEventListener("click", () => {
  function sorting_Houses () {
    console.log(Houses[(Math.floor(Math.random() * Houses.length))])
  }
  sorting_Houses()
})

schoolAssgn = [
  ""
]
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
 //}
