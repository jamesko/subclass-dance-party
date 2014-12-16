describe("salsaDancer", function() {

  var salsaDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    salsaDancer = new SalsaDancer(10, 20, timeBetweenSteps); //
  });

  it("should have a jQuery $node object", function(){
    expect(salsaDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(salsaDancer, "step");
      expect(salsaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(salsaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(salsaDancer.step.callCount).to.be.equal(2);
    });
  });
});
