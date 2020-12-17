const vibes = [
    "...and you're awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy!"
];

var vibePoke = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibePoke);