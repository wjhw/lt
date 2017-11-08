// 模块公共配置
require.config({
    baseUrl: '/public',
    paths:{
        jquery: 'assets/jquery/jquery.min',
        template: 'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min',
        nprogress: 'assets/nprogress/nprogress',
        echarts: 'assets/echarts/echarts.min',
        ckeditor: 'assets/ckeditor/ckeditor'
    },
    shim: {
        uploadify: {
            deps: ['jquery']
        },
        ckeditor: {
            exports: 'CKEDITOR'
        }
    }
});

// 全局执行的
require(['nprogress', 'jquery'],function(NProgress , $){

    NProgress.start();
    
    NProgress.done();

    // 当Ajax请求时，也需要进度显示
    $(document).ajaxStart(function(){
        NProgress.start();
    }).ajaxStop(function(){
        NProgress.done();
    })
})