var animals = ["eagle","parrot","monkey","boar","lion"];
var commingSoonAnimals = ["panter","dragon","turtle"];
let newAnimals = animals.concat(commingSoonAnimals);
newAnimals.push("cow");
newAnimals.sort();
for(let i=0;i<newAnimals.length;i++){
    if(newAnimals[i]==="eagle"){
        newAnimals.splice(i,1);
    }
}
document.write("\n<p>"+newAnimals+"</p>\n");