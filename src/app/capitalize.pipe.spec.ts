import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should change small to Small', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('small')).toBe('Small');
  });

  it('should change SMALL to Small', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('SMALL')).toBe('Small');
  });

  it('should change 320983248 to 320983248', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('320983248')).toBe('320983248');
  });

  it('should change jajajs443 to Jajajs443', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('jajajs443')).toBe('Jajajs443');
  });

  it('should change jajajs443 to Jajajs443', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('null')).toBe('Null');
  });

  it('should change jajajs443 to Jajajs443', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('null')).toBe('Null');
  });
});
