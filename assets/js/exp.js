/************ 数据处理模块-BGN  */
var dataModule = ( function(){
    return{

    }

} )()

/************ 数据处理模块-END  */

/************ ui界面处理模块-BGN  */
var uiModule = ( function(){
    const String = {
        zh_s: 'zh-s',
        zh_t: 'zh-t',
        language: 'language',
    };

    // 保证中英文字体字间距不同
    const controlFontSpace = () => {
        let lg = document.getElementById(String.language).value;
        if( lg !== String.zh_s && lg !== String.zh_t ){
            document.querySelector('body').style.letterSpacing = '1px';
        }
        else{
            document.querySelector('body').style.letterSpacing = '3px';
        }
        console.log('参数发生改变',lg);
    }

    return{
        controlFontSpace: ()=>{
            controlFontSpace();
        }

    }

} )()
/************ ui界面处理模块-END  */


/************ 主空模块-BGN  */
var controlModule = ( function( data,ui ){
    
    // 监听
    var setupEventLiteners = ()=>{
        document.getElementById('language').addEventListener('change',ui.controlFontSpace);
        // window.addEventListener('load',ui.controlFontSpace);
    }
    
    return{
        init: ()=>{
            console.log('Start!!!');
            setupEventLiteners();
        }
    }

} )( dataModule,uiModule )
/************ 主空模块-END  */
controlModule.init();

