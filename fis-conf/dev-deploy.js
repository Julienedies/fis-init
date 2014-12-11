/**
 * Created by julien.zhang on 2014/10/10.
 */

//开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');


//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用
fis.config.set('pack', {
    '/js/pkg/lib.before.js': [
        '/js/vendor/modernizr-2.6.2.min.js'
    ],
    '/js/pkg/lib.after.js': [
        '/js/vendor/underscore-1.6.0.min.js',
        '/js/vendor/jquery/jquery-1.10.2.min.js',
        '/js/vendor/plugins.js'],
    '/js/pkg/brick.js': ['/js/brick/brick.js'],
    '/js/pkg/common.js': ['/js/common/lang.js', '/js/common/common.js'],
    '/css/pkg/lib.css': [
        '/css/vendor/normalize.css',
        '/css/vendor/main.css'
    ]
});

//开启simple对零散资源的自动合并
//fis.config.set('settings.postpackager.simple.autoCombine', true);
//fis.config.set('settings.postpackager.simple.autoReflow', true);



fis.config.set('project.include', /^\/(?:templates|js|css|img)\/.*$/i);

//fis.config.set('project.exclude', /^\/(?:bower_components\/.*|fis-conf\.js|node-fis\.cmd|package\.json|readme\.md)$/i);


fis.config.set('roadmap.path', [
    {
        reg: /^\/css\/.+\.css/i,
        release: '/assets$&',
        url: '/assets$&',
        useSprite: true,
        useHash: true
    },
    {
        reg: /^\/img\/.+/i,
        release: '/assets$&',
        url: '/assets$&'
    },
    {
        reg: /^\/js\/.+\.js/i,
        release: '/assets$&',
        url: '/assets$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /^\/templates\/(.+\.html)/i,
        release: '/view/$1',
        isHtmlLike: true
    },
    {
        reg: '**.js',
        release: '/assets/js$&',
        url: '/assets/js$&',
        isJsLike: true,
        useHash: true
    },
    {
        reg: /.*(?:include|src|demo)\/.+\.css/i,
        release: '/assets/css$&',
        url: '/assets/css$&',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /.*\/(.+\.css)/i,
        release: '/assets/css/$1',
        url: '/assets/css/$1',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: '**.css',
        release: '/assets/css$&',
        url: '/assets/css$&',
        useSprite: true,
        isCssLike: true,
        useHash: true
    },
    {
        reg: /\/templates\/(.+\.(?:jpg|png|gif))/i,
        release: '/assets/img/$1',
        url: '/assets/img/$1'
    },
    {
        reg: /.*\.(?:jpg|png|gif)/i,
        release: '/assets/img$&',
        url: '/assets/img$&',
        useHash: true
    }
]);


fis.config.set('settings.spriter.csssprites.margin', 10);
fis.config.set('settings.spriter.csssprites.layout', 'matrix');

//使用fis release --dest local来使用这个配置
fis.config.merge({
    deploy : {
        local : {
            to : './express/static',
            exclude : /(?:\/(?:include|src|demo|example|data|test)\/.+\.(?:html|js|css))|(?:\/_[-_\w\d]+\.html)/i
        }
    }
});