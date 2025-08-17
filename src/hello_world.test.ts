const { hello } = require("./hello_world");

describe("test hello", () => {
    it("should return hello world", () => {
        expect(hello("world")).toBe("Hello world!");
    });
});
