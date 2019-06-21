<script>
// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>


/**

- Create a variable and store an array of image names inside of it (reference the [3] carousel / images folder for names)

- Create a variable called currentPosition to track our position in our array as we click Next or Prev (when we create it, assign it a value of 0).

- User clicks next button

-- Add 1 to currentPosition
-- console.log(currentPosition)

- User clicks prev button

-- Subtract 1 currentPosition
-- console.log(currentPosition)

imagesArray[currentPosition];

HW - NUMBER of likes should be associated with each image

*/

/**
var images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg"];
var likes = [121,150,1000,50,7,90];

var currentPosition = 0;

$("#votes").html("Likes: " + likes[0]);

$("#next").on("click", function(){

  $("#prev").attr("disabled", false);

  currentPosition += 1;

  if(currentPosition == images.length-1){
    // We are at the end
    console.log(images[currentPosition]);
    $("#image-to-vote-on").attr("src", "images/" + images[currentPosition]);
    $("#votes").html("Likes: " + likes[currentPosition]);
    $(this).attr("disabled", true);
  } else {
    // We haven't reached the end yet
    console.log(images[currentPosition]);
    $("#image-to-vote-on").attr("src", "images/" + images[currentPosition]);
    $("#votes").html("Likes: " + likes[currentPosition]);
    $(this).attr("disabled", false);
  }

});


$("#prev").on("click", function(){
  $("#next").attr("disabled", false);

  currentPosition -= 1;

  if(currentPosition == 0){
    // We are at the start
    console.log(images[currentPosition]);
    $("#image-to-vote-on").attr("src", "images/" + images[currentPosition]);
    $("#votes").html("Likes: " + likes[currentPosition]);
    $(this).attr("disabled", true);

  } else {
    // We haven't reached the start yet
    console.log(images[currentPosition]);
    $("#image-to-vote-on").attr("src", "images/" + images[currentPosition]);
    $("#votes").html("Likes: " + likes[currentPosition]);
    $(this).attr("disabled", false);
  }
});

$("#upvote").on("click", function(){
  likes[currentPosition] += 1;
  $("#votes").html("Likes: " + likes[currentPosition]);
  console.log(likes);
});

$("#downvote").on("click", function(){
  likes[currentPosition] -= 1;
  $("#votes").html("Likes: " + likes[currentPosition]);
  console.log(likes);
});
*/
