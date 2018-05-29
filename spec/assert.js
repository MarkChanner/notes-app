var assert = {
  isTrue: function(testCondition) {
    if (!testCondition) {
      throw new Error(`Assertion failed: ${testCondition} is not truthy`);
    } else {
      console.log('%cTest passed!', 'color: green');
    }
  }
};
