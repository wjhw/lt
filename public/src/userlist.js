define(['jquery', 'template'],function($, template) {

    // 获取用户列表 
    $.ajax({
        url: '/api/user/queryUser',
        type: 'get',
        data: {page: 1,pageSize: 10},
        success: function (info) {
            // console.log(info);
            var html = template('list', info);
            $('tbody').html(html);
        }
    })

    // 用户登录切换
    $('table').on('click','.btn',function(){
        
        var _this = $(this);

        var td = $(this).parent();

        var id = td.attr('data-id');

        var status = td.attr('data-status');

        status = Math.abs(status - 1);
        
        $.ajax({
            url: '/api/user/updateUser',
            type: 'post',
            data: {id: id,isDelete:status},
            success: function(info){
                if(status == 1){
                    _this.text('启 动');
                    td.prev().text('是');
                }else{
                    _this.text('禁 用');
                    td.prev().text('否');
                }

                td.attr('', status);
            }
        })
    })
})