var SalsaDancer = function(top, left, timeBetweenSteps){
  // debugger;
  Dancer.apply(this, arguments);
  // initializing arguements when inheriting superclass??
}

SalsaDancer.prototype = Object.create(Dancer.prototype);
SalsaDancer.prototype.constructor = SalsaDancer;

SalsaDancer.prototype.step = function(){

    Dancer.prototype.step.call(this);

  this.$node.animate({
    opacity: 1,
    left: "+=50",
  }, 500, function() {
    // right: "-=200"
  });
  this.$node.animate({
    opacity: 1,
    left: "-=50",
  }, 500, function() {
    // right: "-=20 0"
  })


};

