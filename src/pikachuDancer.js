var PikachuDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer pikachu" src="resources/pikachu.png"></img>');
  this.setPosition(top, left);
};

PikachuDancer.prototype = Object.create(Dancer.prototype);
