const test = require("node:test");
const assert = require("node:assert");
const { add, divide } = require("../src/math");

test("add works", () => assert.strictEqual(add(2, 3), 5));
test("divide works", () => assert.strictEqual(divide(6, 3), 2));
test("divide by zero throws", () => assert.throws(() => divide(1, 0)));