/************ 数据处理模块-BGN  */
var dataModule = ( function(){

    return{

    }

} )()

/************ 数据处理模块-END  */

/************ ui界面处理模块-BGN  */
var uiModule = ( function(){
    const String = {
        toggleHidden: 'toggle-hidden',
    };

    const noneItems = ( items ) => {
        document.querySelector( items ).style.display = 'none';
    }

    const blockItems = ( items ) => {
        document.querySelector( items ).style.display = 'block';
    }

    return{
        string: String,
        noneItems: ( items ) => {
            noneItems(items);
        },
        blockItems: (items) => {
            blockItems(items);
        },
    }

} )()
/************ ui界面处理模块-END  */


/************ 主空模块-BGN  */
var controlModule = ( function( data,ui ){

    // 切换显示
    var displayItems = () => {
        let items = ['#title-banner','#banner', '.tong-zhi'];
        items.forEach( e => {
            let now = document.querySelector(e).style.display;
            now == 'none' ? ui.blockItems(e) : ui.noneItems(e); 
        } );
    }
    
    // 监听
    var setupEventLiteners = ()=>{
        // 指定隐藏 document.getElementById( ui.string.toggleHidden ).addEventListener('click',displayItems);
    }
    return{
        init: ()=>{
            setupEventLiteners();
        }
    }

} )( dataModule,uiModule )
/************ 主空模块-END  */
controlModule.init();

