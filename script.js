var Animal;
(function (Animal) {
    Animal["MAMMAL"] = "mammals";
    Animal["REPTILE"] = "reptile";
    Animal["AMPHIBIAN"] = "ambphibian";
    Animal["BIRD"] = "bird";
    Animal["FISH"] = "fish";
})(Animal || (Animal = {}));
var cat = {
    animal: Animal.MAMMAL,
    color: "white",
    lifespan: "10 years",
    gender: "female",
    print: function () {
        console.log("I want a cat, that is color ".concat(this.color, ", \n            with a lifespan of ").concat(this.lifespan, ", and a ").concat(this.gender, ". \n            Cat's are part of a ").concat(this.animal, " group and they can \n            help us with stress that boost our mental health."));
    }
};
var snowyOwl = {
    animal: Animal.BIRD,
    color: "white",
    lifespan: "10-12 years",
    gender: "male",
    print: function () {
        console.log("In my whole life, I have never had a pet that is a ".concat(this.animal, ".+\n          If I could have one, I would like to have a snowy owl  +\n          because it has a color of ").concat(this.color, " and is a ").concat(this.gender, ".+\n          Even when it's old, it would still be white.  +\n          Snowy owls have an incredible lifespan of up to ").concat(this.lifespan, ",+\n          which is amazing. I can grow old with them."));
    },
};
var axolotl = {
    animal: Animal.AMPHIBIAN,
    color: "white",
    lifespan: "6 years",
    gender: "female",
    print: function () {
        console.log("I have a".concat(this.gender, " ").concat(this.color, " Axolotl, \n            with a lifespan of ").concat(this.lifespan, ".\n            She is classified as ").concat(this.animal, "."));
    }
};
cat.print();
snowyOwl.print();
axolotl.print();
