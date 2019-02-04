$("#img1").on("click", function() {
  $("#exampleModalLongTitle").html("Project 1");
  $(".modal-body").html("description of project 1");
  $(".modal-image").html('<img class="img-thumbnail" src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg">');
  $("#exampleModalCenter").modal("show");
})

 $("#link1").on("click", function () {
    const copyText = ($(this)[0]);
    console.log(copyText);
    // copyText.select();
    alert(copyText);
    document.execCommand("copy");
  })