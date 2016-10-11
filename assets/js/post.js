window.onload = function() {
  var doc = document;

  // JS… get in the sea
  // Sensible precautions courtesy of James Edwards
  // https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
  function clean(node)
  {
    for(var n = 0; n < node.childNodes.length; n ++)
    {
      var child = node.childNodes[n];
      if
      (
        child.nodeType === 8
        ||
        (child.nodeType === 3 && !/\S/.test(child.nodeValue))
      )
      {
        node.removeChild(child);
        n --;
      }
      else if(
        child.nodeType === 1 &&
        (!child.tagName.toLowerCase() === "code"))
      {
        clean(child);
      }
    }
  };
  clean(doc.body);

  var prepareStage = function() {
    var headers = doc.getElementsByTagName("h1"),
        header = headers[0]; // only pick the first one from the page just in case
                             // there's more… there shouldn't be, we'll write it
                             // in the submissions guideline
        subtitle = header.nextSibling,
        masthead = subtitle.nextSibling,
        wrapper = doc.createElement("div");
    var fuckYouIAmInCharge = function(){
      var images = doc.getElementsByTagName("img"),
          i = images.length - 1;
      do{
        var image = images[i],
            parent = image.parentNode,
            neighbour = parent.previousSibling;
            doc.body.insertBefore(image, parent);
        parent.remove();
      } while( i-- );
    }(); // what does this do? I want my images to be at the root of the
         // document and easily hackable THANK YOU VERY MUCH computer
    wrapper.className = "Post-imageContainer";
    header.className = "Post-title";
    wrapper.innerHTML = header.outerHTML;
    if (subtitle.tagName.toLowerCase() === "blockquote") {
      subtitle.className = "Post-subtitle";
      wrapper.innerHTML = wrapper.innerHTML + subtitle.outerHTML;
    };

    if (subtitle.nextSibling.tagName.toLowerCase() === "img") {
      subtitle.nextSibling.className = "Post-image";
      wrapper.innerHTML = wrapper.innerHTML + subtitle.nextSibling.outerHTML;
    }
    doc.body.insertBefore(wrapper, doc.body.firstChild);
    masthead.remove();
    subtitle.nextSibling.remove(); // apparently calling masthead is just an empty paragraph tag now
    subtitle.remove();
    header.remove();
  }();

}
