
class TapCard {
    constructor(name, abv, origin, description) {
        this.name = name;
        this.abv = abv;
        this.origin = origin;
        this.description = description;
    }

    loadTapCard() {
        console.log("tap card initialized");
    }
}

export { TapCard }