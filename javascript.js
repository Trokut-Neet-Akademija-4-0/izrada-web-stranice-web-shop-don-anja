document.addEventListener("DOMContentLoaded", function () {
  function adjustIframeHeight(iframe) {
    iframe.onload = function () {
      var frameContent =
        iframe.contentDocument || iframe.contentWindow.document;
      var object = frameContent.querySelector("object");
      var frameBody = frameContent.querySelector("body");
      var body = frameContent.querySelector("body");
      var height = object.offsetHeight;
      frameBody.style.height = height + "px";
      body.style.margin = 0 + "px";
      iframe.style.height = height + 5 + "px";
    };
  }
  var iframes = document.querySelectorAll(".auto-height-iframe");
  iframes.forEach(adjustIframeHeight);
});
