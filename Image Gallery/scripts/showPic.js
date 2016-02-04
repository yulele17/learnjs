function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var text = whichpic.getAttribute('title');
  var description = document.getElementById('description');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute("src",source);
  description.firstChild.nodeValue = text;
}
function countBodyChildren(){
  var body_element = document.getElementsByTagName('body')[0];
  var description = document.getElementById('description');
  alert(body_element.childNodes.length);
  alert(body_element.childNodes[0].nodeType);
  alert(description.firstChild.nodeValue);
}

window.onload = countBodyChildren;
