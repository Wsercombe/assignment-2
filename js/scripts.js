

function processAnswers(favoriteClass, favoriteAnimal, favoriteGod, favoriteCondiment, favoriteColor) {
  let python = 0;
  let cpp = 0;
  let css = 0;
  let ruby = 0;
  if (favoriteClass == "Science"){
    python +=1;
  } else if (favoriteClass == "Math") {
    ruby +=1;
  } else if (favoriteClass == "History") {
    cpp += 1;
  } else if (favoriteClass == "Art") {
    css += 1;
  }
    alert ("ANSWER WAS " + favoriteClass);
    alert("Python score: " + python);
    alert("CSS score: " + css);
    alert("Ruby score: " + ruby);
    alert("C++ score: " + cpp);

  if (favoriteAnimal == "Snake") {
    python += 1;
  } else if (favoriteAnimal == "Turtle") {
    cpp += 1;
  } else if (favoriteAnimal == "Cheetah") {
    css +=1;
  } else if (favoriteAnimal == "Lobster") {
    ruby += 1;
  }

    alert ("ANSWER WAS " + favoriteAnimal);
    alert("Python score: " + python);
    alert("CSS score: " + css);
    alert("Ruby score: " + ruby);
    alert("C++ score: " + cpp);

  if (favoriteGod == "Zeus") {
    cpp += 1;
  } else if (favoriteGod == "Ares") {
    ruby+= 1;
  } else if (favoriteGod == "Athena") {
    python += 1;
  } else if (favoriteGod === "Dionysus") {
    css += 1;
  }

    alert ("ANSWER WAS " + favoriteGod);
    alert("Python score: " + python);
    alert("CSS score: " + css);
    alert("Ruby score: " + ruby);
    alert("C++ score: " + cpp);

  if (favoriteCondiment === "Mayonnaise") {
    css += 1;
  } else if (favoriteCondiment === "Ketchup") {
    ruby += 1;
  } else if (favoriteCondiment === "Mustard") {
    cpp += 1;
  } else if (favoriteCondiment === "Python Sauce") {
    python += 1000; // got to love the python sauce
  }

    alert ("ANSWER WAS " + favoriteCondiment);
    alert("Python score: " + python);
    alert("CSS score: " + css);
    alert("Ruby score: " + ruby);
    alert("C++ score: " + cpp);
    
  if (favoriteColor === "Green") {
    python += 1;
  } else if (favoriteColor === "Red") {
    ruby += 1;
  } else if (favoriteColor === "Rainbow") {
    css += 1000; // cheater
  } else if (favoriteColor === "Black") {
    cpp += 1;
  }
    alert ("ANSWER WAS " + favoriteColor);
    alert("Python score: " + python);
    alert("CSS score: " + css);
    alert("Ruby score: " + ruby);
    alert("C++ score: " + cpp);

}




$(document).ready(function(event) {
  $("#language-survey").submit(function(event) {
    const favoriteClass = $("input:radio[name=favorite-class]:checked").val();
    const favoriteAnimal = $("input:radio[name=favorite-animal]:checked").val();
    const favoriteGod = $("input:radio[name=favorite-god]:checked").val();
    const favoriteCondiment = $("input:radio[name=favorite-condiment]:checked").val();
    const favoriteColor = $("input:radio[name=favorite-color]:checked").val();
    processAnswers(favoriteClass, favoriteAnimal, favoriteGod, favoriteCondiment, favoriteColor);
    event.preventDefault();
  });
});