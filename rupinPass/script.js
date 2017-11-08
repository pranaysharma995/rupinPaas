$(document).ready(function()
                 {
    $("div.topNav a").on("click",function(event)
                        {
        event.preventDefault();
        event.stopPropagation();
        var element=$(this);
        var id="#"+element.text();
        console.log(id);
        var linkElement=$(id);
        var top=linkElement.offset().top;
        $("html,body").animate({scrollTop:top},1000,"linear");
    });
    
    var i=0;
    var element=$("div.description");
    for(i=0;i<element.length;i=i+1)
        {
            if(i===0)
                {
                    $(element[i]).css("display","block");
                }
            else{
                 $(element[i]).css("display","none");
            }
           
        }
    $("button.btn.next").on("click",function()
                           {
        var parent=$(this).parent();
        var grandParent=$("div.description").index(parent);
        grandParent=grandParent+1;
        if(grandParent>=element.length)
            {
                grandParent=0;
            }
        for(i=0;i<element.length;i=i+1)
            {
                if(i===grandParent)
                    {
                          $(element[i]).css("display","block");
                    }
                else{
                      $(element[i]).css("display","none");
                }
            }
       
    });
     $("button.btn.prev").on("click",function()
                           {
        var parent=$(this).parent();
        var grandParent=$("div.description").index(parent);
        if(grandParent===0)
            {
                grandParent=element.length-1;
            }
         else{
             grandParent=grandParent-1;
         }
       
        for(i=0;i<element.length;i=i+1)
            {
                if(i===grandParent)
                    {
                          $(element[i]).css("display","block");
                    }
                else{
                      $(element[i]).css("display","none");
                }
            }
       
    })
 
    
});