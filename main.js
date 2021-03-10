// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function ageToAbilities (age) {
    if(age < 16){
        return 'You can\'t drive.'
    }else if(age < 18){
        return 'You can drive but not vote.'
    }else if(age < 25){
        return 'You can vote but not rent a car.'
    }else{
        return 'You can do pretty much anything.'
    }
}

function oddIndices (numbersArray) {
    let numbersInOddIndices = [];
    for(let i = 1; i < numbersArray.length; i++){
        if(i % 2 !== 0){
            numbersInOddIndices.push(numbersArray[i]);
        }
    }
    return numbersInOddIndices;
}

function numOddValues (numbersArray) {
    let numberOfOddValues = 0;
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] % 2 !== 0){
            numberOfOddValues++;
        }
    }
    return numberOfOddValues;
}

function averageStringLength (stringsArray) {
    if(stringsArray.length === 0){
        return 0;
    }
    let total = 0;
    for(let i = 0; i < stringsArray.length; i++){
        total += stringsArray[i].length;
    }
    return total / stringsArray.length;
}

function firstPunctuationIndex (sentence) {
    const punctuations = '.?!';
    for(let i = 0; i < sentence.length; i++){
        for(let j = 0; j < punctuations.length; j++){
            if(sentence[i] === punctuations[j]){
                return i;
            }
        }
    }
    return -1;
}

function getPlace (highScores, score) {
    const ndPlace = 'nd place';
    const rdPlace = 'rd place';
    const thPlace = 'th place';
    let playerPlace = highScores.length;

    for(let i = highScores.length - 1; i >=0; i--){
        if(score > highScores[i]){
            playerPlace = i + 1;
        }
    }

    if(playerPlace > 97){
        playerPlace += 1;
    }

    playerPlace = playerPlace.toString();

    if(playerPlace.endsWith('1')){
        return playerPlace + 'st place'
    }

    if(playerPlace.endsWith('2')){
        return playerPlace + 'nd place';
    }

    if(playerPlace.endsWith('3')){
        return playerPlace + 'rd place';
    }

    return playerPlace + 'th place';
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
