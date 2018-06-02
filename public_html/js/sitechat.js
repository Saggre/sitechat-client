/**
 * 
 * Load async iframe
 */

// iframe (dynamic async)
(function (d) {
    var iframe = d.createElement('iframe');

    //For IE7 compatibility
    /*var idoc = iframe.contentWindow.document;
     idoc.open();e       
     idoc.write('Hello world');
     idoc.close();*/

    iframe.src = 'http://localhost:1337/v1/client/saggre';
    iframe.setAttribute("style", "width: 400px; height:500px; background-color: transparent; border: none; overflow: hidden;");

    d.body.appendChild(iframe);
}(document));