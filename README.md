# IH-Ejej-14-greatMovies
Objetivo manipular array y objetos con ejej de películas


Introduction
We have just learned some useful methods, that will help us manipulate objects and arrays. In this exercise, we will practice working with these methods, and you are required to use at least one of them in each iteration.


Requirements
Fork this repo.
Clone this repo.
Practice JavaScript advanced methods (map, reduce, filter and sort to manipulate arrays).

Submission
Upon completion, run the following commands:
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
Create a Pull Request so that your TAs can check your work.

Test Your Code
This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the tests/movies.spec.js file.

To run the tests and your JavaScript code, open the SpecRunner.html file using the Live Server VSCode extension.

To see the outputs of the console.log in your JavaScript code, open the Console in the Developer Tools.


Instructions
You will work on the src/movies.js file, which is already loaded in the SpecRunner.html file.

The src/data.js file containing the array of movies is also loaded in the SpecRunner.html file.


Iteration 0: Movies array
The best way to practice is to work with real data. In the src/data.js file, you will find an array of info about the best 250 movies of all times according to IMDB Ranking that you will use to display what each iteration asks!

Here is an example of how the data is displayed:

{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score": 9.3
}
You will be digging deeper into some "facts" that this data set has. For example, we can use this data set to find which is the most popular movie, what is the average duration of the movie, the list of movies by some director, etc.

In this iteration, no action is required, but here comes your challenge: In the following iterations, you will use your JS knowledge to manipulate this data.

Remember to read each iteration description carefully before working on the solution.


Iteration 1: All directors
We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to map through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named getAllDirectors() that receives an array of movies as an argument and returns a new (mapped) array.


Bonus - Iteration 1.1: Clean the array of directors
It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (meaning, without duplicates)? Don't prioritize the bonus part now, you can come back to it when you are done with the mandatory iterations. 😉


Iteration 2: Steven Spielberg. The best?
One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.


Iteration 3: All scores average
These are the best movies based on their scores, so supposedly all of them have a remarkable score. In this iteration, we want to know the average score of all of them and display it on the console. Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

The score must be returned rounded to 2 decimals!

💡 Maybe you want to "reduce" the data to a single value. 😉


Iteration 4: Drama movies
Drama is the genre that repeats the most on our array. Apparently, people love drama! 👀

Create a dramaMoviesScore() function that receives an array as a parameter to get the average score of all drama movies! Let's see if it is better than the general average.

Again, rounded to 2 decimals!


Iteration 5: Order by year
We need to sort the movies in ascending order by their release year. This should be easy using one of the methods we have just learned. 😉 Create a function orderByYear() that receives an array as a parameter and returns a new sorted array.



If two movies have the same year, order them in alphabetical order by their title! ✔️

⚠️ Important: Your function should return a new array, containing the movies ordered by the year. Your function should not modify (mutate) the original array. You may need to do some research on how to make a "copy" or "clone" an array.


Iteration 6: Alphabetic order
Another popular way to order the movies is to sort them alphabetically using the title key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉

Create an orderAlphabetically() function, that receives an array and returns an array of the first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

⚠️ Important: Your function should return a new array, containing movie objects sorted alphabetically. Your function should not modify (mutate) the original array. You may need to do some research on how to make a "copy" or "clone" an array.


BONUS - Iteration 7: Time format
We get the info from the IMDB web page, but the duration info was saved in a format that difficult us a lot to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

Create a turnHoursToMinutes() function that receives an array as a parameter, and with some magic implemented by you - replaces the duration info of each of the movies for its equivalent in minutes. For example:
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score" :9.3
}
Should be:

{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": 142,
  "genre": ["Crime","Drama"],
  "score": 9.3
}

⚠️ Important: Your function should return a new array, containing movie objects with the duration time in minutes. Your function should not modify (mutate) the original array.


BONUS - Iteration 8: Best yearly score average
We always hear so much about classic movies, but we want to know which year has the best average score, so we can declare the BEST YEAR FOR CINEMA officially!

Go ahead and find which year have the best average score for the movies that were released in that year! Create bestYearAvg() function that receives an array of movies and gives us an answer to which year was the best year for cinema and what was its average score. The bestYearAvg() should return a string with the following structure:

The best year was <YEAR> with an average score of <RATE>





Happy coding! 💙


FAQs

I am stuck in the exercise and don't know how to solve the problem or where to start.
All of the Jasmine tests are failing and in red. Why did this happen?
How do I loop over an array using the forEach() method?
How to use the filter() array method?
How to use the map() array method?
How to use the sort() array method?
How to use the reduce() array method?
How to use the slice() array method?
I am unable to push changes to the repository. What should I do?

There are a couple of possible reasons why you may be unable to push changes to a Git repository:

You have not committed your changes: Before you can push your changes to the repository, you need to commit them using the git commit command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:
git add .
git commit -m "Your commit message"
git push
You do not have permission to push to the repository: If you have cloned the repository directly from the main Ironhack repository without making a Fork first, you do not have write access to the repository. To check which remote repository you have cloned, run the following terminal command from the project folder:
git remote -v
If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.