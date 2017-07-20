'use strict';

import ReportDecorator from '../../src/decorator/ReportDecorator'

describe('ReportDecorator', () => {
  it('should return given name' ,() => {
    const report = new ReportDecorator(null, defalutParam().name);
    expect(report.date()).to.equal('2017-07-20');    
  })

  it('should return given items' ,() => {
    const report = new ReportDecorator(defalutParam().items, null);
    expect(report.getItems()).to.have.members([1,2,3,4,5]);    
  })

  it('should return id' ,() => {
    const report = new ReportDecorator(null, defalutParam().name);
    expect(report.id()).to.equal('2017-07-20');    
  })

})

function defalutParam() {
  return {
    items: [1,2,3,4,5],
    name: '2017-07-20'
  }
};
