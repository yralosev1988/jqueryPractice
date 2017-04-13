/**
 * Created by Losiev on 13.04.2017.
 */
$(document).ready(function(){

$(".accordion h5").not(":first").hide();
$(".accordion h4").on("click", function(){
  var findAccordionItem=$(this).next("h5");
  var findAccordionWrapper=$(this).closest(".accordion");


  if(findAccordionItem.is(":visible")){
    findAccordionItem.slideUp();
  }else{
    findAccordionWrapper.find("h5").slideUp();
    findAccordionItem.slideDown();
  }
});




});