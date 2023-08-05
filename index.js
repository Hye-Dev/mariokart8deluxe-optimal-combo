import characters from "./characters.js";
import tires from "./tires.js";
import gliders from "./gliders.js";
import bodies from "./bodies.js";

let optimalPoints = 0;
let optimalCombination = [];

characters.forEach((character) => {
    let points = 0;

    let characterStats = character.statistics;

    bodies.forEach((body) => {
        tires.forEach((tire) => {
            gliders.forEach((glider) => {
                let speedGnd = characterStats.speedGnd + tire.speedGnd + glider.speedGnd + body.speedGnd;
                let speedWtr = characterStats.speedWtr + tire.speedWtr + glider.speedWtr + body.speedWtr;
                let speedAir = characterStats.speedAir + tire.speedAir + glider.speedAir + body.speedAir;
                let speedGty = characterStats.speedGty + tire.speedGty + glider.speedGty + body.speedGty;
                let acceleration = characterStats.acceleration + tire.acceleration + glider.acceleration + body.acceleration;
                let weight = characterStats.weight + tire.weight + glider.weight + body.weight;
                let handlingGnd = characterStats.handlingGnd + tire.handlingGnd + glider.handlingGnd + body.handlingGnd;
                let handlingWtr = characterStats.handlingWtr + tire.handlingWtr + glider.handlingWtr + body.handlingWtr;
                let handlingAir = characterStats.handlingAir + tire.handlingAir + glider.handlingAir + body.handlingAir;
                let handlingGty = characterStats.handlingGty + tire.handlingGty + glider.handlingGty + body.handlingGty;
                let grip = characterStats.grip + tire.grip + glider.grip + body.grip;
                let miniturbo = characterStats.miniturbo + tire.miniturbo + glider.miniturbo + body.miniturbo;
                let invincibility = characterStats.invincibility + tire.invincibility + glider.invincibility + body.invincibility;

                let avgSpeed = (speedGnd + speedWtr + speedAir + speedGty) / 4;
                let avgHandling = (handlingGnd + handlingWtr + handlingAir + handlingGty) / 4;

                points += avgSpeed;
                points += avgHandling;
                points += acceleration;
                points += weight;
                points += grip;
                points += miniturbo;
                points += invincibility;
                if (points > optimalPoints) {
                    optimalPoints = points;
                    optimalCombination = [];
                    optimalCombination.push(
                        {
                            character: character.name,
                            body: body.name,
                            tire: tire.name,
                            glider: glider.name,
                            points: points,
                        }
                    );
                } else if (points === optimalPoints) {
                    optimalCombination.push(
                        {
                            character: character.name,
                            body: body.name,
                            tire: tire.name,
                            glider: glider.name,
                            points: points,
                        }
                    );
                }
                points = 0;
            })
        })
    })

})

optimalCombination.forEach((combination) => {
    console.log(`Character: ${combination.character}, body: ${combination.body}, tire: ${combination.tire}, glider: ${combination.glider}`);
    console.log("------")
})