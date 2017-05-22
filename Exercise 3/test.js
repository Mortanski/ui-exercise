$(function(){
    
    //Show/hide sidebar
    $(document).on("click", "#sideBarNav", function(){
        $("#sideBar").toggleClass("open");
        return false;
    });
    $(document).on("click", "#sideBarClose", function(){
        $("#sideBar").removeClass("open");
        return false;
    });

    //make sidebar same height as content (sidebar always smaller in this mock up)
    $(window).on("load resize",function(e){
        $("#sideBar").css("height", "auto");
        if($(window).width()>=703) {            
            var sbHeight = $("main").outerHeight();
            $("#sideBar").css("height", sbHeight +"px");
        }
    });
})