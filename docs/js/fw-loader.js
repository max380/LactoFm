(function(d, w){
	function fwCurrentScript(e) {
		if (!e) {
			var scripts = d.getElementsByTagName('script');
			for (var i = scripts.length - 1; i >=0; i--) {
				if(scripts[i].getAttribute("data-fw-param")) return scripts[i];
			}
		} else if (e.nodeName.toLowerCase() == 'script' && e.getAttribute("data-fw-param")) {
			return e;
		} else {
			return fwCurrentScript(e.lastChild);
		}
	}

	var fwScript = d.currentScript || fwCurrentScript(d);
	var fwparam = fwScript.getAttribute("data-fw-param");
	var i='fw-iframe'+Math.floor(Math.random()*9999999999);
	d.write('\x3ciframe id="'+i+'" name="'+i+'" height="150" width="150" class="fw-iframe" scrolling="no" frameborder="0" data-fw-params="'+fwparam+'">\x3c/iframe>');
	var f=d.getElementById(i).contentWindow.document;
	f.open().write('<body onload="'
		+'window.fwIframeId=\''+i+'\';'
		+'document.body.appendChild(document.createElement(\'script\')).src =\'https://feed.mikle.com/js/fw-widget.js?v=1.0\';'
		+'">');
	f.close();
	
	if (typeof _fwMsg != "function") {
		_fwMsg = function (e) {
			if (e.origin.match(/^https?:\/\/feed\.mikle\.com$/i)) {
				var iframes = this.document.getElementsByClassName('fw-iframe');
				for (var i=0; i<iframes.length; i++) {
					if (unescape(e.data.uri.replace(/^https?:/i,'')) == unescape(iframes[i].getAttribute('src').replace(/^https?:/i,''))) {
						iframes[i].style.width = e.data.width;
						iframes[i].style.height = e.data.height;
					}
					
					if(e.data.action && e.data.action == 'C_OPEN_INIF') {
						iframes[i].setAttribute("scrolling", "yes");
						iframes[i].src = e.data.linkUri;
					}
				}
			}
		};

		if (w.addEventListener) {
			w.addEventListener("message", _fwMsg, false);
		} else if (w.attachEvent) {
			w.attachEvent("onmessage", _fwMsg, false);
		} else {
			w.onmessage = _fwMsg;
		}
	}
}(document, window));
