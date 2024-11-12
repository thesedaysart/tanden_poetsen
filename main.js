let today = document.getElementById("today");
const theDate = new Date();
const formatter = new Intl.DateTimeFormat('nl-NL');
const formattedDate = formatter.format(theDate);
let names = ["Arthur", "Louise", "Olivier"];


today.innerHTML =  "De datum van vandaag is: <span>" + formattedDate + "</span>";

function getDailyRotatedNames() {    
    
    // Calculate an index based on the day of the year
    const dayOfYear = Math.floor((theDate - new Date(theDate.getFullYear(), 0, 0)) / 86400000);
    
    // Rotate the names list by the calculated index
    const rotationIndex = dayOfYear % names.length;
    const firstPart = names.slice(rotationIndex);
    const secondPart = names.slice(0, rotationIndex);
    const rotatedNames = firstPart.concat(secondPart);

    let listItems = '';
    for (var i = 0; i < rotatedNames.length; i++) {
        listItems += '<li>' + rotatedNames[i] + '</li>';
    }
    
    return  listItems;

}

// console.log(getDailyRotatedNames());

let listOfNames = document.getElementById('todayOrder');
listOfNames.innerHTML = getDailyRotatedNames();

