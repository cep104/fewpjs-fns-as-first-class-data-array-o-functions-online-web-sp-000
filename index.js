function wakeDog(name, dogbreed){
    return (`Wake ${name} the ${dogbreed}`);
}

function leashDog(name, dogbreed){
    return (`Leash ${name} the ${dogbreed}`);
}

function walkToPark(name, dogbreed){
    return (`Walk to the park with ${name} the ${dogbreed}`);
}

function throwFrisbee(name, dogbreed){
    return (`Throw the frisbee for ${name} the ${dogbreed}`);
}

function walkHome(name, dogbreed){
    return (`Walk home with ${name} the ${dogbreed}`);
}

function unleashDog(name, dogbreed){
    return (`Unleash ${name} the ${dogbreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

// function exerciseDog(name, dogbreed){ 
//   return routine.map(excercise => excercise(name, dogbreed)) 
// }


function exerciseDog(dogName, dogBreed) {
    let returnArray = [];
    
    for ( let i = 0; i < routine.length; i++ ) {
        returnArray.push(routine[i](dogName, dogBreed));
    }
    return returnArray
}


// make sure to be passing in name and dogbreed
// how can we run all the events and store them in a new array?