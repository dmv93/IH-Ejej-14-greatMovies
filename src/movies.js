// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let arr = [];
    moviesArray.map(function (param) {
        arr.push(param.director);
    })
    const director = new Set(arr);
    let result = [...director];
    return result;
    //console.log(arr);
}
console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result;
    let genero = [];
    result = moviesArray.filter(director => director.director === "Steven Spielberg");
    //console.log(result.length)
    for (let i = 0; i < result.length; i++) {
        //console.log(result[i].genre);
        for (let j = 0; j < result[i].genre.length; j++) {
            if (result[i].genre.includes("Drama")) {
                //console.log(result[i]);
                genero.push(result[i]);
            }
        }
    }
    const director = new Set(genero);
    let resultado = [...director];
    //console.log(genero);
    //console.log(result[0].genre);
    return resultado;
}
console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let arr = [];
    moviesArray.map(function (params) {
        arr.push(params.score);
        //console.log(arr);
    })
    let total = 0;
    let cont;
    arr.forEach(function (number) {
        total += number;
    })
    cont = total / arr.length;
    if (cont.length = 0) {
        return 0
    }
    return cont;
}
console.log("Average movies score is " + scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let result = [];
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i].genre.includes("Drama")) {
            result.push(moviesArray[i]);
        }
    }
    let media = [];
    result.map(function (params) {
        media.push(params.score);
    })
    let total = 0;
    let cont;
    media.forEach(function (number) {
        total += number;
    })
    cont = total / media.length;
    return cont
}
console.log(`Average drama movies is ` + dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let arr = [];
    moviesArray.map(function (param) {
        arr.push(param);
    })
    arr.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })
    return arr;
}
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let arr = [];
    moviesArray.map(function (param) {
        arr.push(param);
    });
    //arr.title.sort();
    for (let i = 0; i < arr.length; i++) {
        arr.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });   
    }
    if (arr.length < 20) {
        return arr;
    }
    const top20 = arr.splice(0, 20);
    return top20;
}
console.table(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
