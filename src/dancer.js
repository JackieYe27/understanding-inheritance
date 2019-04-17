var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // callback();
  if (this.danceMove) {
    this.danceMove();
  }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: Math.clamp(top, 100, window.innerHeight - 150),
    left: Math.clamp(left, 40, window.innerWidth - 40)
  };
  this.$node.css(styleSettings);
};