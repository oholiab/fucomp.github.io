window.onload = function() {

  var doc = document;

  var prepareStage = function() {

    var moveImagesUpDom = function() {
      var images = doc.getElementsByTagName("img");
      if (images.length > 0) {
        i = images.length - 1;
        do{
          var image = images[i],
          parent = image.parentNode,
          neighbour = parent.previousElementSibling; // is this actually used?
          doc.body.insertBefore(image, parent);
          parent.remove();
        } while( i-- );
      }
    }(); // what does this do? I want my images to be at the root of the
         // document and easily hackable THANK YOU VERY MUCH computer

    var parseVideos = function() { // step through the page and collect any
                                   // paragraph called "youtube-video"
                                   // convert it into an embedded object
        var videos = doc.getElementsByClassName("youtube-video");
        if (videos.length > 0) {
          var vidsLen = videos.length;
          var i = vidsLen - 1;
          do{
            var vidWrapper = doc.createElement("iframe"),
                vidEl = videos[i],
                vidUrl = vidEl.getElementsByTagName("a")[0].href;
                vidUrlArr = vidUrl.split("/"),
                vidUrlArrLen = vidUrlArr.length,
                vidId = vidUrlArr[vidUrlArrLen-1];
            vidWrapper.width = "560";
            vidWrapper.height = "315";
            vidWrapper.setAttribute("frameborder", "0");
            vidWrapper.setAttribute("allowfullscreen","");
            vidWrapper.src = "https://www.youtube.com/embed/" + vidId;
            doc.body.insertBefore(vidWrapper, vidEl);
            vidEl.remove();
          } while( i-- );
        }

    }();

    var headers = doc.getElementsByTagName("h1"),
        header = headers[0], // only pick the first one from the page just in case
                             // there's more… there shouldn't be, we'll write it
                             // in the submissions guideline
        subtitle = null,
        masthead = null,
        provideWrapper = false;

    if (headers.length > 0) {
      var wrapper = doc.createElement("div");
      var wrapperInner = doc.createElement("div");
      provideWrapper = true;
      wrapper.className = "Post-imageContainer";
      wrapperInner.className = "Post-imageContainerInner";
      header.className = "Post-title";
      wrapperInner.innerHTML = header.outerHTML;
      subtitle = header.nextElementSibling;
      header.remove();
    };

    if (subtitle != null) {
      if (subtitle.tagName.toLowerCase() === "blockquote") {
        subtitle.className = "Post-subtitle";
        wrapperInner.innerHTML = wrapperInner.innerHTML + subtitle.outerHTML;
        masthead = subtitle.nextElementSibling;
      };
    }

    if (masthead != null && masthead.tagName.toLowerCase() === "img") {
      subtitle.nextElementSibling.className = "Post-image";
      doc.body.classList.add("PostImage");
      wrapperInner.innerHTML = wrapperInner.innerHTML + subtitle.nextElementSibling.outerHTML;
      subtitle.remove();
      masthead.remove();
    }

    if (provideWrapper == true) {
      wrapper.innerHTML = wrapperInner.outerHTML;
      doc.body.insertBefore(wrapper, doc.body.firstChild);

      var closeClass = "is-closed";
      var desktopBreakpoint = 970;
      wrapper.onclick = function() {
        if (window.innerWidth >= desktopBreakpoint) {
          if (doc.body.classList.contains(closeClass)) {
            doc.body.classList.remove(closeClass);
          } else {
            doc.body.classList.add(closeClass);
          }
        }
        if (window.innerWidth < desktopBreakpoint) {
          var i = 0;
          var animateDown = setInterval(function() {
            i = i + 5;
            window.scrollTo(0, i);
            if (i >= window.innerHeight) {
              clearInterval(animateDown);
            }
          }, 10);
        }
      }
    }

  }();

}
