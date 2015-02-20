console.log ('Javascript works');

var wiky = {
    options: {
        'link-image': true //Preserve backward compat
    }
}


wiky.process_image = function(txt) {
	console.log ("Process image works!");

	var index = txt.indexOf(" ");
	url = txt;
	label = "";
	
	if (index > -1) 
	{
		url = txt.substring(0,index);
		label = txt.substring(index+1);
	}
	
	
	return "<img src='"+url+"' alt=\""+label+"\" />";
}
