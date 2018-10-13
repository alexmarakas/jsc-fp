// vehicle options
var vehicleOptions = [
  {choice: 'cadenza', price: 35000},
  {choice: 'forte', price: 20000},
  {choice: 'optima', price: 29050},
  {choice: 'sedona', price: 38650},
  {choice: 'soul', price: 42200}
]

// color options
var colorOptions = [
  {choice: 'black', price: 50},
  {choice: 'white', price: 100},
  {choice: 'silver', price: 250}
]

// package options
var packageOptions = [
  {choice: 'Rear Camera', price: 150},
  {choice: 'LED Positioning Light', price: 150},
  {choice: 'Rear Camera and LED Positioning Light', price: 200}
]

// car selection to keep track of users options
var carSelection = {
  vehicle: {choice: 'Not Selected', price: 0},
  color: {choice: 'Not Selected', price: 0},
  package: {choice: 'Not Selected', price: 0}
}

// toggle navigation
$('.navigation li').on('click',function(){
  // toggle active tab
  $('.navigation .active').removeClass('active');
  $(this).addClass('active');

  // toggle options display
  $('#options-display').empty();
  switch ($(this).data('tab')) {
    case 'vehicle':
        var source = $('#vehicle-options-template').html();
        var template = Handlebars.compile(source);
        for(var i = 0; i < vehicleOptions.length; i++){
          var vehicle = {feature: vehicleOptions[i].choice, price: vehicleOptions[i].price};
          var html = template(vehicle);
          $('#options-display').append(html);
        }
      break;
    case 'color':
        var source = $('#color-options-template').html();
        var template = Handlebars.compile(source);
        for(var i = 0; i < colorOptions.length; i++){
          var color = {feature: colorOptions[i].choice, price: colorOptions[i].price};
          var html = template(color);
          $('#options-display').append(html);
        }
      break;
    case 'package':
      console.log('hello');
      break;
    case 'summary':
      console.log('hello');
      break;
    default:
      console.log('wow');
  }


});
