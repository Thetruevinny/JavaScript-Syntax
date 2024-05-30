const random_words = {
    planet: ['Earth', 'Saturn', 'Uranus', 'Mars', 'Mercury', 'Jupiter', 'Neptune', 'Venus'],
    type: ['acidic', 'blood-red', 'alkaline', 'diamond', 'savage', 'relentless'],
    adj: ['great', 'euphoric', 'hell of a', 'awful', 'to forget', 'to remember']
};

function rand_message() {
    select_words = []
    for (let key of Object.keys(random_words)) {
        num = Math.floor(Math.random() * random_words[key].length);
        select_words.push(random_words[key][num]);
    }
    
    message = `The rains today on ${select_words[0]} `;

    if (select_words[1] === 'diamond') {
        message += `shine bright like a ${select_words[1]}. `;
    } else {
        message += `are ${select_words[1]}. `;
    }

    if (select_words[2].includes('to ')) {
        message += `This means you will have a day ${select_words[2]}.`;
    } else {
        message += `This means you will have a ${select_words[2]} day.`;
    }

    console.log(message);
}

rand_message()