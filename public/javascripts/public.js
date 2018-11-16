

inCludeScript("../public/javascripts/jquery.SuperSlide.js");
inCludeScript("../public/javascripts/m2-front.js");
inCludeScript("../public/javascripts/jquery.roundabout.js");








function inCludeScript(url){
    document.write('<script type="text/javascript" src="/javascript/' + url + '"> </script>');
	return false;
}