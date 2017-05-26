document.getElementById("addStockButton").addEventListener("click", addStock);
document.getElementById("addStockButton").addEventListener("click", getSum);
document.getElementById("addStockButton").addEventListener("click", totalQuantities);
document.getElementById("viewStockLevelsButton").addEventListener("click", myStockChart);
document.getElementById("brandDropDownOutput").addEventListener("change", brandFilter);
document.getElementById("colorDropDownOutput").addEventListener("change", colorFilter);
document.getElementById("sizeDropDownOutput").addEventListener("change", sizeFilter);
document.getElementById("stockController").addEventListener("click", viewStockController);
document.getElementById("viewStock").addEventListener("click", viewStockTable);
document.getElementById("openCatalogue").addEventListener("click", viewCatalogue);


var shoeTableScript = document.getElementById("shoeTableScript").innerHTML;
var shoeTableTemplate = Handlebars.compile(shoeTableScript);

var brandDropDownScript = document.getElementById("brandDropDownScript").innerHTML;
var brandDropDownTemplate = Handlebars.compile(brandDropDownScript);

var colorDropDownScript = document.getElementById("colorDropDownScript").innerHTML;
var colorDropDownTemplate = Handlebars.compile(colorDropDownScript);

var sizeDropDownScript = document.getElementById("sizeDropDownScript").innerHTML;
var sizeDropDownTemplate = Handlebars.compile(sizeDropDownScript);



var shoeDataArray = [{
    brandName: "addidas",
    shoeSize: 8,
    shoeColor: "white",
    shoeQuantity: 26
  },

  {
    brandName: "nike",
    shoeSize: 7,
    shoeColor: "red",
    shoeQuantity: 32
  },

  {
    brandName: "puma",
    shoeSize: 12,
    shoeColor: "blue",
    shoeQuantity: 19
  },

  {
    brandName: "reebok",
    shoeSize: 10,
    shoeColor: "black",
    shoeQuantity: 16
  },
];

var addidasQuantity = [26];
var nikeQuantity = [32];
var reebokQuantity = [19];
var pumaQuantity = [16];

var duplicates = [];


var tableLocation = document.getElementById("tableOutput");
var brandDropDownLocation = document.getElementById("brandDropDownOutput");
var colorDropDownLocation = document.getElementById("colorDropDownOutput");
var sizeDropDownLocation = document.getElementById("sizeDropDownOutput");

var shoeData = "";


if (localStorage.getItem("shoeDataArray")) {
  shoeDataArray = JSON.parse(localStorage.getItem("shoeDataArray"));
}

tableLocation.innerHTML = shoeTableTemplate({
  shoeTable: shoeDataArray
});

// brandDropDownLocation.innerHTML = brandDropDownTemplate({
//       dropDownBrands: shoeDataArray
// });

// colorDropDownLocation.innerHTML = colorDropDownTemplate({
//       dropDownColors: shoeDataArray
// });

// sizeDropDownLocation.innerHTML = sizeDropDownTemplate({
//       dropDownSizes: shoeDataArray
// });


if (localStorage.getItem("addidasQuantity")) {
  addidasQuantity = JSON.parse(localStorage.getItem("addidasQuantity"));
}
document.getElementById("addidasQuantity").innerHTML = addidasQuantity.reduce(getSum);



function showBrands() {

  var brandsList = [];
  var brandsMap = {};

  //create a unique list of brands
  // filter my shoe array to only contain unique brands
  for (var i = 0; i < shoeDataArray.length; i++) {
    var shoe = shoeDataArray[i];
    if (brandsMap[shoe.brandName] === undefined) {
      brandsList.push({
        brandName: shoe.brandName
      });
      brandsMap[shoe.brandName] = shoe.brandName;
    }
  }

  // display the options in the dropdown
  var brandDropDownObjects = {
    dropDownBrands: brandsList
  };
  var brandDropDownData = brandDropDownTemplate(brandDropDownObjects);
  document.getElementById("brandDropDownOutput").innerHTML = brandDropDownData;

}

showBrands();



function showColors() {

  var colorsList = [];
  var colorsMap = {};

  //create a unique list of brands
  // filter my shoe array to only contain unique brands
  for (var i = 0; i < shoeDataArray.length; i++) {
    var shoe = shoeDataArray[i];
    if (colorsMap[shoe.shoeColor] === undefined) {
      colorsList.push({
        shoeColor: shoe.shoeColor
      });
      colorsMap[shoe.shoeColor] = shoe.shoeColor;
    }
  }

  // display the options in the dropdown
  var colorsDropDownObjects = {
    dropDownColors: colorsList
  };
  var colorsDropDownData = colorDropDownTemplate(colorsDropDownObjects);
  document.getElementById("colorDropDownOutput").innerHTML = colorsDropDownData;

}

showColors();



function showSizes() {

  var sizeList = [];
  var sizeMap = {};

  //create a unique list of brands
  // filter my shoe array to only contain unique brands
  for (var i = 0; i < shoeDataArray.length; i++) {
    var shoe = shoeDataArray[i];
    if (sizeMap[shoe.shoeSize] === undefined) {
      sizeList.push({
        shoeSize: shoe.shoeSize
      });
      sizeMap[shoe.shoeSize] = shoe.shoeSize;
    }
  }

  // display the options in the dropdown
  var sizeDropDownObjects = {
    dropDownSizes: sizeList
  };
  var sizeDropDownData = sizeDropDownTemplate(sizeDropDownObjects);
  document.getElementById("sizeDropDownOutput").innerHTML = sizeDropDownData;

}

showSizes();









if (localStorage.getItem("nikeQuantity")) {
  nikeQuantity = JSON.parse(localStorage.getItem("nikeQuantity"));
}
document.getElementById("nikeQuantity").innerHTML = nikeQuantity.reduce(getSum);

if (localStorage.getItem("reebokQuantity")) {
  reebokQuantity = JSON.parse(localStorage.getItem("reebokQuantity"));
}
document.getElementById("reebokQuantity").innerHTML = reebokQuantity.reduce(getSum);

if (localStorage.getItem("pumaQuantity")) {
  pumaQuantity = JSON.parse(localStorage.getItem("pumaQuantity"));
}
document.getElementById("pumaQuantity").innerHTML = pumaQuantity.reduce(getSum);

localStorage.setItem("shoeDataArray", JSON.stringify(shoeDataArray));
storedShoeData = JSON.parse(localStorage.getItem("shoeDataArray"));


var brandOptions = document.querySelectorAll(".brandOptions")
var colorOptions = document.querySelectorAll(".colorOptions")
var sizeOptions = document.querySelectorAll(".sizeOptions")


function addStock() {

  var tableShoeObjects = {
    shoeTable: shoeDataArray
  };

  var colorDropDownObjects = {
    dropDownColors: shoeDataArray
  };

  var sizeDropDownObjects = {
    dropDownSizes: shoeDataArray
  };

  var brandNameInput = document.getElementById("brandNameInputID");
  var shoeSizeInput = document.getElementById("shoeSizeInputID");
  var shoeColorInput = document.getElementById("shoeColorInputID");
  var shoeQuantityInput = document.getElementById("shoeQuantityInputID");

  document.getElementById("imagesCollection").style.visibility = "hidden";

  for (var i = 0; i < brandOptions.length; i++) {
    if (brandOptions.value === document.getElementById("brandNameInputID").value) {
      duplicates.push({
        brandName: brandNameInput.value
      })
      alert("duplicate")
    }
  }

  if (brandNameInput.value.startsWith("addidas") && shoeSizeInput.value != ("") && shoeColorInput.value != ("") && shoeQuantityInput.value != ("")) {
    shoeDataArray.push({
      brandName: brandNameInput.value,
      shoeSize: shoeSizeInput.value,
      shoeColor: shoeColorInput.value,
      shoeQuantity: parseInt(shoeQuantityInput.value)
    });

    addidasQuantity.push(parseInt(shoeQuantityInput.value));
    localStorage.setItem("addidasQuantity", JSON.stringify(addidasQuantity));
    storedShoeData = JSON.parse(localStorage.getItem("addidasQuantity"));

    document.getElementById("outputSelectedBrand").innerHTML = "BRAND&nbsp;&nbsp;: " + brandNameInput.value;
    document.getElementById("outputSelectedSize").innerHTML = "SIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + shoeSizeInput.value;
    document.getElementById("outputSelectedColor").innerHTML = "COLOR&nbsp;&nbsp;: " + shoeColorInput.value;
    document.getElementById("outputSelectedQuantity").innerHTML = "Quantity&nbsp;: " + shoeQuantityInput.value;

    document.getElementById("addidasPic").style.visibility = "visible";
    document.getElementById("nikePic").style.visibility = "hidden";
    document.getElementById("pumaPic").style.visibility = "hidden";
    document.getElementById("reebokPic").style.visibility = "hidden";
    document.getElementById("brandPic").style.visibility = "hidden";

  } else if (brandNameInput.value.startsWith("nike") && shoeSizeInput.value != ("") && shoeColorInput.value != ("") && shoeQuantityInput.value != ("")) {
    shoeDataArray.push({
      brandName: brandNameInput.value,
      shoeSize: shoeSizeInput.value,
      shoeColor: shoeColorInput.value,
      shoeQuantity: parseInt(shoeQuantityInput.value)
    });

    nikeQuantity.push(parseInt(shoeQuantityInput.value));
    localStorage.setItem("nikeQuantity", JSON.stringify(nikeQuantity));
    storedShoeData = JSON.parse(localStorage.getItem("nikeQuantity"));

    document.getElementById("outputSelectedBrand").innerHTML = "BRAND&nbsp;&nbsp;: " + brandNameInput.value;
    document.getElementById("outputSelectedSize").innerHTML = "SIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + shoeSizeInput.value;
    document.getElementById("outputSelectedColor").innerHTML = "COLOR&nbsp;&nbsp;: " + shoeColorInput.value;
    document.getElementById("outputSelectedQuantity").innerHTML = "Quantity: " + shoeQuantityInput.value;

    document.getElementById("addidasPic").style.visibility = "hidden";
    document.getElementById("nikePic").style.visibility = "visible";
    document.getElementById("pumaPic").style.visibility = "hidden";
    document.getElementById("reebokPic").style.visibility = "hidden";
    document.getElementById("brandPic").style.visibility = "hidden";

  } else if (brandNameInput.value.startsWith("puma") && shoeSizeInput.value != ("") && shoeColorInput.value != ("") && shoeQuantityInput.value != ("")) {
    shoeDataArray.push({
      brandName: brandNameInput.value,
      shoeSize: shoeSizeInput.value,
      shoeColor: shoeColorInput.value,
      shoeQuantity: parseInt(shoeQuantityInput.value)
    });

    pumaQuantity.push(parseInt(shoeQuantityInput.value));
    localStorage.setItem("pumaQuantity", JSON.stringify(pumaQuantity));
    storedShoeData = JSON.parse(localStorage.getItem("pumaQuantity"));

    document.getElementById("outputSelectedBrand").innerHTML = "BRAND&nbsp;&nbsp;: " + brandNameInput.value;
    document.getElementById("outputSelectedSize").innerHTML = "SIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + shoeSizeInput.value;
    document.getElementById("outputSelectedColor").innerHTML = "COLOR&nbsp;&nbsp;: " + shoeColorInput.value;
    document.getElementById("outputSelectedQuantity").innerHTML = "Quantity: " + shoeQuantityInput.value;

    document.getElementById("addidasPic").style.visibility = "hidden";
    document.getElementById("nikePic").style.visibility = "hidden";
    document.getElementById("pumaPic").style.visibility = "visible";
    document.getElementById("reebokPic").style.visibility = "hidden";
    document.getElementById("brandPic").style.visibility = "hidden";

  } else if (brandNameInput.value.startsWith("reebok") && shoeSizeInput.value != ("") && shoeColorInput.value != ("") && shoeQuantityInput.value != ("")) {
    shoeDataArray.push({
      brandName: brandNameInput.value,
      shoeSize: shoeSizeInput.value,
      shoeColor: shoeColorInput.value,
      shoeQuantity: parseInt(shoeQuantityInput.value)
    });

    reebokQuantity.push(parseInt(shoeQuantityInput.value));
    localStorage.setItem("reebokQuantity", JSON.stringify(reebokQuantity));
    storedShoeData = JSON.parse(localStorage.getItem("reebokQuantity"));

    document.getElementById("outputSelectedBrand").innerHTML = "BRAND&nbsp;&nbsp;: " + brandNameInput.value;
    document.getElementById("outputSelectedSize").innerHTML = "SIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + shoeSizeInput.value;
    document.getElementById("outputSelectedColor").innerHTML = "COLOR&nbsp;&nbsp;: " + shoeColorInput.value;
    document.getElementById("outputSelectedQuantity").innerHTML = "Quantity: " + shoeQuantityInput.value;

    document.getElementById("addidasPic").style.visibility = "hidden";
    document.getElementById("nikePic").style.visibility = "hidden";
    document.getElementById("pumaPic").style.visibility = "hidden";
    document.getElementById("reebokPic").style.visibility = "visible";
    document.getElementById("brandPic").style.visibility = "hidden";

  } else {

    document.getElementById("imagesCollection").style.visibility = "hidden";
    document.getElementById("outputSelectedBrand").innerHTML = "INVALID"
    document.getElementById("outputSelectedSize").innerHTML = "We Specialize in"
    document.getElementById("outputSelectedColor").innerHTML = "Addidas, Nike, Puma & Reebok ONLY"
    document.getElementById("outputSelectedQuantity").innerHTML = "please try again and fill all boxes"

    document.getElementById("addidasPic").style.visibility = "hidden";
    document.getElementById("nikePic").style.visibility = "hidden";
    document.getElementById("pumaPic").style.visibility = "hidden";
    document.getElementById("reebokPic").style.visibility = "hidden";
    document.getElementById("brandPic").style.visibility = "visible";


  };

  var shoeTableData = shoeTableTemplate(tableShoeObjects);
  document.getElementById("tableOutput").innerHTML = shoeTableData;


  showBrands();
  showSizes();
  showColors();

  var colorDropDownData = colorDropDownTemplate(colorDropDownObjects);
  document.getElementById("colorDropDownOutput").innerHTML = colorDropDownData;

  var sizeDropDownData = sizeDropDownTemplate(sizeDropDownObjects);
  document.getElementById("sizeDropDownOutput").innerHTML = sizeDropDownData;


  document.getElementById("tableOutput").style.visibility = "visible";
  document.getElementById("myChart").style.visibility = "hidden";

  document.getElementById("imagesCollection").style.visibility = "hidden";


  localStorage.setItem("shoeDataArray", JSON.stringify(shoeDataArray));
  storedShoeData = JSON.parse(localStorage.getItem("shoeDataArray"));


};


function getSum(total, num) {
  return total + num;

}

function totalQuantities(item) {
  document.getElementById("addidasQuantity").innerHTML = addidasQuantity.reduce(getSum);
  document.getElementById("nikeQuantity").innerHTML = nikeQuantity.reduce(getSum);
  document.getElementById("pumaQuantity").innerHTML = pumaQuantity.reduce(getSum);
  document.getElementById("reebokQuantity").innerHTML = reebokQuantity.reduce(getSum);

};

function myStockChart() {

  document.getElementById("tableOutput").style.visibility = "hidden";
  document.getElementById("myChart").style.visibility = "visible";

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Brands'],
      datasets: [{
        label: 'Addidas',
        data: [document.getElementById("addidasQuantity").innerHTML],
        backgroundColor: "rgba(153,255,51,0.6)"
      }, {
        label: 'Nike',
        data: [document.getElementById("nikeQuantity").innerHTML],
        backgroundColor: "rgba(255,153,0,0.6)"
      }, {
        label: 'Puma',
        data: [document.getElementById("pumaQuantity").innerHTML],
        backgroundColor: "red"
      }, {
        label: 'Reebok',
        data: [document.getElementById("reebokQuantity").innerHTML],
        backgroundColor: "blue"
      }]
    }
  });
};


function brandFilter(evt) {

  var brandNameFilterSelect = document.getElementById("brandNameFilterSelect").value;

  var filteredBrand = shoeDataArray.filter(function(shoeTable) {
    var match = true;

    if (evt.target.id === 'brandNameFilterSelect') {
      return shoeTable.brandName === evt.target.value;
    }

    return true;
  });

  tableLocation.innerHTML = shoeTableTemplate({
    shoeTable: filteredBrand
  });

};

function colorFilter(evt) {

  var colorFilterSelect = document.getElementById("colorFilterSelect").value;

  var filteredColor = shoeDataArray.filter(function(shoeTable) {
    var match = true;

    if (evt.target.id === 'colorFilterSelect') {
      return shoeTable.shoeColor === evt.target.value;
    }

    return true;
  });

  tableLocation.innerHTML = shoeTableTemplate({
    shoeTable: filteredColor
  });

};

function sizeFilter(evt) {

  var sizeFilterSelect = document.getElementById("sizeFilterSelect").value;

  var filteredSize = shoeDataArray.filter(function(shoeTable) {
    var match = true;

    if (evt.target.id === 'sizeFilterSelect') {
      return shoeTable.shoeSize === evt.target.value;
    }

    return true;
  });

  tableLocation.innerHTML = shoeTableTemplate({
    shoeTable: filteredSize
  });

};

function viewStockTable() {
  document.getElementById("tableOutput").style.visibility = "visible";
  document.getElementById("myChart").style.visibility = "hidden";

};

function viewStockController() {
  document.getElementById("selectionCriteriaOutput").style.visibility = "visible";
  document.getElementById("brandQuantities").style.visibility = "visible";
  document.getElementById("shoeInputs").style.visibility = "visible";
  document.getElementById("tableOutput").style.visibility = "visible";
  document.getElementById("filterCriteria").style.visibility = "visible";
  document.getElementById("brandDropDownOutput").style.visibility = "visible";
  document.getElementById("colorText").style.visibility = "visible";
  document.getElementById("colorDropDownOutput").style.visibility = "visible";
  document.getElementById("sizeText").style.visibility = "visible";
  document.getElementById("sizeDropDownOutput").style.visibility = "visible";
  document.getElementById("sizeFilterSelect").style.visibility = "visible";
  document.getElementById("myWelcome").style.visibility = "hidden";
  document.getElementById("myChart").style.visibility = "hidden";
};

function viewCatalogue() {
  document.getElementById("selectionCriteriaOutput").style.visibility = "hidden";
  document.getElementById("brandQuantities").style.visibility = "hidden";
  document.getElementById("shoeInputs").style.visibility = "hidden";
  document.getElementById("tableOutput").style.visibility = "visible";
  document.getElementById("filterCriteria").style.visibility = "visible";
  document.getElementById("brandDropDownOutput").style.visibility = "visible";
  document.getElementById("colorText").style.visibility = "visible";
  document.getElementById("colorDropDownOutput").style.visibility = "visible";
  document.getElementById("sizeText").style.visibility = "visible";
  document.getElementById("sizeDropDownOutput").style.visibility = "visible";
  document.getElementById("sizeFilterSelect").style.visibility = "visible";
  document.getElementById("myWelcome").style.visibility = "hidden";
  document.getElementById("imagesCollection").style.visibility = "visible";
  document.getElementById("addidasPic").style.visibility = "hidden";
  document.getElementById("nikePic").style.visibility = "hidden";
  document.getElementById("pumaPic").style.visibility = "hidden";
  document.getElementById("reebokPic").style.visibility = "hidden";
  document.getElementById("brandPic").style.visibility = "hidden";
  document.getElementById("myChart").style.visibility = "hidden";
};
