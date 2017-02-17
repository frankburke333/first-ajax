$(document).ready(function () {

$('#step12').on('click', function() {

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method:'GET',
    dataType:'text'
  });
});

$('#step3456').on('click', function() {
  $.ajax({
		dataType: 'text',
    url: 'http://first-ajax-api.herokuapp.com/pong',
		method: 'GET'
		})
    .done(function(data) {
			$('#step3456').append(data);
		})
    .fail(function(jqXHR, textStatus, errorThrown) {
      $('#step3456').append(jqXHR.responseText);
      $('#step3456').append("WRONG LINK BRO......WOAH!");
      console.log('Ajax Request Failed!');
			console.log(jqXHR);
		})
    .always(function() {
			console.log("Hey the request finished!");
		});
  });

  $('#step7').on('click', function() {
    $.ajax({
  		dataType: 'text',
      data: {amount: 33333333},
      url: 'http://first-ajax-api.herokuapp.com/count',
  		method: 'GET'
  		})
      .done(function(data) {
  			$('#step7').append(data);
  		})
      .fail(function(jqXHR, textStatus, errorThrown) {
        $('#step7').append(jqXHR.responseText);
        $('#step7').append("WRONG LINK BRO......WOAH!");
        console.log('Ajax Request Failed!');
  			console.log(jqXHR);
  		})
      .always(function() {
  			console.log("Hey the request finished!");
  		});
    });

  $('#step8').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      data: {timezone: 'Europe/Sofia'},
  		method: 'GET'
  		})
      .done(function(data) {
  			$('#step8').append(data);
  		})
      .fail(function(jqXHR, textStatus, errorThrown) {
        $('#step8').append(jqXHR.responseText);
        $('#step8').append("WRONG LINK BRO......WOAH!");
        console.log('Ajax Request Failed!');
  			console.log(jqXHR);
  		})
      .always(function() {
  			console.log("Hey the request finished!");
  	});
});


$('#step9').on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    dataType: 'html',
    method: 'GET'
    })
    .done(function(data) {
      $('#cars').append(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      $('#step9').append(jqXHR.responseText);
      $('#step9').append("WRONG LINK DUDE......WOAH!");
      console.log('Ajax Request Failed!');
      console.log(jqXHR);
    })
    .always(function() {
      console.log("Hey the request finished!");
  });
});



});
