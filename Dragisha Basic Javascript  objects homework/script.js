// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs


let animal = {
    name: '',
    kind: '',
    
    speak: function(text) {
        console.log(`${this.name.trim().charAt(0).toUpperCase() + this.name.trim().slice(1).toLowerCase()} the ${this.kind.trim().toLowerCase()} says: '${text.trim().charAt(0).toUpperCase() + text.trim().slice(1)}!!!'`); // со ова, во this.name секогаш првата буква ќе е голема, а остатокот секогаш со мали, во this.kind сите со мали, а во text првата секогаш ќе биде голема
    }
};

function input() {
        animal.name = document.getElementById("name").value;
        animal.kind = document.getElementById("kind").value;
        animal.speak(document.getElementById("speak").value);

    // if (animal.name && animal.kind && animal.speak) {
        
        document.getElementById("name").value = '';
        document.getElementById("kind").value = '';
        document.getElementById("speak").value = '';

        console.log('\n');
    // }
    
    // Подобар начин да го избришам текстот во сите на крајов без document.getElementById пак да го напишам? Пробав да на овие document...value да им ставам варијалба, пример animalName = animal.name, па animalName = ''; ама не работи вака.
    
    // Исто така, дали има некој прост, убав начин да кога ќе кликнеме на копчето да не се појави ништо доколку не се сите 3 полиња пополнети(освен некој код кој го прави копчето disabled се додека не се стави текст во сите инпут полиња?)
    
    // Чепкав околу ставање проверка if (animal.name && animal.kind && animal.speak) или негативна вредност од ова со || измеѓу. Сакам едноставно да не се случи ништо со копчето ако не е пополнето со некаков текст (идеално, со вистински текст, а не invisible characters.)
}




// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML


let readBtn = document.getElementById("readBtn");
let showInfoInParagraph = document.getElementById("showInfo");

let book = {
    title: '',
    author: '',
    readingStatus: '',

    returnInfo: function() {
        if (this.readingStatus === 'read') {
            return `You have already read '${this.title.trim().charAt(0).toUpperCase() + this.title.trim().slice(1)}' by ${this.author.trim().charAt(0).toUpperCase() + this.author.trim().slice(1)}.`;
        }
        else if (this.readingStatus === 'currentlyReading') {
            return `You are currently reading '${this.title.trim().charAt(0).toUpperCase() + this.title.trim().slice(1)}' by ${this.author.trim().charAt(0).toUpperCase() + this.author.trim().slice(1)}.`;
        }
        else {
            return `You still need to read '${this.title.trim().charAt(0).toUpperCase() + this.title.trim().slice(1)}' by ${this.author.trim().charAt(0).toUpperCase() + this.author.trim().slice(1)}.`;
        }
    }
};

readBtn.addEventListener('click', function() {
    book.title = document.getElementById("bookName").value;
    book.author = document.getElementById("author").value;
    let readingDropdown = document.getElementById("readingStatusDropdown");
    book.readingStatus = readingDropdown.options[readingDropdown.selectedIndex].value;

    let showInfo = book.returnInfo();
    showInfoInParagraph.innerText = showInfo;

    document.getElementById("bookName").value = '';
    document.getElementById("author").value = '';
    document.getElementById("readingStatusDropdown").value = ''; // ова можеби изгледа подобро и без бришењето, сеедно е
});

// Се обидов со .reduce() да направам да се избрише extra whitespace (повеќе од едно) меѓу зборови. Пример: 'Game    of     Thrones' да ни даде 'Game of Thrones' во console.log. Знам стрингови се immutable, па пробав тој reduce() во нова варијалба да го направам, но проблем ми беше. 

// Го избришав бидејќи не е поентата на задачиве, ќе изгледа неатрактивно закоментирано така и да не си згрешам нешто, па да не успеам да се вратам :)

// Вторава задача успеав во console.log да ja направам, но ja променив малку за да се појави во самиот HTML колку да го испробам. И онака првата покажа дека сум успеал во конзолата.