//STEP 1
        // let movieNames = ['You`ve Got Mail', 'Notting Hill', 'When Harry Met Sally', 'Legally blonde', 'Aladdin'];
        // console.log(movieNames[1]);				

//STEP 2
        // let movies = new Array(5);
        // movies[0] = 'You`ve Got Mail';
        // movies[1] = 'Notting Hill';
        // movies[2] = 'When Harry Met Sally';
        // movies[3] ='Legally blonde';
        // movies[4] = 'Aladdin';
        // console.log(movies[0]);

//STEP 3  slice()
        // let movies = new Array(5);
        // movies[0] = 'You`ve Got Mail';
        // movies[1] = 'Notting Hill';
        // movies[2] = 'When Harry Met Sally';
        // movies[3] ='Legally blonde';
        // movies[4] = 'Aladdin';
        // movies.splice(2, 0, "Lion KIng") ;
        // //console.log(movies);
        // console.log(movies.length);


//STEP 4  shift()

        // let movies = [];
        // movies[0] = 'You`ve Got Mail';
        // movies[1] = 'Notting Hill';
        // movies[2] = 'When Harry Met Sally';
        // movies[3] ='Legally blonde';
        // movies[4] = 'Aladdin';
        // movies.shift();
        // console.log(movies);

//STEP 5  for/in loop

        //  Array.prototype = () => {};
        //  let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
       
        //    for(let i in movies) {
        //    console.log(movies[i]);
        // }
        // // more traditional way
        // // let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        
        // // for(let i = 0; i < movies.length; i++) {
        // //     console.log(movies[i]);
        // // }

//STEP 6 for/of loop
        //  Array.prototype  = () => {};
        //  let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
       
        //     for(let i of movies) {
        //     console.log(i);
        // }
//STEP 7  sorted array
        // Array.prototype = () => {};
        // let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        // movies.sort();
        //    for(let i of movies) {  
        //    console.log(i);
        //    }
          
//STEP 8
        //  let fMovies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        //  let leastFavMovies = ['Anaconda','The Exorcist','Friday the Thriteen']
        //  console.log("\n\n\Movies I like: \n\n\n");
        //  fMovies.forEach((movie) => {
        //    console.log(movie);
        // });
        // console.log("\n\n\nMovies I regret watching: \n\n\n");
        //   leastFavMovies.forEach((movie)=>{
        //    console.log(movie);
        //   });

//STEP 9
       
        //  let fMovies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        //  let leastFavMovies = ['Anaconda','The Exorcist','Friday the Thriteen']
        //  let movies = fMovies.concat(leastFavMovies);
        //    console.log(movies);
        //    movies.reverse();
        //QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ   === I have question. reverse() means the order reverse? in this case,  we need to get the alphabetical reverse? or concat order reverse?
          

//STEP 10
        // let fMovies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        // let leastFavMovies = ['Anaconda','The Exorcist','Friday the Thriteen']
        // let movies = fMovies.concat(leastFavMovies);
        //    console.log(movies);
        //    movies.reverse();
        // let lastMovie = movies[movies.length - 1];
        //    console.log(lastMovie);

//STEP 11    about shift..
        // let fMovies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        // let leastFavMovies = ['Anaconda','The Exorcist','Friday the Thriteen']
        // let movies = fMovies.concat(leastFavMovies);
        // firstMovies = movies.shift()
        // console.log(firstMovies);
       
//STEP 12  using splice
        // let fMovies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        // let leastFavMovies = ['Anaconda','The Exorcist','Friday the Thriteen']
        // let movies = fMovies.concat(leastFavMovies);
        //         console.log(movies);
        //         movies.reverse();
        // movies.splice(0,4);
        

        

//STEP 13   Two-Dimensional Arrays

        //  let movies= [['You`ve Got Mail',1],['Notting Hill',2],['When Harry Met Sally',3],['Legally blonde',4],['Aladdin',5]];
        //  for (let i = 0 ; i < movies.length; i++){
        //      console.log(`${movies[i][0]} ${movies[i][1]}`);
        //  }

//STEP 14   function
        // function showEmployee(employees) {
        //     console.log("Employees:\n\n");
        //     employees.forEach((employees) => {
        //         console.log(employees.toUpperCase());
        //     });
        // }

        // let employees = ['Zak','Jessica','Mark','Fred','Sally'];
        // showEmployee(employees);


//STEP 15

    //    function filterNull(arr) {
    //        let filters = [false,null,0,''];
    //        var result = [];
    //        arr.forEach(function (value) {
    //            if (filters.includes(value) === false) {
    //                result.push(value);
    //            }
    //        }); 
    //        return result;
    //    }
    //     let values = filterNull([58, '', 'abcd', true, null, false, 0]);
    //     console.log(values);

//STEP 16Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.

// function randomArray(items){
//     return items[Math.floor(Math.random()*items.length)];
// }
// var items = [123,234,345,456,456,1,4,6,7,44]
// console.log(randomArray(items));


//STEP 17
// var items = [ 3, 5, 7, 112,35];
// var max = Math.max.apply(null, items);
// console.log(max);