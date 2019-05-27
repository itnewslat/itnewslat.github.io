(function($){ 
	$(document).ready(function(){
      console.log('script working . . .')

      let feed = $("#filter").attr("name");
      console.log('===>',feed);
      //feed to parse
      // let feed = "https://cors-anywhere.herokuapp.com/https://www.comunicae.com.mx/feedDestino.php?sId=itnews&cat=148";
      
         $.ajax({
            url: "https://cors-anywhere.herokuapp.com/" + feed,
            dataType: 'xml',
            success  : function (data) {
              let json =  xml2json(data);
              createListNews(json);
            },
            error: function(error){
               console.log(error)
            }
      }); 
      
      let xml2json = (data) => {
         const children = [...data.children];
         if (!children.length) return data.innerHTML
       
         const jsonResult = Object.create(null),
           childIsArray = (x, y) => x.filter(z => z.nodeName === y.nodeName).length > 1;
       
        for (const child of children) {
          if (!childIsArray(children, child)) 
            jsonResult[child.nodeName] = xml2json(child);
          else {
            if (jsonResult[child.nodeName] !== undefined) 
              jsonResult[child.nodeName].push      (xml2json(child));
            else jsonResult[child.nodeName] = [xml2json(child)];
          }
        }
        return jsonResult;
      }

      let createListNews = (json) => {
        const items = json.rss.channel.item;      
        items.forEach((item) =>{
          console.log(item)
          const containerNews = document.getElementById('news');
          // href element
          let hrefDiv = document.createElement('div');
          hrefDiv.setAttribute('class',"row row-hover py-1 py-lg-3 align-items-center clickable-element" );
          hrefDiv.setAttribute('id',item.id)
          // todo
          hrefDiv.onclick = function clicked(){ 
            window.location.href = "/default.html?Id=" + item.link; 
          };
          //image container
          let imageDiv = document.createElement('div');
          imageDiv.setAttribute('class','col-3');
          // image
          let image = document.createElement('img');
          image.setAttribute('class', 'img-fluid b-loaded');
          image.setAttribute('alt', item.title);
          image.setAttribute('src','/assets/imagenes/logo.png');
          let divContainer = document.createElement('div');
          divContainer.setAttribute('class','col-9 pl-0');
          let title = document.createElement('h6');
          title.setAttribute('class','mb-1')
          title.appendChild(document.createTextNode(item.title));
          let date = document.createElement('p');
          date.setAttribute('class','text-uppercase text-xs mb-0');
          let clock = document.createElement('i');
          clock.setAttribute('class','fa fa-arrow-circle-right');
          clock.setAttribute('style','color:#a10f2b')
          clock.appendChild(document.createTextNode(' Ver más'));

          divContainer.appendChild(title);
          divContainer.appendChild(date);
          date.appendChild(clock);
          imageDiv.appendChild(image);
          hrefDiv.appendChild(imageDiv);
          hrefDiv.appendChild(divContainer);
          containerNews.appendChild(hrefDiv);
        });
      }    
   })
})(this.jQuery);