$(document).ready(function(event) {
  $("#language-survey").submit(function(event) {
    const favoriteClass = $("input:radio[name=favorite-class]:checked").val();
    const favoriteAnimal = $("input:radio[name=favorite-animal]:checked").val();
    const favoriteGod = $("input:radio[name=favorite-god]:checked").val();
    const favoriteCondiment = $("input:radio[name=favorite-condiment]:checked").val();
    const favoriteColor = $("input:radio[name=favorite-color]:checked").val();
    alert(favoriteClass);
    alert(favoriteAnimal);
    alert(favoriteGod);
    alert(favoriteCondiment);
    alert(favoriteColor);
    event.preventDefault();
  });
});