// Mixed Messages
// Written by Matthew Chen

// Chooses a random subject of the joke
const randomSubject = () => {
    const subjectList  = ['dog', 'computer', 'protagonist', 'professor', 'cowboy'];
    return subjectList[Math.floor(Math.random() * subjectList.length)];
}

// Chooses a random object (grammar) of the joke
const randomObject = () => {
    const objectList = ['his father', 'the moon', 'the audience', 'the doctor', 'the judge'];
    return objectList[Math.floor(Math.random() * objectList.length)];
}

// Chooses a random punchline for the joke
const randomPunchline = () => {
    const punchlineList = [
        "Gotcha!",
        "I'm bushed!",
        "Where we're going, we don't need roads!",
        "What's the big idea???",
        "Help me!!!",
        "Give me another minute."
    ]
    return punchlineList[Math.floor(Math.random() * punchlineList.length)];
}

const generateJoke = (subject, object, punchline) => {
    return {
        subject,
        object,
        punchline,
        print() {
            console.log(`What did the ${this.subject} say to ${this.object}? \n"${this.punchline}"`);
        }
    }
}

const joke = generateJoke(randomSubject(), randomObject(), randomPunchline());
joke.print();