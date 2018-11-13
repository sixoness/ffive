

inCludeScript("../th/javascripts/jquery.SuperSlide.js");
inCludeScript("../th/javascripts/m2-front.js");
inCludeScript("../th/javascripts/jquery.roundabout.js");








function inCludeScript(url){
    document.write('<script type="text/javascript" src="/javascript/' + url + '"> </script>');
	return false;
}