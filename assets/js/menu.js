var characters = document.getElementById('form').getElementsByTagName('img') ;
var username = document.getElementById('username') ;
var errors = document.getElementById('errors').getElementsByTagName('ul')[0] ;
var charactersInput = document.getElementsByName('character');
var form = document.getElementsByTagName('form')[0] ;
var newgameDiv = document.getElementById('new-game');
var newgameButton = document.getElementById('new-game-button') ;
var highscoresDiv = document.getElementById('high-scores');
var highscoresButton = document.getElementById('high-scores-button') ;


// setting animation for the new game menu
newgameButton.addEventListener('click',function(e){
  if(highscoresDiv.style.visibility == "visible"){
    highscoresDiv.style.visibility = "hidden" ;
    highscoresDiv.style.left = "-50%";
  }
  newgameDiv.style.visibility = "visible" ;
  newgameDiv.style.left = "25%" ;
});

//
highscoresButton.addEventListener('click',function(e){
  if(newgameDiv.style.visibility == "visible"){
    newgameDiv.style.visibility = "hidden" ;
    newgameDiv.style.left = "-50%";
  }
  highscoresDiv.style.visibility = "visible" ;
  highscoresDiv.style.left = "25%" ;
});

// event listeners for characters in the new game menu
for( i = 0 ; i < characters.length ; i++ ){
  characters[i].addEventListener('click',function(e){
    for( j = 0 ; j < characters.length ; j++  ){
      characters[j].style.border = "none" ;
      console.log(characters[j].style.border);
    }
    e.target.parentElement.getElementsByTagName('input')[0].checked=true;
    e.target.style.border = "5px solid blue";
  });
}
// Form Validation
form.addEventListener('submit',function(e){
  var validform = true;
  errors.innerHTML = "" ;
  if(!username.value)
  {
    errors.innerHTML += "<li>Name field is required!</li>" ;
    validform = false ;
  }
  if(!(charactersInput[0].checked || charactersInput[1].checked)){
    errors.innerHTML += "<li>Please select a character !</li>" ;
    validform = false ;
  }
  if(!validform){
        e.preventDefault() ;
  }else{
    // Hiding the menu if the form is valid
    // and Initializing the game 
    document.getElementById('menu-div').style.zindex = "-9999" ;
    document.getElementById('menu-div').style.visibility = 'hidden' ;
    document.getElementById('menu-div').style.left= "-999px" ;
    ZOMBIES.init() ;
    console.log('game init ') ;
    e.preventDefault() ;

  }

});
