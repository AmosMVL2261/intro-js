var animals = ["eagle","parrot","monkey","boar","lion"];
var commingSoonAnimals = ["panter","dragon","turtle"];
let newAnimals = animals.concat(commingSoonAnimals);
newAnimals.push("cow");
newAnimals.sort();
document.write("\n<p>"+newAnimals+"</p>\n");