// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let Hq = 42
    if (someValue > 42){
        return (someValue - 42)
    } else {
        return (42 - someValue)
    }
};
function distanceFromHqInFeet(someValue){
    let Hq = 42
    if (someValue > 42){
        return (someValue - 42) * 264
    } else {
        return (42 - someValue) * 264
    }
};
function distanceTravelledInFeet(start, destination){
    return (destination - start) * 264
};
function calculatesFarePrice(start, destination){
    let poop = (destination - start) * 264
    let shit = poop - 400
    
};