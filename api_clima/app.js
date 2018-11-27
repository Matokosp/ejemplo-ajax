$(document).ready(function(){

	var url = 'https://api.darksky.net/forecast/';
	var key = '6f3904234b64a9333355327168b9b104/';
	var coords = {
		nyc: '40.7308619,-73.9871558',
		shs: '59.3251172,18.0710935'
	}

	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=si']
	var weatherIcon = {
		'rain': 'fa-cloud-rain',
		'clear-night': 'fa-moon'
	}

	$('#select').on('change', function (){
		$.ajax ({
			url: url + key + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
			dataType: 'jsonp',
			method: 'GET'
		}).then(function (data) {
			console.log(data);
			$('#resumen').text(parseInt(data.currently.temperature) + '° ' + data.currently.summary);
			$('#apparent').text(data.currently.apparentTemperature + '°');
			$('#rain').text(data.currently.precipProbability * 100 + '%');
			$('#humidity').text(data.currently.humidity * 100 + '%');
			$('#weather-icon').children('i').toggleClass(weatherIcon[data.currently.icon]);
		})
	})
})

