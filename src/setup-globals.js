import chalk from "chalk";

let testPassCount = 0,
  testFailCount = 0;

async function test(title, callback) {
  try {
    await callback();
    testPassCount++;
    console.log(chalk.green(`✓ ${title}`));
  } catch (error) {
    testFailCount++;
    console.error(chalk.red(`✕ ${title}`));
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toHaveLength(expected) {
      if (!Array.isArray(actual)) {
        throw new Error(`${actual} is not of type array`);
      }
      if (actual.length !== expected) {
        throw new Error(`${actual.length} is not equal to ${expected}`);
      }
    },
  };
}

// qwe specific functions
function fn(cb = () => {}) {
  const mockFn = (...args) => {
    const result = cb(...args);
    mockFn.mock.callCount += 1;
    mockFn.mock.calls.push(args);
    mockFn.mock.results.push({ value: result });
    return result;
  };
  mockFn.mock = { callCount: 0, calls: [], results: [] };
  return mockFn;
}

global.test = test;
global.expect = expect;
global.qwe = {
  fn,
};

process.on("exit", (code) => {
  const allPassText = chalk.green("\n all tests passing");
  const failureReportText = chalk.yellow(`\n ${testPassCount} passing, ${testFailCount} failing tests`);

  console.log(testFailCount === 0 ? allPassText : failureReportText);
});
