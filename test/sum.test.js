import expect from 'expect'; 
import  sum from '../src/sum.js';

it('substract 2 - 1 to equal 3', () => 
{  
  expect(sum(2, 1)).toBe(1);
});

it('adds 2 + 2 to equal 4', () => 
{  
  expect(sum(2, 2)).toBe(4);
});

it('adds 1 + 2 to equal 3', () => 
{  
  expect(sum(1, 2)).toBe(3);
});
