// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
  this.click();
  // this.lineUp = false;

};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
       top: top,
       left: left
     };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function(){
  // this.lineUp = true;
  clearTimeout(this.$node.step);
  this.$node.animate(({left: "20px"}))

}

Dancer.prototype.click = function(){
  $("body").on("click", ".dancer", function(event){
    console.log("worked");
    console.log(event);
  })
}

Dancer.prototype.changeColor = function(){
  // this.$node.on("mouseover", function(){
  //   $(this).css("border-color", "blue")
  // })
  $(this).css("border-color", "blue")

};
