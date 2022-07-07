document.querySelector("button").addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector("h2").textContent = data.drinks[0].strDrink
            document.querySelector("img").src = data.drinks[0].strDrinkThumb
            document.querySelector(".instructions").textContent = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log("error")
        })
}