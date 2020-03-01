
     $( document ).ready(function() {
         function updateTrack(){
             $.ajax({
                 // Дополнительно передается два параметра
                 // callback & format для получения данных
                 // в формате JSONP. Это позволит преодолеть CORS ограничение
                 url: "http://80.93.177.71:8080/api/history/?server=1&limit=11&callback=callback&format=jsonp",
                 jsonp: "callback",
                 dataType: "jsonp",
                 method: "GET",
                 success: function( response ) {
                     var trackTitlte = response.objects[0].metadata;
					 $("#track").text(trackTitlte);
					 var trackTitlte1 = response.objects[1].metadata;
					 $("#track1").text(trackTitlte1);
					 var trackTitlte2 = response.objects[2].metadata;
					 $("#track2").text(trackTitlte2);
					 var trackTitlte3 = response.objects[3].metadata;
					 $("#track3").text(trackTitlte3);
					 var trackTitlte4 = response.objects[4].metadata;
					 $("#track4").text(trackTitlte4);
					 var trackTitlte5 = response.objects[5].metadata;
					 $("#track5").text(trackTitlte5);
					 var trackTitlte6 = response.objects[6].metadata;
					 $("#track6").text(trackTitlte6);
					 var trackTitlte7 = response.objects[7].metadata;
					 $("#track7").text(trackTitlte7);
					 var trackTitlte8 = response.objects[8].metadata;
					 $("#track8").text(trackTitlte8);
					 var trackTitlte9 = response.objects[9].metadata;
					 $("#track9").text(trackTitlte9);
					 var trackTitlte10 = response.objects[10].metadata;
					 $("#track10").text(trackTitlte10);
					
					 
                 }
             });
         }
         updateTrack();
         setInterval(updateTrack, 5*1000);
     });

	 
     $( document ).ready(function() {
 function updateTrack(){
             $.ajax({
                 // Дополнительно передается два параметра
                 // callback & format для получения данных
                 // в формате JSONP. Это позволит преодолеть CORS ограничение
                 url: "http://80.93.177.71:8080/api/channels/?server=1&callback=callback&format=jsonp",
                 jsonp: "callback",
                 dataType: "jsonp",
                 method: "GET",
                 success: function( response ) {
                     var listenersTitlte = response.objects[0].listeners_air;
                     $("#listeners").text(listenersTitlte);
                 }
             });
         }
         updateTrack();
         setInterval(updateTrack, 15*1000);
     });
