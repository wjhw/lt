define(['jquery', 'template', 'ckeditor','./utils', 'uploadify'], function($,template,CKEDITOR){
    
    CKEDITOR.replace('ck');

    $('form').on('submit',function(){
        var _this = $(this);
        $.ajax({
            url: '/api/product/addProduct',
            type: 'post',
            data: _this.serialize(),
            success: function(info){
                if(info.success) {
                    location.href = '/goods_list.php';
                }
            }
        });
        return false;
    })

    // jquery一般的使用规律是
    // $(DOM).插件方法（对象格式）
    $('#upfile').uploadify({
        buttonText: '',
        width: 120,
        height: 120,
        fileObjName: 'pic1',
        itemTemplate: '<span></span>',
        // 使用flash
        swf: '/public/assets/uploadify/uploadify.swf',
        // 地址
        uploader: '/api/product/addProductPic',
        onUploadSuccess: function (file, data) {
            console.log(data);
            var res = JSON.parse(data);
            // 图片预览
            $('.preview img').attr('src','http://localhost:3000' + res.picAddr);
            // 将图片放置在隐藏表单中，准备提交
            $('input[name="pic"]').val(res.picAddr);
        }
    });
    // 品牌列表
    $.ajax({
        url: '/api/category/querySecondCategoryPaging',
        type: 'get',
        data: {page: 1, pageSize: 100},
        success:function(info) {
            // console.log(info);
            var html = template('brands',info);
            $('.brand').append(html);
        }
    });

})