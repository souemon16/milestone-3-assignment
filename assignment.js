//First Problem Solving Function Start

function feetToMile(feet) {
    let result = (feet * 0.0001893939393939394);
    if (feet == 0) {
        return "You cannot convert this to mile which has no value!";
    }
    return result;
}

//First Problem Solved






//Second Problem Solving Function Starts

function woodCalculator(chair, table, bed) {
    let woodForChair = chair * 1;
    let woodForTable = table * 3;
    let woodForBed = bed * 5;

    if (chair < 0 || table < 0 || bed < 0) {
        return "You cannot find a Psychiatry Doctor in woodCalculator website. Please Check Your Input Number For Your Resources."
    }

    let totalWoodNeeded = woodForChair + woodForTable + woodForBed;
    return totalWoodNeeded;
}

//Second Problem Solved






// Third Problem Solving Function Starts

function brickCalculator(floor) {

    //declaring variables
    let perFloorHeight = 0;
    const perFeetBrickNeeded = 1000;

    //set up condition
    if (floor < 0) {
        return "How can we calculate brick if there is no building. Please Enter Valid Floor Number"
    } else if (floor <= 10) {
        perFloorHeight = 15;
        return brickForFirstTenFloor = (perFloorHeight * floor) * perFeetBrickNeeded;
    } else if (floor <= 20) {
        perFloorHeight = 12;
        return brickForEleventhToTwentyFloor = ((perFloorHeight * ((floor - 10) )) + (10 * 15)) * perFeetBrickNeeded;
    } else if(floor > 20) {
        perFloorHeight = 10;
        return brickForRestOfTheFloor = ((perFloorHeight * (floor - 20)) + ((10 * 12) + (10 * 15))) * perFeetBrickNeeded;
    }

    let totalBrickNeeded = brickForFirstTenFloor + brickForEleventhToTwentyFloor + brickForRestOfTheFloor;
    return totalBrickNeeded;
}

//Third Problem Solved









//Fourth Problem Solving Function Starts

function tinyFriend(friendsName) {
    let smallest = friendsName[0];
    if (friendsName.length > 0) {
        for (let i = 0; i < friendsName.length; i++) {
            if (typeof friendsName[i] == "string" && friendsName[i].length < smallest.length) {
                smallest = friendsName[i];
            }
            
        }
    }
    return smallest;
}

//Fourth Problem Solved
