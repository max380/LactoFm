
     $( document ).ready(function() {
         function updateauthor(){
             $.ajax({
                 // Дополнительно передается два параметра
                 // callback & format для получения данных
                 // в формате JSONP. Это позволит преодолеть CORS ограничение
                 url: "http://89.163.144.28:8080/api/history/?server=1&limit=11&callback=callback&format=jsonp",
                 jsonp: "callback",
                 dataType: "jsonp",
                 method: "GET",
                 success: function( response ) {
                     var authorTitlte = response.objects[0].author;
					 $("#author").text(authorTitlte);
					 var authorTitlte1 = response.objects[1].author;
					 $("#author1").text(authorTitlte1);
					 var authorTitlte2 = response.objects[2].author;
					 $("#author2").text(authorTitlte2);
					 var authorTitlte3 = response.objects[3].author;
					 $("#author3").text(authorTitlte3);
					 var authorTitlte4 = response.objects[4].author;
					 $("#author4").text(authorTitlte4);
					 var authorTitlte5 = response.objects[5].author;
					 $("#author5").text(authorTitlte5);
					 var authorTitlte6 = response.objects[6].author;
					 $("#author6").text(authorTitlte6);
					 var authorTitlte7 = response.objects[7].author;
					 $("#author7").text(authorTitlte7);
					 var authorTitlte8 = response.objects[8].author;
					 $("#author8").text(authorTitlte8);
					 var authorTitlte9 = response.objects[9].author;
					 $("#author9").text(authorTitlte9);
					 var authorTitlte10 = response.objects[10].author;
					 $("#author10").text(authorTitlte10);
                     var authorTitlte = response.objects[0].title;
					 $("#title").text(authorTitlte);
					 var authorTitlte1 = response.objects[1].author;
					 $("#title1").text(authorTitlte1);
					 var authorTitlte2 = response.objects[2].title;
					 $("#title2").text(authorTitlte2);
					 var authorTitlte3 = response.objects[3].title;
					 $("#title3").text(authorTitlte3);
					 var authorTitlte4 = response.objects[4].title;
					 $("#title4").text(authorTitlte4);
					 var authorTitlte5 = response.objects[5].title;
					 $("#title5").text(authorTitlte5);
					 var authorTitlte6 = response.objects[6].title;
					 $("#title6").text(authorTitlte6);
					 var authorTitlte7 = response.objects[7].title;
					 $("#title7").text(authorTitlte7);
					 var authorTitlte8 = response.objects[8].title;
					 $("#title8").text(authorTitlte8);
					 var authorTitlte9 = response.objects[9].title;
					 $("#title9").text(authorTitlte9);
					 var authorTitlte10 = response.objects[10].title;
					 $("#title10").text(authorTitlte10);					
					 
                 }
             });
         }
         updateauthor();
         setInterval(updateauthor, 5*1000);
     });


	 
     $( document ).ready(function() {
 function updateTrack(){
             $.ajax({
                 // Дополнительно передается два параметра
                 // callback & format для получения данных
                 // в формате JSONP. Это позволит преодолеть CORS ограничение
                 url: "http://89.163.144.28:8080/api/channels/?server=1&callback=callback&format=jsonp",
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
         setInterval(updateTrack, 5*1000);
     });
