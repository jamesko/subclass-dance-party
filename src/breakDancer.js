var BreakDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // initializing arguements when inheriting superclass??
}

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};