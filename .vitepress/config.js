const path = require('path');
//const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'web前端技术,前端思考,ECMAS,js,css3,vue' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ['link', { href: '/@theme/styles/default.css', rel:"stylesheet" }],
  ],
  title: "前端思考",
  description: "前端思考，web前端代码及新技术试验场",
  markdown: {
    // 代码显示行号
    lineNumbers: true,
  },
  enhanceAppFiles: path.resolve(__dirname, './enhanceApp.ts'),
  //theme:'reform',
  themeConfig: {
    logo: '/assets/images/logo.svg',
    type: "blog",
    tags:"tags",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category" // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag" // 默认文案 “标签”
      }
    },
    author: "Amu",
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Terminal", link: "/terminal/" },
      { text: "Demos", link: "/demos/" },
      { text: "Editor online", link: "/editor/" },
      { text: "标签云", link: "/tags/",tags:true },
      { text: "图博", link: "https://xinyi.tuchong.com/" },
	    { text: 'Github', link: 'https://github.com/artskin' }
    ],
    sidebar: 'auto',
    sidebarDepth : 1,
    gitalk: {
      // gitalk的主要参数
      clientID: `2912f33e7eba2ba9f38d`,
      clientSecret: `9c5cb6059d6118122e70e237179855954df54ee5`,
      repo: `vuepress`,
      owner: "artskin",
      admin: ["artskin"],
      accessToken: 'your accessToken ',
      labelRule: `(title,path)=> {
        let paths=path.split('/')
        if(paths.length>0){
          let res = paths.pop()
          if(res===''){
            res=paths.pop()
          }
          res = res.slice(-50)
          return res
        }else{
          return title
        }
      }`
    },
  },
  dest: "public",
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',
      // 其他的 Vssue 配置
      owner: 'artskin',
      repo: 'vuepress',
      clientId: 'be6226886eb40a308a27',
      clientSecret: 'e0b8c567ae32beb6cf994c064ecc69c0571c9f70',
    },
    'gitalk':true,
    'demo-block':true,
    'vuepress-plugin-typescript':true,
    'typescript':{
      tsLoaderOptions: {
        // ts-loader 的所有配置项
      },
    },
    axios:true
  
  },
  configureWebpack: {
    plugins: [
      //new MonacoWebpackPlugin()
    ]
  }
};
