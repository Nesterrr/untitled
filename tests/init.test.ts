import * as assert from 'assert';
import { foo } from '../src/server/app';


const hello = (): string => 'hello world!';

// const env = process.env;

// Object.keys(env).forEach(key => console.log(`${key}: ${env[key]}`));


describe('test function', () => {
  it('should return test', () => {
    const result = foo();
    assert(result === 'test', `shoud return test, now ${result}`);
  });
});


describe('test function', () => {
    it('should return test', () => {
      const result = hello();
      assert(result === 'hello world!', `shoud return test, now ${result}`);
    });
  });