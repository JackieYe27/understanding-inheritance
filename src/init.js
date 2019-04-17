$(document).ready(function() {
  window.dancers = [];

  $('.deleteButton').on('click', function(event) {
    _.each(window.dancers, function(dancer) {  
      $(dancer.$node).remove();
    });
    window.dancers = [];
  });

  $('.threeButton').on('click', function(event) {
    var partyFunctionName = $(this).data('three-party');
    console.log('name: ' + partyFunctionName);
    var partyFunction = window[partyFunctionName];
    partyFunction();
  });
  
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      500 + Math.random() * 500
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

(function() {
  Math.clamp = function(a,b,c){
  return Math.max(b,Math.min(c,a));
  }
})();

