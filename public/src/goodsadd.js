define(['jquery','./utils'], function($){
    
    $('form').on('submit',function(){
        var _this = $(this);
        $.ajax({
            url: '/api//product/addProduct',
            type: 'post',
            data: _this.serialize(),
            success:function(info){
                
            }
        })
        return false;
    });
})