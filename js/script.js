// append

$(".list-group").append("<li class='list-group-item'>First Item</li>");
$(".list-group").append("<li class='list-group-item'>Second Item</li>");

// after

$(".after").after("<button class='btn btn-primary'>After</button>");

// addClass
$(".c_btn").click(() => {
  $(".c_btn").addClass("c_btn_red");
});

// animate

$(".left").click(() => {
  $(".square").animate({ "margin-left": "-=10px" }, "slow");
});
$(".right").click(() => {
  $(".square").animate({ "margin-left": "+=10px" }, "slow");
});

// appendTo

$("<span>I am added</span>").appendTo(".element");

// attr

$(".show_attr").append($(".attr em").attr("title"));

// before

$(".before").before("<span>Hello,</span>");

// blur
$("#target").blur(() => {
  alert("blur event occured");
});

$("#target2").blur(() => {
  alert("blur event occured");
});

// children
$(".children").children().css("color", "red");

// click
$(".click").click(() => {
  $(".show_output").append("button clicked");
});

// clone
$(".show_clone").append($(".original").clone());

// contextmenu
$(".square2").contextmenu(() => {
  $(".square2").toggleClass("contextmenu");
});

// css
$(".c_css").click(() => {
  $(".css").css("display", "none");
});

// dblclick

$(".dblclick").dblclick(() => {
  alert("button double clicked");
});

// delay
$(".btn_delay").click(() => {
  $(".square3").fadeIn(900).delay(800).css("display", "block");
});

// each
$(".list li").each(function (index) {
  console.log($(this).text());
});

// empty
$(".del_btn").click(() => {
  $(".delete_me").empty();
});

// pageX pageY
$(".canvas").mousemove((e) => {
  $(".canvas").text(`pageX : ${e.pageX} pageY : ${e.pageY}`);
});

// mousemove
$(".canvas2").mousemove((e) => {
  $(".canvas2").css("background-color", "skyblue");
});

// event type
$(".event").click((e) => {
  $(".event_type").text(e.type);
});

// fade in
$(".btn-fadeout").click(() => {
  $(".square4").fadeOut("slow");
});

// find
$(".find").find("span").css("color", "red");

// first
$(".lists li").first().css("background-color", "orange");
// last
$(".lists2 li").last().css("background-color", "orange");

// focus
$(".focus").focus(() => {
  $(".input").css("display", "inline").fadeOut(900);
});

// height
$(".h_btn").click(() => {
  const height = $(".height").height();
  $(".h_output").text(`the height of the paragraph is ${height}px`);
});

// hide
$(".hide_btn").click(() => {
  $(".hide").hide();
});

// hover
$(".groups li").hover(() => {
  $(".groups li").fadeOut(100);
  $(".groups li").fadeIn(200);
});

// innerHeight
$(".innerHeight_output").text(
  `innerHeight is ${$(".innerHeight").innerHeight()}px`
);

// innerWidth
$(".innerWidth_output").text(
  `innerWidth is ${$(".innerWidth").innerWidth()}px`
);

// insertAfter
$("#insertAfter").insertAfter("#element");

// insertBefore
$("#insertedElement").insertBefore("#insertBefore");

// is
const evenChilds = $("#browsers li:nth-child(2n)").css("background", "#0ff");
$("#browsers li").click(function () {
  if (evenChilds.is(this)) {
    $(this).slideUp();
  } else {
    $(this).css("background", "red");
  }
});

// extend
const object1 = {
  name: "Jason Jake",
  age: 20,
};

const object2 = {
  favouriteFood: "rice",
};

const mergedObjects = $.extend(object1, object2);

$("#log").text(JSON.stringify(mergedObjects));

// keydown
$(".keydown").keydown((e) => {
  $(".k_output").text(e.type);
});

// next
$(".third-item").next().css("color", "red");

// next all
$(".next-all").nextAll().css("color", "red");

// not
$(".div").not(".plum, .orange").css("border", "4px solid black");

// odd
$(".odd li").odd().css("background-color", "lime");

// parent
$(".child").parent().css("background-color", "lightblue");

// prev
$(".prev").prev().css("background-color", "pink");

// prevall
$(".prevall").prevAll().css("background-color", "pink");

// remove
$(".r_btn").click(() => {
  $(".remove").remove();
});

// remove class
$(".rclass_btn").click(() => {
  $(".removeclass").removeClass("bg-danger");
});

// replace all
$(".rall_btn").click(() => {
  $("<strong class='d-block'>Replaced</strong>").replaceAll(".rall");
});

// select
$(".select").select(() => {
  $(".showValue").text("something was selected").fadeOut(800);
});

// show
$(".show_btn").click(() => {
  $(".show").show("slow");
});

// slide up
$(".slideUpBtn").click(() => {
  $(".slideUp").slideUp("slow");
});

// text
$(".textBtn").click(() => {
  $(".text").text("Hey I am added with text function");
});

$(".t_btn").click(() => {
  $(".p").toggle();
});
