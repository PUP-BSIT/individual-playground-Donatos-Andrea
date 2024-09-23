enum Animal {
    MAMMAL = "mammals",
    REPTILE = "reptile",
    AMPHIBIAN = "ambphibian",
    BIRD = "bird",
    FISH = "fish"
}

type Pets = {
    animal: Animal;
    color: string;
    lifespan: string;
    gender: string; 
    print(): void;
}

const cat: Pets = {
    animal: Animal.MAMMAL,
    color: "white",
    lifespan: "10 years",
    gender: "female",
    print(){
        console.log (
            `I want a cat, that is color ${this.color}, 
            with a lifespan of ${this.lifespan}, and a ${this.gender}. 
            Cat's are part of a ${this.animal} group and they can 
            help us with stress that boost our mental health.`);
    }
};

const snowyOwl: Pets = {
    animal: Animal.BIRD,
    color: "white",
    lifespan: "10-12 years",
    gender: "male",
    print() {
      console.log(
        `In my whole life, I have never had a pet that is a ${this.animal}.  +
          If I could have one, I would like to have a snowy owl  +
          because it has a color of ${this.color} and is a ${this.gender}.  +
          Even when it's old, it would still be white.  +
          Snowy owls have an incredible lifespan of up to ${this.lifespan},  +
          which is amazing. I can grow old with them.`
      );
    },
};
  

const axolotl: Pets = {
    animal: Animal.AMPHIBIAN,
    color: "white",
    lifespan: "6 years",
    gender: "female",
    print(){
        console.log (
            `I have a${this.gender} ${this.color} Axolotl, 
            with a lifespan of ${this.lifespan}.
            She is classified as ${this.animal}.`);
    }
};

cat.print();
snowyOwl.print();
axolotl.print();