const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
  complain: function (){
    console.log("Meow!");
  }
};


// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.className = "subheading";


// Question 5

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++){
  paragraph[i].style.color = "red";
};


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7

function nameLogger(list){
  for ( let i = 0; i < list.length; i++){
    console.log(list[i].name);
  };
};

nameLogger(cats);

// Question 8

const catContainer = document.querySelector(".cat-container");

function createCats (cats){

  let newHTML = "";

  for (let i = 0; i < cats.length; i++){
    let age = "unknown";

    if(cats[i].age){
      age = cats[i].age;
    };

    newHTML += `<div>
                  <h5>${cats[i].name}</h5>
                  <p>Age: ${age}</p>
                </div>`;
  };

  return newHTML;
}

catContainer.innerHTML = createCats(cats);