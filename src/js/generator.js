class Team {
    constructor(characters) {
        this.characters = characters;
        this.index = 0;
    }

    *[Symbol.iterator]() {
        for (const character of this.characters) {
            yield character;
        }
    }

    next() {
        return this.characters[this.index++];
    }
}

export default Team;