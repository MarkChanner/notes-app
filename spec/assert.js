var assert = {
  isTrue: function(testCondition, testDescription) {
    if (!testCondition) {
      throw new Error(`${testDescription} failed: ${testCondition} is not truthy`);
    } else {
      console.log(`%c${testDescription} passed: ${testCondition}`, 'color: green');
    }
  }
};
