function clearCSS(){
  $("#python").css("display", "none");
  $("#cpp").css("display", "none");
  $("#css").css("display", "none");
  $("#ruby").css("display", "none");
  $("#answer-section").css("display", "none");
}

function findLargest(python, cpp, css, ruby) {
  // my very imperfect way of finding the largest variable
  // ** does not handle ties **
  let largestNum = python;
  let largestVar = "Python";
  if (cpp > largestNum) {
    largestNum = cpp;
    largestVar = "C++";
  } 
  if (css > largestNum) {
    largestNum = css;
    largestVar = "CSS";
  }
  if (ruby > largestNum) {
    largestNum = ruby;
    largestVar = "Ruby";
  }
  return largestVar;
}

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

  if (favoriteAnimal == "Snake") {
    python += 1;
  } else if (favoriteAnimal == "Turtle") {
    cpp += 1;
  } else if (favoriteAnimal == "Cheetah") {
    css +=1;
  } else if (favoriteAnimal == "Lobster") {
    ruby += 1;
  }


  if (favoriteGod == "Zeus") {
    cpp += 1;
  } else if (favoriteGod == "Ares") {
    ruby+= 1;
  } else if (favoriteGod == "Athena") {
    python += 1;
  } else if (favoriteGod === "Dionysus") {
    css += 1;
  }

  if (favoriteCondiment === "Mayonnaise") {
    css += 1;
  } else if (favoriteCondiment === "Ketchup") {
    ruby += 1;
  } else if (favoriteCondiment === "Mustard") {
    cpp += 1;
  } else if (favoriteCondiment === "Python Sauce") {
    python += 1000; // got to love the python sauce
  }


  if (favoriteColor === "Green") {
    python += 1;
  } else if (favoriteColor === "Red") {
    ruby += 1;
  } else if (favoriteColor === "Rainbow") {
    css += 1000; // cheater
  } else if (favoriteColor === "Black") {
    cpp += 1;
  }
    return findLargest(python, cpp, css, ruby);
}




$(document).ready(function(event) {
  $("#language-survey").submit(function(event) {
    const favoriteClass = $("input:radio[name=favorite-class]:checked").val();
    const favoriteAnimal = $("input:radio[name=favorite-animal]:checked").val();
    const favoriteGod = $("input:radio[name=favorite-god]:checked").val();
    const favoriteCondiment = $("input:radio[name=favorite-condiment]:checked").val();
    const favoriteColor = $("input:radio[name=favorite-color]:checked").val();
    const finalLanguage = processAnswers(favoriteClass, favoriteAnimal, favoriteGod, favoriteCondiment, favoriteColor);
    if (favoriteClass && favoriteAnimal && favoriteGod && favoriteCondiment && favoriteColor) {
      clearCSS();
      $("#answer-section").show();
      if (finalLanguage === "Python"){
        $("#python").show();
      } else if (finalLanguage === "C++"){
        $("#cpp").show();
      } else if (finalLanguage === "Ruby"){
        $("#ruby").show();
      } else if (finalLanguage === "CSS") {
        $("#css").show();
      }
      event.preventDefault();
    } else {
      alert("Please answer all of the questions.");
    }
  });    
});