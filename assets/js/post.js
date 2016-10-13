window.onload = function() {
  var doc = document;

  var prepareStage = function() {

    var moveImagesUpDom = function(){
      var images = doc.getElementsByTagName("img");
      if (images.length > 0) {
        i = images.length - 1;
        do{
          var image = images[i],
          parent = image.parentNode,
          neighbour = parent.previousElementSibling;
          doc.body.insertBefore(image, parent);
          parent.remove();
        } while( i-- );
      }
    }(); // what does this do? I want my images to be at the root of the
         // document and easily hackable THANK YOU VERY MUCH computer

    var headers = doc.getElementsByTagName("h1"),
        header = headers[0], // only pick the first one from the page just in case
                             // there's more… there shouldn't be, we'll write it
                             // in the submissions guideline
        subtitle = null,
        masthead = null,
        provideWrapper = false;

    if (headers.length > 0) {
      var wrapper = doc.createElement("div");
      provideWrapper = true;
      wrapper.className = "Post-imageContainer";
      header.className = "Post-title";
      wrapper.innerHTML = header.outerHTML;
      subtitle = header.nextElementSibling;
      header.remove();
    };

    if (subtitle != null) {
      if (subtitle.tagName.toLowerCase() === "blockquote") {
        subtitle.className = "Post-subtitle";
        wrapper.innerHTML = wrapper.innerHTML + subtitle.outerHTML;
        masthead = subtitle.nextElementSibling;
      };
    }

    if (masthead != null && masthead.tagName.toLowerCase() === "img") {
      subtitle.nextElementSibling.className = "Post-image";
      wrapper.innerHTML = wrapper.innerHTML + subtitle.nextElementSibling.outerHTML;
      subtitle.remove();
      masthead.remove();
    }

    if (provideWrapper == true) {
      doc.body.insertBefore(wrapper, doc.body.firstChild);
    }

  }();

}
