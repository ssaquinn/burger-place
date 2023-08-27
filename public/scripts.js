//Load javascript and jquery
$(document).ready(function () {
  //Load Timepicker
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();
  console.log(time);

  // Item variables set prices

  var chickenPrice = 15.99;
  var chickenTotal = 0.0;
  var classicPrice = 17.99;
  var classicTotal = 0.0;
  var hawaianPrice = 13.99;
  var hawaianTotal = 0.0;
  var totalPrice = 0.0;
  var extrasPrice = 2.99;
  var extrasTotal = 0.0;
  var clxChTotal = 0.0;
  var clxMTotal = 0.0;
  var chxChTotal = 0.0;
  var chxMTotal = 0.0;
  var haxChTotal = 0.0;
  var haxMTotal = 0.0;

  // Timepicker set time

  $("#setTime").timepicker({
    timeFormat: "h:mm p",
    interval: 20,
    minTime: time,
    maxTime: "11.59pm",
    dynamic: true,
    dropdown: true,
    scrollbar: true,
  });

  // CUSTOMER DETAILS: -user applies
  // Delivery type:
  // Delivery type: Delivery

  $("#deliveryYes").click(function () {
    $("#deliveryType").css("display", "none");
    $("#customerDetails").css("display", "initial");
    $("#deliveryRecord").html("Delivery");
    $("#customerDetailsBox").attr("disabled", false);
    $("#customerName").attr("disabled", false);
    $("#customerPhone").attr("disabled", false);
    $("#customerAddress").attr("disabled", false);
  });

  // the above code set(Delivery type: Delivery) in vanilla javascript
  // document.getElementById("deliveryYes").onclick = function () {
  //   console.log("deliveryClicked");
  //   document.getElementById("deliveryType").style.display = "none";
  //   document.getElementById("customerDetails").style.display = "initial";
  //   document.getElementById("deliveryRecord").innerHTML = "Delivery";
  //   document.getElementById("customerDetailsBox").disabled = false;
  //   document.getElementById("customerName").disabled = false;
  //   document.getElementById("customerPhone").disabled = false;
  //   document.getElementById("customerAddress").disabled = false;
  // };

  //Customer details:
  //Delivery Type
  //Delivery type: Pickup
  $("#pickUp").click(function () {
    $("#deliveryType").css("display", "none");
    $("#customerDetails").css("display", "initial");
    $("#deliveryRecord").html("Pick-up");
    $("#customerDetailsBox").attr("disabled", false);
    $("#customerName").attr("disabled", false);
    $("#customerPhone").attr("disabled", false);
    $("#customerAddress").attr("disabled", false);
  });

  //Customer details:
  //Customer details: Name, Phone, Address

  $("#customerDetailsBox").click(function () {
    if ($("#customerName").val() == "") {
      alert("Please enter your name");
    } else if ($("#customerPhone").val() == "") {
      alert("Please enter your phone number");
    } else if ($("#customerAddress").val() == "") {
      alert("Please enter your Address");
    } else {
      $("#customerDetails").css("display", "none");
      $("#deliveryTime").css("display", "initial");
      $("#nameRecord").html($("#customerName").val());
      $("#phoneRecord").html($("#customerPhone").val());
      $("#addressRecord").html($("#customerAddress").val());
      $("#deliveryTimeBox").attr("disabled", false);
    }
  });

  //Customer details:
  //Set time:

  $("#deliveryTimeBox").click(function () {
    if ($("#setTime").val() == "") {
      alert("Please enter a delivery/pickup time");
    } else {
      $("#deliveryTime").css("display", "none");
      $("#orderSelection").css("display", "initial");
      $("#timeRecord").html($("#setTime").val());
      $("#modalTime").html($("#setTime").val());
      $("#orderSelectionBox").attr("disabled", false);
      $(".foodOrder").css("display", "flex");
      $(".countBurger").attr("disabled", false);
    }
  });

  //Order Display:Classic

  $("#classic").change(function () {
    calcClassic();
    calcTotal();
    $("#classicRecord").html(
      "<div class='burgerDisplay'>Classic Burger:</div><div class='quantity'>" +
        $("#classic").val() +
        "</div><div class='cost'>" +
        classicTotal.toFixed(2) + // toFixed set to 2 decimal places.
        "</div>"
    );
    $("#classicDisplay").html(
      "<div class='burgerDisplay'>Classic Burger:</div><div class='quantity'>" +
        $("#classic").val() +
        "</div><div class='cost'>" +
        classicTotal.toFixed(2) +
        "</div>"
    );
    if ($("#classic").val() > 0) {
      $("#customCL").attr("disabled", false);
    } else {
      $("#customCL").attr("disabled", true);
    }
  });

  //Order Display: Chicken
  $("#chicken").change(function () {
    calcChicken();
    calcTotal();
    $("#chickenRecord").html(
      "<div class='burgerDisplay'>Chicken Burger:</div><div class='quantity'>" +
        $("#chicken").val() +
        "</div><div class='cost'>" +
        chickenTotal.toFixed(2) +
        "</div>"
    );
    $("#chickenDisplay").html(
      "<div class='burgerDisplay'>Chicken Burger:</div><div class='quantity'>" +
        $("#chicken").val() +
        "</div><div class='cost'>" +
        chickenTotal.toFixed(2) +
        "</div>"
    );
    if ($("#chicken").val() > 0) {
      $("#customCH").attr("disabled", false);
    } else {
      $("#customCH").attr("disabled", true);
    }
  });

  //Order Display: Hawaian

  $("#hawaian").change(function () {
    calcHawaian();
    calcTotal();
    $("#hawaianRecord").html(
      "<div class='burgerDisplay'>Hawaian Burger:</div><div class='quantity'>" +
        $("#hawaian").val() +
        "</div><div class='cost'>" +
        hawaianTotal.toFixed(2) +
        "</div>"
    );
    $("#hawaianDisplay").html(
      "<div class='burgerDisplay'>Hawaian Burger:</div><div class='quantity'>" +
        $("#hawaian").val() +
        "</div><div class='cost'>" +
        hawaianTotal.toFixed(2) +
        "</div>"
    );
    if ($("#hawaian").val() > 0) {
      $("#customHA").attr("disabled", false);
    } else {
      $("#customHA").attr("disabled", true);
    }
  });

  //Order Items calculations:

  function calcClassic() {
    classicTotal = $("#classic").val() * classicPrice;
  }

  function calcChicken() {
    chickenTotal = $("#chicken").val() * chickenPrice;
  }

  function calcHawaian() {
    hawaianTotal = $("#hawaian").val() * hawaianPrice;
  }

  function calcExtras() {
    clxChTotal = $("#classicCheese").val() * extrasPrice;
    clxMTotal = $("#classicMeat").val() * extrasPrice;
    chxChTotal = $("#chickenCheese").val() * extrasPrice;
    chxMTotal = $("#chickenMeat").val() * extrasPrice;
    haxChTotal = $("#hawaianCheese").val() * extrasPrice;
    haxMTotal = $("#hawaianMeat").val() * extrasPrice;
    extrasTotal =
      clxChTotal + clxMTotal + chxChTotal + chxMTotal + haxChTotal + haxMTotal;
    calcTotal();
  }

  function calcTotal() {
    totalPrice = classicTotal + chickenTotal + hawaianTotal + extrasTotal;
    var formatter = new Intl.NumberFormat("en-NZ", {
      style: "currency",
      currency: "NZD",
    });
    totalPrice = formatter.format(totalPrice);
    $("#totalDisplay").html(
      "<div class='displayTotalWord'>Total</div><div class='displayTotalAmount'>" +
        totalPrice +
        "</div>"
    );
    $("#totalRecord").html(
      "<div class='displayTotalWord'>Total</div><div class='displayTotalAmount'>" +
        totalPrice +
        "</div>"
    );
  }
  //modals
  //Classic Custom
  $("#customCL").click(function () {
    $("#modalCL").modal({ closeExisting: false });
    $("#classicMeat").attr("max", $("#classic").val());
    $("#classicCheese").attr("max", $("#classic").val());
  });
  // modal: Classic Custom Cheese
  $("#classicCheese").change(function () {
    calcExtras();
    var contentString = "";
    if ($("#classicCheese").val() == 0) {
      contentString = "";
    } else {
      contentString =
        "<div class='burgerDisplay'>extra cheese</div><div class='quantity'>" +
        $("#classicCheese").val() +
        "</div><div class='cost'>" +
        clxChTotal +
        "</div>";
    }

    $("#clxChRecord").html(contentString);
    $("#clxChDisplay").html(contentString);
  });

  //Modal: Classic custom Meat
  $("#classicMeat").change(function () {
    calcExtras();
    var contentString = "";
    if ($("#classicMeat").val() == 0) {
      contentString = "";
    } else {
      contentString =
        "<div class='burgerDisplay'>extra meat</div><div class='quantity'>" +
        $("#classicMeat").val() +
        "</div><div class='cost'>" +
        clxMTotal +
        "</div>";
    }

    $("#clxMRecord").html(contentString);
    $("#clxMDisplay").html(contentString);
  });

  // Modal Chicken Custom
  $("#customCH").click(function () {
    $("#modalCH").modal({ closeExisting: false });
    $("#chickenMeat").attr("max", $("#chicken").val());
    $("#chickenCheese").attr("max", $("#chicken").val());
  });

  // modal: Chicken Custom Cheese
  $("#chickenCheese").change(function () {
    calcExtras();
    var contentString = "";
    if ($("#chickenCheese").val() == 0) {
      contentString = "";
    } else {
      contentString =
        "<div class='burgerDisplay'>extra cheese</div><div class='quantity'>" +
        $("#chickenCheese").val() +
        "</div><div class='cost'>" +
        chxChTotal +
        "</div>";
    }
    $("#chxChRecord").html(contentString);
    $("#chxChDisplay").html(contentString);
  });

  //Modal: Chicken custom Meat
  $("#chickenMeat").change(function () {
    calcExtras();
    var contentString = "";
    if ($("#chickenMeat").val() == 0) {
      contentString = "";
    } else {
      contentString =
        "<div class='burgerDisplay'>extra meat</div><div class='quantity'>" +
        $("#chickenMeat").val() +
        "</div><div class='cost'>" +
        chxMTotal +
        "</div>";
    }

    $("#chxMRecord").html(contentString);
    $("#chxMDisplay").html(contentString);
  });
  // ModalHawaian Custom
  $("#customHA").click(function () {
    $("#modalHA").modal({ closeExisting: false });
    $("#hawaianMeat").attr("max", $("#hawaian").val());
    $("#hawaianCheese").attr("max", $("#hawaian").val());
  });
  // modal: Hawaian Custom Cheese
  $("#hawaianCheese").change(function () {
    calcExtras();
    var contentString = "";
    if ($("#hawaianCheese").val() == 0) {
      contentString = "";
    } else {
      contentString =
        "<div class='burgerDisplay'>extra cheese</div><div class='quantity'>" +
        $("#hawaianCheese").val() +
        "</div><div class='cost'>" +
        haxChTotal +
        "</div>";
    }
    $("#haxChRecord").html(contentString);
    $("#haxChDisplay").html(contentString);
  });

  //Modal: Hawaian custom Meat
  $("#hawaianMeat").change(function () {
    calcExtras();
    var contentString = "";
    if ($("#hawaianMeat").val() == 0) {
      contentString = "";
    } else {
      contentString =
        "<div class='burgerDisplay'>extra meat</div><div class='quantity'>" +
        $("#hawaianMeat").val() +
        "</div><div class='cost'>" +
        haxMTotal +
        "</div>";
    }

    $("#haxMRecord").html(contentString);
    $("#haxMDisplay").html(contentString);
  });

  //Modals
  //Modal:Customer confirms Order Details

  $("#orderSelectionBox").click(function () {
    if (totalPrice == 0) {
      alert("Please select your burger");
    } else {
      $("#orderSelection").css("display", "none");
      $("#record").modal({
        closeExisting: false,
      });
    }
  });

  if ($(window).width() >= 481) {
    $(".foodOrder").css("display", "flex");
  }
  // disable number typing

  $("[type='number']").keypress(function (evt) {
    evt.preventDefault();
  });
});
