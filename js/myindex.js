$(document).ready(function() {
    var curPage =1,
        numOfPages = $('.skw-page').length,
        animTime =1000,
        scrolling =false,
        pgPrefix =".skw-page-";
    
    
    
function pagination(){
      scrolling =true;
    $(pgPrefix + curPage).removeClass('inactive').addClass('active');
    $(pgPrefix + (curPage - 1)).addClass('inactive');
    $(pgPrefix + (curPage + 1)).removeClass("active");
    
    setTimeout( function(){
          scrolling =false;
    }, animTime);
    
}    
function navigateUp(){
    if(curPage ===1) return;
    curPage--;
    pagination();
}    

function navigateDown(){
    if(curPage === numOfPages) return;
    curPage++;
    pagination();
}
    
$(document).on('keydown', function(e){
    if(scrolling) return;
    
    if(e.which ===38) { 
        navigateUp();
    } else if( e.which===40) {
        navigateDown();
        
    }
    
});
    
$(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });    
    
 });












