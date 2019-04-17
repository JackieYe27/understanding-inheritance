var TrashCanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="trashCan" src="resources/trashcan.jpg"></img>');
  this.setPosition(top, left);
  this.dancePhase = false;
  // this.danceMove = function() {
  //   if (this.dancePhase) {
  //     this.$node.animate( 
  //       {
          
  //     })
  //   }
  // }
}

TrashCanDancer.prototype = Object.create(Dancer.prototype);
TrashCanDancer.prototype.constructor = TrashCanDancer;

  