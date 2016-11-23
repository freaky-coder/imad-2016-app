console.log('Loaded!');

// var url ='http://localhost:8080/';
var url='http://cloud.imad.hasura.io/';
// For setting up the page counter
var button_counter=document.getElementById('counter');
//var counter=0;
button_counter.onclick =function(){
	
	var request= new XMLHttpRequest();
	
	// Capture the response of the request
	request.onreadystatechange= function(){
		if(request.readySate=== XMLHttpRequest.DONE)
			// Take some action 
		     if(request.status=== 200){
				var button_counter= request.responseText;
				var span = document.getElementById('count');
				span.innerHTML= button_counter.toString();
			 }
	};
		request.open('GET',url+'counter',true);
		request.send('null');
};
