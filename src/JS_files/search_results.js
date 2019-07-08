var results = {};
results["habitat"] = ['outdoors','groups','family'];
results["ev_shelter"] = ['animals','groups'];
results["paws"] = ['animals','groups','family'];
results["cps"] = ['education','family','groups','accessible'];
results["redcross"] = ['healthcare'];
results["library"] = ['education','accessible'];
results["symphony"] = ['healthcare','groups','accessible'];
var interests = ['outdoors','animals','education','healthcare'];
var morefilters = [];

var coll = document.getElementsByClassName("collapsible");
var i;


function updateInterests(clickedItem) {
    
    if (interests.includes(clickedItem)) {
                 interests.splice(interests.indexOf(clickedItem),1);
        }
        else {
                interests.push(clickedItem);
}
console.log(interests);

}

function updateMoreFilters(clickedItem){
    if (morefilters.includes(clickedItem)) {
            morefilters.splice(morefilters.indexOf(clickedItem),1);
        }
        else {
            morefilters.push(clickedItem);
}
console.log(morefilters);

}


function updateFilter() {
for(var key in results) {
  var value = results[key];
  console.log(value);
  var e = document.getElementById(key);
  console.log(e);
  var interest_match = interests.some(r=> value.includes(r));
  var morefilters_match = morefilters.every(r=> value.includes(r))
    if (interest_match && morefilters_match) {
          e.style.display = 'block';
          console.log("element displayed");
       } else {
          e.style.display = 'none';
          console.log("element hidden");
       }
    }

  }

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

