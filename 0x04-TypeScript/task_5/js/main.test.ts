import { sumMajorCredits, sumMinorCredits, MajorCredits, MinorCredits } from './main';

describe('sumMajorCredits', () => {
  it('should correctly sum the credits of two MajorCredits objects', () => {
    const subject1 = { credits: 10 } as any as MajorCredits;
    const subject2 = { credits: 20 } as any as MajorCredits;
    const result = sumMajorCredits(subject1, subject2);
    expect(result).toEqual({ credits: 30 });
  });
});

describe('sumMinorCredits', () => {
  it('should correctly sum the credits of two MinorCredits objects', () => {
    const subject1 = { credits: 5 } as any as MinorCredits;
    const subject2 = { credits: 10 } as any as MinorCredits;
    const result = sumMinorCredits(subject1, subject2);
    expect(result).toEqual({ credits: 15 });
  });
});