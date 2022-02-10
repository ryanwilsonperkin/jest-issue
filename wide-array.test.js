// This number might be slightly higher on your machine
// On mine, it will reliably use >5Gb of memory for this length
const LENGTH = 100_000_000;

it('should fail for wide array', () => {
    const o = Array(LENGTH);
    expect(o).toBeNull();
});

