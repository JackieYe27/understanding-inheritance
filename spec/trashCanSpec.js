describe('trashCan', function() {

  var trashCanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    trashCanDancer = new trashCanDancer(20, 40, timeBetweenSteps);
  });

 it('should have a function named "lineUp"', function() {
    sinon.spy(trashCanDancer, 'lineUp');
    trashCanDancer.lineUp();
    expect(trashCanDancer.lineUp.called).to.be.true;
  });
  
});