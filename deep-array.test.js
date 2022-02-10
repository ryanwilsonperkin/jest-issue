// Simulates an infinitely nested array
function ArrayProxy() {
  const a = ['x'];
  return new Proxy(a, {
    get(target, prop, receiver) {
      // Requests for a[0] will return a new ArrayProxy
      // All other properties will be forwarded to the actual array
      if (prop === '0') return ArrayProxy();
      return Reflect.get(...arguments);
    }
  });
}

it('should print a short failure message for deep array', () => {
  const o = ArrayProxy();
  expect(o).toBeNull();
});
