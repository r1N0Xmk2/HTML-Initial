$(function(){
	var href=window.location.href;
	var hrefs=href.split('.')
	if(hrefs[hrefs.length-1]=="htm"){
		var hrefss=hrefs[hrefs.length-2].split('/');
		var num=parseInt(hrefss[hrefss.length-1]);
		if(num!=NaN) 
		$('a.ymjc').attr('href', '/error/error_report.jsp?info_id='+num+'&tm_id=177')
		.css('visibility', 'visible');;
	}
	
})

var href=window.location.href;
	var hrefs=href.split('.')
	if(hrefs[hrefs.length-1]=="htm"){
		var hrefss=hrefs[hrefs.length-2].split('/');
		var num=parseInt(hrefss[hrefss.length-1]);
		if(num.isNaN()) alert('nan');
		else if(num)alert('aaaa')
		
	}