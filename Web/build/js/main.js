"use strict";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return "";
}

function showPopup() {
  setCookie('shown', 'true', 365);
  $("#infoModal").modal('show');
}

function changePage(ev) {
  ev.preventDefault(); // Hide previous page

  var activePage = $("li.actived").data('page');
  $("li.actived").removeClass('actived');
  var hideClass = "#page-" + activePage;
  $(hideClass).addClass('hide'); // Show next page

  var hiddenPage = $(ev.srcElement).parent().data('page');
  var showClass = "#page-" + hiddenPage;
  console.log('Hidden', showClass);
  $(showClass).removeClass('hide');
  $(ev.srcElement).parent().addClass('actived');
}
/**
 * Implementation part
 */


$('.carousel').carousel({
  interval: 5000 //changes the speed

}); // var cookie = getCookie('shown');
// console.log('cookie :', cookie);
// if (!cookie) {
//     showPopup();
// }