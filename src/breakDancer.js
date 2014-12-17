var BreakDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  //this.$node.append("<img src='img/Breakdance.gif'/>");
  //this.$node.removeClass("dancer");
  this.$node.addClass("breakDance");

  // initializing arguements when inheriting superclass??
}

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // this.$node.toggle();

  // this.$node.append("<img id='breakDance' src='../img/Breakdance.gif'/>");

  // $(this).on("click", function(){
  //   debugger;
  //   // this.$node.addClass("breakDance");
  //   // this.$node.removeClass("dancer");
  // })



};
