document.addEventListener("DOMContentLoaded", function () {
  function adjustIframeHeight(iframe) {
    iframe.onload = function () {
      var frameContent =
        iframe.contentDocument || iframe.contentWindow.document;
      var object = frameContent.querySelector("object");
      var frameBody = frameContent.querySelector("body");
      var height = object.offsetHeight;
      frameBody.style.height = height + "px";
    };
  }
  var iframes = document.querySelectorAll(".auto-height-iframe");
  console.log(iframes);
  iframes.forEach(adjustIframeHeight);
});
