import fruits from "./foods";
import { choice, remove } from "./helpers";

const random = choice(fruits);
console.log(`I'd like one RANDOMFRUIT, please.`);
console.log(`Here you go: ${random}`);
console.log("Delicious! May I have another?");
const updated = remove(fruits, random);
console.log(`I'm sorry, we're all out. We have ${updated.length} left.`);
