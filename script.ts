enum CitrusMember {
    ANDREA = "drea",
    MIKAELLA = "mika",
    KIANLEE = "kian",
    ELIZA = "eliza",
    AKISHA = "kisha"
}

type Profile = {
    name: string;
    role: string;
    age: number;
    gender: string;
    birthday: Date;

    print(): void;
}