function hamburger() {
  var element = document.getElementById("hamburger");

  if (element.classList) { 
    element.classList.toggle("open");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("open");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("open");
      element.className = classes.join(" "); 
  }
}

$(window).scroll(function(){
  var  scrollTop =  $(this).scrollTop();
  if (scrollTop > 1){
       $('#navbar').css('background','white')  
  }else{
       $('#navbar').css('background','transparent')
  }
})