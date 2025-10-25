const footer = document.querySelector("footer");
if (window.self !== window.top) {
  footer.hidden = true;
}