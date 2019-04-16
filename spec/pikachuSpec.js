describe('pikachuDancer', function() {

    var pikachuDancer, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      pikachuDancer = new PikachuDancer(10, 20, timeBetweenSteps);
    });
  
    describe('dance', function() {
      it('should call step at least once per second', function() {
        sinon.spy(pikachuDancer, 'step');
        expect(pikachuDancer.step.callCount).to.be.equal(0);
        clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
        clock.tick(timeBetweenSteps);
  
        expect(pikachuDancer.step.callCount).to.be.equal(1);
  
        clock.tick(timeBetweenSteps);
        expect(pikachuDancer.step.callCount).to.be.equal(2);
      });
    });
  });
  