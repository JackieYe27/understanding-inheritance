var PikachuDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="pikachu" src="resources/pikachu.png"></img>');
  this.setPosition(top, left);
  this.dancePhase = false;
  this.danceMove = function() {
    if (this.dancePhase) {
      this.$node.animate(
      {
        height: '150px',
        width: '50px',
      },
      timeBetweenSteps);
      this.dancePhase = false;
    } else {
      this.$node.animate(
        {
          height: '50px',
          width: '150px',
        },
      timeBetweenSteps);
      this.dancePhase = true;
    }
  };
};

PikachuDancer.prototype = Object.create(Dancer.prototype);
PikachuDancer.prototype.constructor = PikachuDancer;