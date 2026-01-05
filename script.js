function coffeeQuiz() {
    var age = prompt("На колко години сте?");
    
    if (age === null || age === "") {
        alert("Не сте въвели възраст.");
        return;
    }

    var coffee = prompt("Какво кафе предпочитате? (еспресо / капучино / лате)");

    if (coffee === null) {
        alert("Не сте въвели вид кафе.");
        return;
    }

    if (age < 18) {
        alert("Препоръчваме безкофеиново кафе ");
    } else {
        alert(
            "Благодарим! \n" +
            "Възраст: " + age + "\n" +
            "Любимо кафе: " + coffee + "\n" +
            "Заповядайте в KraevCoffee!"
        );
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Моля, попълнете всички полета.");
        return false;
    }

    alert("Съобщението е изпратено успешно!");
    return true;
}
