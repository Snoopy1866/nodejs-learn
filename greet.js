function greet(name) {
  return `hello, ${name}!`;
}

console.log(greet("GKD"));

const persons = ["Adpro", "AIsouler"];

const messages = persons.map(greet);

console.log(messages);
