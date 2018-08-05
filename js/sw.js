if (navigator.serviceWorker) {
  //alert ('ok');
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/js/sw.js').then( function(registration){
      //Registration with success
      //alert('Register of serviceWorker with success');},
       function(err) {
        console.log('Register of serviceWorker was not OK'+ err);

    });
  });

  //add a Listener
  window.addEventListener('fetch', function(event) {
    alert(event.request);
  }
)


}
