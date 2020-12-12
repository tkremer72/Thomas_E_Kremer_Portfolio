// AJAX request to dynamically list my GitHub repositories. 
const git = document.getElementById("git");
let currentPage = 1;
const pageMap = {};
let lastPage;

//render function
function render() {
  git.innerHTML = "";
  pageMap[currentPage].forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    git.append(li)
  })
}

function next() {
  if (currentPage === lastPage) return;
  currentPage++;
  render();
}

function prev() {
  if (currentPage === 1) return;
  currentPage--;
  render();
}

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText);
    let page = 1;
    let nameCount = 1;

    //populate results to an object map
    response.forEach(res => {
      if (!pageMap[page]) {
        pageMap[page] = [];
      }
      pageMap[page].push(res.name);
      nameCount++
      if (nameCount > 12) {
        nameCount = 1;
        page++
      }
    })
    //store last page
    lastPage = Object.keys(pageMap).length;
    //render first page only
    render();
  }
};

request.open("GET", "https://api.github.com/users/tkremer72/repos", true);
request.send();
// let request = new XMLHttpRequest();
// request.onreadystatechange = function(){
//       if(this.readyState == 4 && this.status == 200){
//             let object = JSON.parse(this.responseText);
//             for(let i = 0; i < object.length; i++){
//                   var li = document.createElement('li');
//                   var text = document.createTextNode(object[i].name);
//                   li.appendChild(text);
//             var repo = document.getElementById("gitHub").appendChild(li);             
//             }
//       }
// };
// request.open("GET", "https://api.github.com/users/tkremer72/repos", true);
// request.send();


//AJAX Request that loads GitHub repositories and then lists them ten at a time.


// Change the size of the social accounts icons on hover. 

$(document).ready(function(){
      $(".icon").hover(function(){
            $(this).css("height", "55px").css("width", "55px");
   }, function(){
         $(this).css("height", "45px").css("width", "45px");
   });
});
$(document).ready(function(){
      $(".foot").hover(function(){
            $(this).css("height", "35px").css("width", "35px");
   }, function(){
         $(this).css("height", "25px").css("width", "25px");
   });
});

//Change the background color of an element, in this case the body of the page  to a random color. 

// window.setInterval(function () {

//       var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
// $(document).ready(function() {
//       $("body").css({
//             'background-color': randomColor,
//       });
// });      

// }, 5000);

/*Make the element with the class of blink actually blink, in this case it is the text within the header.*/

// function blink_text() {
//       $('header').fadeOut(1000);
//       $('header').fadeIn(1000);
// }
// setInterval(blink_text, 1000);

/* This next line of code makes the footer stick to the bottom of the page content instead of using a 
fixed or sticky position with the external stylesheet.  */

function footer() {
      $f = $('footer').outerHeight(true);
      $('body').css('min-height', "calc(100vh - " + $f + "px)");
  }