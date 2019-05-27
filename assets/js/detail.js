(function($){ 
	$(document).ready(function(){
      console.log('script working . . .')
      let getQueryString = () => {
        var queryString = window.location.search.substring(1);
        var varArray = queryString.split("="); //eg. index.html?msg=1
        var id = varArray[1];
        createIframe(id)
    }

    let createIframe = (id) =>{
      const iframeContainer = document.getElementById('iframe');
      let iframe = document.createElement('iframe');
      iframe.setAttribute('src', id);
      iframe.setAttribute('style',"width: 100%;height: 1000vh;border: none;");
      iframeContainer.appendChild(iframe); 

    }
    getQueryString();



      
      
   })
})(this.jQuery);