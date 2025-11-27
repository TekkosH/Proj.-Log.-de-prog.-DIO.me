class Hero {
    constructor(heroName, age, heroClass, attackMethod) {
        this.heroName = heroName;
        this.age = age;
        this.heroClass = heroClass;
        this.attackMethod = attackMethod;
    }

    attack() {
        switch (this.heroClass) {
            case "guerreiro":
                this.attackMethod = "espada";
                break;
            case "mago":
                this.attackMethod = "magia";
                break;
            case "monge":
                this.attackMethod = "artes marciais";
                break;
            case "ninja":
                this.attackMethod = "shuriken";
                break;
            default:
                this.attackMethod = "punhos";
                break;
        }
        console.log(`O ${this.heroClass} atacou usando ${this.attackMethod}`);
    }
}

let player = new Hero("Arthas", 30, "guerreiro");
player.attack();
