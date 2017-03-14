// This object will have planet named for attributtes, and and each hero name is reference to an array of villians. 
var superData = {"Super Man":["Lex Luther"],
                "Bat Man": ["Joker", "Riddler"],
                "Spider Man":["Green Goblin",
                             "Vulture", "Carnage"],
                 "Thor":["Loki", "Frost Giants"]
                };

// In this function, I use a nested for/in loop to iternate through the superData object attributes. The outer loop get the hero name and inner loop loops through the index of the villians array. 

function writeIt(){
    for (hero in superData){
        var villains = superData[hero];
        for (villainIdx in villains) {
            var villain = villains[villainIdx];
            var listItem = makeListItem(hero, villain);
            document.write(listItem); 
        } // the end of the for/in loop 
    } // the end of for outer loop
} // The end of the writeIt() function 


// A function that need to return value that is use to write to the document. The function takes two arguments: a name and value, then generate an HTML string to create a <li> element and return the string.
function makeListItem(name, value){
    var itemStr = "<li>" + name + ":&nbsp;" + value + "</li>";
    return itemStr;
}