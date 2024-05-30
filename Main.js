const random_words = {
    planet: ['Earth', 'Saturn', 'Uranus', 'Mars', 'Mercury', 'Jupiter', 'Neptune', 'Venus'],
    type: ['acidic', 'blood-red', 'alkaline', 'diamond', 'savage', 'relentless'],
    adj: ['great', 'euphoric', 'hell of a', 'awful', 'to forget', 'to remember']
};

const memo = new Map();

function rand_message(wordObject) {

    function generateMessage(wordObject) {
        const selectedWords = Object.keys(wordObject).map(key => {
            const options = wordObject[key];
            return options[Math.floor(Math.random() * options.length)];
        });
        
        const key = selectedWords.join('-'); // Create a key from the selected words

        if (memo.has(key)) {
            return memo.get(key);
        }

        const message = `The rains today on ${selectedWords[0]} ${
            selectedWords[1] === 'diamond' ? 'shine bright like a diamond' : `are ${selectedWords[1]}`
        }. This means you will have a ${
            selectedWords[2].includes('to ') ? `${selectedWords[2]}` : `${selectedWords[2]} day`
        }.`;

        memo.set(key, message);
        return message;
    }
   
    console.log(generateMessage(wordObject));
}

rand_message(random_words);

const newWords = {
    weather: ['sunny', 'cloudy', 'windy', 'rainy'],
    mood: ['happy', 'sad', 'excited', 'calm'],
    activity: ['reading', 'walking', 'coding', 'sleeping']
};

rand_message(newWords);