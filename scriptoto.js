		jQuery(function($){

			var findText = 'http://feed.exileed.com/vk/feed/maddysonfm';

			var method = 'load' ;

			var url = /http:\/\/.*?\/.*/.test(findText) ?
				'https://ajax.googleapis.com/ajax/services/feed/'+method+'?v=1.0&num=100&callback=parseRSS&q='+encodeURIComponent(findText):
				'https://ajax.googleapis.com/ajax/services/feed/'+method+'?v=1.0&num=100&callback=parseRSS&q='
					+encodeURIComponent('http://news.google.com/news?q='+findText+'&output=rss');

			var li_template = '<li{{class}}>' +
				'<div><a href="{{link}}" target="_blank" class="title">{{title}}</a></div>' +
				'<div class="content1">{{img}} {{contentSnippet}}</div> <div class="clear"></div> ' +
				'</li>';

			$.getScript(url);


			window.parseRSS = function(json){

				var entriesn = (method == 'load') ? json["responseData"]["feed"]["entries"] : json["responseData"]["entries"];

				if(json["responseData"] != undefined && entriesn != undefined)
				{
					var rss = '';

					for(var i=0; i<entriesn.length; i++)
					{
						entriesn[i]['class'] =
							i == 0? ' class="first" ' : i == entriesn.length -1 ? ' class="end" ' : '';

						entriesn[i]['img'] = '';

						if(entriesn[i]["mediaGroups"] != undefined && /^image/.test(entriesn[i]["mediaGroups"][0]["contents"][0]["type"]))
						{
							entriesn[i]['img'] = '<img src="'+entriesn[i]["mediaGroups"][0]["contents"][0]["url"]+'" alt="" class="news" />';
						}

						rss += li_template.replace(/{{(\w+)}}/ig, function(search, key){
							return entriesn[i][key];
						});
					}

					$("ul").html(rss);
				}
			};
		});