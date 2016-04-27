import {module, inject} from './angular-mocks';
import sumModule from '../src/sum.module';

describe('sum', () => {
  let sum;		
  
  beforeEach(module(sumModule.name));
  
  beforeEach(inject((_sum_) => {
  	sum = _sum_;
  }));
  
  it('sums up the given numbers', () => {
    expect(sum(1)).toEqual(1);
  });
});
