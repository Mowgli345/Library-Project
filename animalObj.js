function Animal (name, energy) {
    let animal = Object.create(Animal.prototype);
animal.name = name;
animal.energy= energy;

return animal;

}

Animal.prototype.eat = function(amount) {
        this.energy+=amount;
        console.log(`${this.name} is eating. His energy was 7, now ${this.energy} `)
},
Animal.prototype.sleep= function(length) {
    console.log(`${this.name} is sleeping`)
    this.energy+=length;
},
Animal.prototype.play = function(length) {
    console.log(`${this.name} is playing`)
    this.energy-=length;
}




const leo = Animal("Leo", 7);
const snoop = Animal("Snoop", 10);

console.log(leo);

leo.eat(10);
