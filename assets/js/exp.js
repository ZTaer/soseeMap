/************ 数据处理模块-BGN  */
var dataModule = ( function(){

    const langInit = (idName,lang) => {
        let test = document.getElementById( idName ).value = lang;
    }

    return{
        langInit: ( idName,lang ) => {
            langInit( idName,lang );
        }

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
    }

    return{
        controlFontSpace: ()=>{
            controlFontSpace();
        },
        string: String,
    }

} )()
/************ ui界面处理模块-END  */


/************ 主空模块-BGN  */
var controlModule = ( function( data,ui ){
    // 监听
    var setupEventLiteners = ()=>{
        document.getElementById('language').addEventListener('change',ui.controlFontSpace);
        window.addEventListener('load',  ui.controlFontSpace, data.langInit( ui.string.language, ui.string.zh_s ) );
    }
    return{
        init: ()=>{
            setupEventLiteners();
        }
    }

} )( dataModule,uiModule )
/************ 主空模块-END  */
controlModule.init();

