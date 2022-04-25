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

//STEP 3
        // let movies = new Array(5);
        // movies[0] = 'You`ve Got Mail';
        // movies[1] = 'Notting Hill';
        // movies[2] = 'When Harry Met Sally';
        // movies[3] ='Legally blonde';
        // movies[4] = 'Aladdin';
        // movies.splice(2, 0, "Lion KIng") ;
        // console.log(movies.length);

//STEP 4

        // let movies = [];
        // movies[0] = 'You`ve Got Mail';
        // movies[1] = 'Notting Hill';
        // movies[2] = 'When Harry Met Sally';
        // movies[3] ='Legally blonde';
        // movies[4] = 'Aladdin';
        // delete movies[0];
        // console.log(movies);

//STEP 5

        //  Array.prototype = () => {};
        //  let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
       
        //    for(let i in movies) {
        //    console.log(movies[i]);
        // }
                                //// more traditional way
                                //// let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
                            
                                //// for(let i = 0; i < movies.length; i++) {
                                ////     console.log(movies[i]);
                                //// }
        
//STEP 6
        //  Array.prototype  = () => {};
        //  let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
       
        //     for(let i of movies) {
        //     console.log(i);
        // }
//STEP 7
        // Array.prototype = () => {};
        // let movies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        // movies.sort();
        //    for(let i of movies) {  
        //    console.log(i);
        //    }
          
//STEP 8
        // Array.prototype = () => {};
        //  let fMovies = ['Movies i like:','You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws','',''];
        //  let leastFavMovies = ['Movies I regret watching:','','Anaconda','The Exorcist','Friday the Thriteen']
        //  let moviesCombo = fMovies.concat(leastFavMovies);
        //    for(let i in moviesCombo) {
        //    console.log(moviesCombo[i]);
        // }

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
       
//STEP 12  about slice() and concat()
        //  let fMovies = ['You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws'];
        // let leastFavMovies = ['Anaconda','The Exorcist','Friday the Thriteen']
        
        // let movies = fMovies.concat(leastFavMovies);
        // movies= movies.slice(7, 10);
        // console.log(movies);
        // movies = movies.concat('You`ve Got Mail','Notting Hill','When Harry Met Sally','Legally blonde','Aladdin','King Kong','Jaws' );
        
        // console.log(movies);

        

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
var items = [ 3, 5, 7, 112,35];
var max = Math.max.apply(null, items);
console.log(max);