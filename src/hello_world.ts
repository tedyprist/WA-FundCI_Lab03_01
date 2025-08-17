const greeting = 'world';

function hello(world: string = greeting): string {
  if (world == "WebAcademy") {
    return "Hi WebAcademy!";
  }
  return `Hello ${world}!`;
}

module.exports = { greeting, hello };