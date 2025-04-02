"use strict";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function showPopup() {
  setCookie("shown", "true", 365);
  $("#infoModal").modal("show");
}
function changePage(ev) {
  ev.preventDefault();
  // Hide previous page
  var activePage = $("li.actived").data("page");
  $("li.actived").removeClass("actived");
  var hideClass = "#page-" + activePage;
  $(hideClass).addClass("hide");
  // Show next page
  var hiddenPage = $(ev.srcElement).parent().data("page");
  var showClass = "#page-" + hiddenPage;
  console.log("Hidden", showClass);
  $(showClass).removeClass("hide");
  $(ev.srcElement).parent().addClass("actived");
}
function loadData() {
  console.log("Loading data...");
  console.log("Cenik", CENIK);
  $("#zakladni_osetreni_value").text(CENIK.zakladni_osetreni + " " + CENIK.postposition + " " + CENIK.currency);
  $("#masaz_chodidel_value").text(CENIK.masaz_chodidel + " " + CENIK.postposition + " " + CENIK.currency);
  $("#osetreni_nohou_value").text(CENIK.osetreni_nohou + " " + CENIK.postposition + " " + CENIK.currency);
  $("#odstraneni_kurich_ok_value").text(CENIK.odstraneni_kurich_ok + " " + CENIK.postposition + " " + CENIK.currency);
  $("#nadmerne_odstraneni_zrohovatele_kuze_value").text(CENIK.preposition + " " + CENIK.nadmerne_odstraneni_zrohovatele_kuze + " " + CENIK.postposition + " " + CENIK.currency);
  $("#lakovani_barevne_value").text(CENIK.lakovani_barevne + " " + CENIK.postposition + " " + CENIK.currency);
  $("#lakovani_francouzske_value").text(CENIK.lakovani_francouzske + " " + CENIK.postposition + " " + CENIK.currency);
  $("#dekorativni_zdobeni_value").text(CENIK.dekorativni_zdobeni + " " + CENIK.postposition + " " + CENIK.currency);
  $("#odlakovani_stareho_laku_value").text(CENIK.odlakovani_stareho_laku + " " + CENIK.postposition + " " + CENIK.currency);
  $("#darkovy_poukaz_value").text(CENIK.darkovy_poukaz + " " + CENIK.postposition + " " + CENIK.currency);
}

/**
 * Implementation part
 */
$(".carousel").carousel({
  interval: 3000 //changes the speed
});

// load json data
loadData();

// var cookie = getCookie('shown');
// console.log('cookie :', cookie);
// if (!cookie) {
//     showPopup();
// }