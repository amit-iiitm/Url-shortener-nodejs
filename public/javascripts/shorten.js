//add an event listener to the shorten button for when the user clicks it
$('.btn-shorten').on('click',function(){
	//ajax call ton /apt/shorten with the URL that the user entered in the input box
	$.ajax({
		url:'/api/shorten',
		type: 'POST',
		dataType: 'JSON',
		data: {url: $('#url-field').val()},
		success: function(data){
			//display the shortened url to the user that is returned by the server
			var resultHTML='<a class="result" href=" '+ data.shortUrl +'">'+data.shortUrl+'</a>';
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow');		
		}
	});

});
