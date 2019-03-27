
  var admobid = {};

  if( /(android)/i.test(navigator.userAgent) ) {

    admobid = { // for Android

      banner: 'ca-app-pub-1179949820637196/2704368742',

      interstitial: 'ca-app-pub-1179949820637196/1310685587',

    };

  }

	

  function createSelectedBanner(){

    if(AdMob) AdMob.createBanner({

      adId: admobid.banner,

      overlap: $('#overlap').is(':checked'),

      offsetTopBar: $('#offsetTopBar').is(':checked'),

      adSize: $('#adSize').val(),

      position: $('#adPosition').val(),

    });

  }



function initApp() {

  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }



  // this will create a banner on startup

  AdMob.createBanner( {

    adId: admobid.banner,

    position: AdMob.AD_POSITION.BOTTOM_CENTER,

    overlap: false,

    offsetTopBar: true,

    bgColor: 'red'

  } );



  // this will load a full screen ad on startup

  AdMob.prepareInterstitial({

    adId: admobid.interstitial,

    autoShow: true

  });

}



if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {

    document.addEventListener('deviceready', initApp, false);

} else {

    initApp();

}


    // test case for #256, https://github.com/floatinghotpot/cordova-admob-pro/issues/256

    $(document).on('backbutton', function(){

      if(window.confirm('Радио остановится. Закрыть приложение?')) navigator.app.exitApp();

    });

