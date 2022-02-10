# jest-issue
Reproduction for Jest Issue https://github.com/facebook/jest/issues/12364

To reproduce:
- Clone this repo
- `yarn install`
- `yarn test deep-array.test.js` should fail with an appropriate error message
- `yarn test wide-array.test.js` will crash with out of memory

Jest's pretty formatting tool can't handle arrays that are wide, or a mixture
of wide and deep beyond a certain size.

There's a maxDepth value that prevents them from printing very deep objects,
but will still try to print very wide objects resulting in the computer running
out of memory.
