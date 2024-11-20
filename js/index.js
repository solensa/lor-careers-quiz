//    __            _           _ _     _
//   /__\_   ____ _| |__  _   _(_) | __| |
//  /_\ \ \ / / _` | '_ \| | | | | |/ _` |
// //__  \ V / (_| | |_) | |_| | | | (_| |
// \__/   \_/ \__,_|_.__/ \__,_|_|_|\__,_|
//
//  _
// | |__  _   _
// | '_ \| | | |
// | |_) | |_| |
// |_.__/ \__, |
//         |___/
//  __       _ _     _ _      _          _             _ _
// / _\ __ _| | |_  | (_) ___| | __  ___| |_ _   _  __| (_) ___
// \ \ / _` | | __| | | |/ __| |/ / / __| __| | | |/ _` | |/ _ \
// _\ \ (_| | | |_  | | | (__|   <  \__ \ |_| |_| | (_| | | (_) |
// \__/\__,_|_|\__| |_|_|\___|_|\_\ |___/\__|\__,_|\__,_|_|\___/
//
//==============================================================================
// Robert Claridge
//==============================================================================

var resultsArr = [];
for (let i = 0; i < 4; i++) {
  resultsArr.push("");
}

const lobsterAnswers = ["d", "c", "d", "d", "d"];
const catAnswers = ["b", "b", "b", "b", "b"];
const chameleonAnswers = ["a", "d", "a", "a", "a"];
const RavenAnswers = ["c", "a", "c", "c", "c"];

var quad1 = 0;
var quad2 = 0;
var quad3 = 0;
var quad4 = 0;

var percent1 = 0;
var percent2 = 0;
var percent3 = 0;
var percent4 = 0;

$("input[type='radio']").change(function (e) {
  let answer = e.currentTarget.id.slice(-1); // get's letter of answer
  let boxNum = Number(e.currentTarget.name.match(/\d+/)[0]) + 1; // get's number of box
  resultsArr[boxNum - 2] = answer; // adds answer to results array
  // console.log(answer);
  // console.log(resultsArr);

  let box = "#box" + boxNum;

  $("html,body").animate(
    {
      scrollTop: $(box).offset().top - 100,
    },
    400
  );
});

const submitAnswers = () => {
  // check that all the questions have been answered
  if (resultsArr.includes("")) {
    console.log("incomplete");
    $("#incomplete").removeClass("hide");
    $("#resultsBox").removeClass("hide");
    $("html,body").animate(
      {
        scrollTop: $("#resultsBox").offset().top - 100,
      },
      400
    );
    return;
  } else {
    console.log("complete");
    $("#incomplete").addClass("hide");
    $("#career1").addClass("hide");
    $("#career2").addClass("hide");
    $("#career3").addClass("hide");
    $("#career4").addClass("hide");
  }

  let lobster = 0;
  let cat = 0;
  let chameleon = 0;
  let raven = 0;

  for (let i = 0; i < resultsArr.length; i++) {
    if (resultsArr[i] == lobsterAnswers[i]) {
      lobster++;
    } else if (resultsArr[i] == catAnswers[i]) {
      cat++;
    } else if (resultsArr[i] == chameleonAnswers[i]) {
      chameleon++;
    } else {
      raven++;
    }
  }

  let animals = { lobster, cat, chameleon, raven };
  // compare lobtser, cat, chameleon, raven and find the largest
  let largestVar = Object.keys(animals).reduce((a, b) => (animals[a] > animals[b] ? a : b));

  console.log(lobster, cat, chameleon, raven);
  console.log(`The largest animal is: ${largestVar}`);

  if (largestVar == "lobster") {
    $("#career1").removeClass("hide");
  } else if (largestVar == "cat") {
    $("#career2").removeClass("hide");
  } else if (largestVar == "chameleon") {
    $("#career3").removeClass("hide");
  } else if (largestVar == "raven") {
    $("#career4").removeClass("hide");
  }

  $("#resultsBox").removeClass("hide");
  $("html,body").animate(
    {
      scrollTop: $("#resultsBox").offset().top - 100,
    },
    400
  );

  console.log("submit");
};

// function getLabel(id) {
//    return $("#"+id).next("label").html();
// }

// footer
$(".saltlick").hover(
  function () {
    $(".zilla").addClass("show");
  },
  function () {
    $(".zilla").removeClass("show");
  }
);

function sendEmail(eSubject, eBody) {
  console.log("emailCodeword");
  var titleStr = "Your Leadership Style";
  var bodyStr =
    "Hi Team,%0D%0A%0D%0ACheck out my Leadership style:" +
    "%0D%0A%0D%0ASupporting: " +
    percent1 +
    "%" +
    "%0D%0ACoaching: " +
    percent2 +
    "%" +
    "%0D%0ADelegating: " +
    percent3 +
    "%" +
    "%0D%0ADirecting: " +
    percent4 +
    "%";
  window.open(
    "mailto:nick.blasdale@icloud.com;HLindsay@laingorourke.com;rclaridge@laingorourke.com?subject=" +
      titleStr +
      "&body=" +
      bodyStr
  );
}
