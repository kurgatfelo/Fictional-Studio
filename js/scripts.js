$(document).ready(function(){
    $(".img").click(function(){
        $("#show").toggle();
       
    });
   $(".img1").click(function(){
        $("#show1").toggle();
       
   });
    $(".img2").click(function(){
     $("#show2").toggle();
       
    });
    
});
$(".img4").mouseover(function(){
    $("#image4").show()
})
$(".img4").mouseout(function(){
    $("#image4").hide()
})
$(".img3").mouseover(function(){
    $("#image3").show()
})
$(".img3").mouseout(function(){
    $("#image3").hide()
})
$(".img2").mouseover(function(){
    $("#image2").show()
})
$(".img2").mouseout(function(){
    $("#image2").hide()
})
$(".img1").mouseover(function(){
    $("#image1").show()
})
$(".img1").mouseout(function(){
    $("#image1").hide()
})
$(".img5").mouseover(function(){
    $("#image5").show()
})
$(".img5").mouseout(function(){
    $("#image5").hide()
})
$(".img6").mouseover(function(){
    $("#image6").show()
})
$(".img6").mouseout(function(){
    $("#image6").hide()
})
$(".img7").mouseover(function(){
    $("#image7").show()
})
$(".img7").mouseout(function(){
    $("#image7").hide()
})
$(".img8").mouseover(function(){
    $("#image8").show()
})
$(".img8").mouseout(function(){
    $("#image8").hide()
})
function Validate(mail)
{
    var name=document.getElementById("name").value;
     var email=document.getElementById("email").value;
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
alert(name +"  we have received your email. Thank you for contacting us. ");
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}

