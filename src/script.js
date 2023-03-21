$("#checkin").on("change", function (e) {
  if ($("#checkout").val()) {
    let start = moment($("#checkin").val());
    let end = moment($("#checkout").val());
    let period = end.diff(start);
    let duration = Math.ceil(moment.duration(period).asDays());
    $("#days").val(duration);
    if ($("#adults").find(":selected").val()) {
      getCost(start, end);
    }
  }
  $("#checkout").attr({
    min: $("#checkin").val()
  });
});

$("#checkout").on("change", function (e) {
  if ($("#checkin").val()) {
    let start = moment($("#checkin").val());
    let end = moment($("#checkout").val());
    let period = end.diff(start);
    let duration = Math.ceil(moment.duration(period).asDays());
    $("#days").val(duration);
    if ($("#adults").find(":selected").val()) {
      getCost(start, end);
    }
  }
  $("#checkin").attr({
    max: $("#checkout").val()
  });
});

function getCost(start, end) {
  let duration = moment.duration(end.diff(start)).asDays();
  $("#cost").val(150 * duration * $("#adults").val());
}

$("#reset").on("click", function (e) {
  toastr["info"]("Fields cleared!");
  $("#username").val("");
  $("#firstName").val("");
  $("#lastName").val("");
  $("#phone").val("");
  $("#fax").val("");
  $("#email").val("");
  $("#adults").val("1");
  $("#checkin").val("");
  $("#checkout").val("");
  $("#days").val("");
  $("#cost").val("");
  $("#message").val("");
  $("#range").val("");
});

$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    var username = $("#username").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phone = $("#phone").val();
    var fax = $("#fax").val();
    var email = $("#email").val();
    var cost = $("#cost").val();
    if (
      username == "" ||
      firstName == "" ||
      lastName == "" ||
      phone == "" ||
      fax == "" ||
      email == "" ||
      cost == "" ||
      cost < 0
    ) {
      if (username == "") {
        $("#username").addClass("empty-field");
        toastr.error("Please fill in Username.");
      } else {
        $("#username").removeClass("empty-field");
      }
      if (firstName == "") {
        $("#firstName").addClass("empty-field");
        toastr.error("Please fill in First Name.");
      } else {
        $("#firstName").removeClass("empty-field");
      }
      if (lastName == "") {
        $("#lastName").addClass("empty-field");
        toastr.error("Please fill in Last Name.");
      } else {
        $("#lastName").removeClass("empty-field");
      }
      if (phone == "") {
        $("#phone").addClass("empty-field");
        toastr.error("Please fill in Phone Number.");
      } else {
        $("#phone").removeClass("empty-field");
      }
      if (fax == "") {
        $("#fax").addClass("empty-field");
        toastr.error("Please fill in Fax Number.");
      } else {
        $("#fax").removeClass("empty-field");
      }
      if (email == "") {
        $("#email").addClass("empty-field");
        toastr.error("Please fill in Email.");
      } else {
        $("#email").removeClass("empty-field");
      }
      if (cost == "") {
        $("#cost").addClass("empty-field");
        toastr.error("No cost!");
      } else {
        $("#cost").removeClass("empty-field");
      }
      if (cost < 0) {
        $("#cost").addClass("empty-field");
        toastr.error("Cost cannot be negative!");
      } else {
        $("#cost").removeClass("empty-field");
      }
    } else {
      toastr.success("Submitted Successfully!");
    }
  });
});
