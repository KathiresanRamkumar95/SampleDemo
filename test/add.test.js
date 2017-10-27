import expect from'expect'; 
import add from'../src/add.js';

it('above 18', () => 
{  
  expect(add(19)).toBe(true);
});