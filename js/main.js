//notfiction
$(document).ready(function () {
  $(".clok").click(function () {
    $(".boxnotf").fadeToggle("100");
  });
});
$(document).ready(function () {
  $(".elli").click(function () {
    $(".boxnotff").fadeToggle("100");
  });
});
$(document).ready(function () {
  $("#gridCheck").click(function () {
    $("#rohg").fadeToggle("100");
  });
});

//exten costpage
$(document).ready(function () {
  $(".exten").click(function () {
    $(".creayforr").fadeToggle("100");
  });
});
$(document).ready(function () {
  $(".exten-plus").click(function () {
    $(".creayplus").fadeToggle("100");
  });
});
//plus costpage
$(document).ready(function () {
  $(".plus").click(function () {
    $(".creonmm").show(100);
  });
});
$(document).ready(function () {
  $(".plus-plus").click(function () {
    $(".creonmmf").show(100);
  });
});
$(document).ready(function () {
  $(".nativ").click(function () {
    $(".creonmm").slideUp(100);
  });
});
$(document).ready(function () {
  $(".nativ-nativ").click(function () {
    $(".creonmmf").slideUp(100);
  });
});

//counter page voletion
$(document).ready(function () {
  "use strict";
  var ourcountdown = setInterval(function () {
    var counter = parseInt($("#countdown").html());
    if (counter !== 0) {
      $("#countdown").html(counter - 1);
    } else {
      clearInterval(ourcountdown);
      $("#countdown").html("00:00");
    }
  }, 1000);
});

//shop page
$(document).ready(function () {
  $("#my-tabs p").click(function () {
    var myID = $(this).attr("id");
    $(this).addClass("actshop").siblings().removeClass("actshop");
    $(".pixcinpup").hide();
    $("#" + myID + "-content").fadeIn("1000");
  });
});
//teamwork page
$(document).ready(function () {
  $("#my-celints p").click(function () {
    var myID = $(this).attr("id");
    $(this).addClass("actshop").siblings().removeClass("actshop");
    $(".tableome").hide();
    $("#" + myID + "-contentt").fadeIn("1000");
  });
});

// eye password
let togglePasswordVisibillity = (inputElement, toggLeElement) => {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    toggLeElement.innerHTML = '<i class="fa-regular fa-eye-slash eya"></i>';
  } else {
    inputElement.type = "password";
    toggLeElement.innerHTML = '<i class="fa-regular fa-eye-slash eya"></i>';
  }
};
console.log(togglePasswordVisibillity);
let passwordInput = document.getElementById("password");
let togglepassowrd = document.getElementById("togglepassword");
togglepassowrd.addEventListener("click", () => {
  togglePasswordVisibillity(passwordInput, togglepassowrd);
});



