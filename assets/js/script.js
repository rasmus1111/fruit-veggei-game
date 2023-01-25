// Declare two arrays, one for fruits and one for vegetables
const  fruits = ["Acai", "Durian", "Mangosteen", "Rambutan", "Kiwano", "Gooseberry", "Lychee", "Persimmon", "Pomegranate", "Soursop", "Apple", "Banana", "Cherry", "Grape", "Orange"];
const  vegetables = ["Artichoke", "Bok Choy", "Celeriac", "Eggplant", "Fennel", "Jicama", "Kohlrabi", "Leeks", "Nopales", "Okra", "Parsnips", "Radicchio", "Scallions", "Turnips", "Carrots","Cauliflower"]



// function to randomly display a fruit or vegetable
function startGame(){
    if(Math.random() > 0.5)
    displayFruit();
    else
    displayVegetable();
  }



// function to display a random fruit from the fruits array
function displayFruit(){
    displayedItem = 'fruit'; 
    var index = Math.floor(Math.random()*fruits.length); 
    document.getElementById("quiz-question").innerHTML = fruits[index]; 
  }
  
// function to display a random vegetable from the vegetables array
  function displayVegetable(){
    displayedItem = 'vegie'; 
    var index = Math.floor(Math.random()*vegetables.length); 
    document.getElementById("quiz-question").innerHTML = vegetables[index]; 
  }

  


 function checkVictory(){
   
}


 function checkLoss(){
  
}


 function resetScore(){
     
    
}


 function resetMessage(){
 
 }


function checkAnswer(){
 
}



window.onload = startGame;


