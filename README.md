# RDR2CollectorsMap
<h2>
注意：本项目是为改进出更适合亚洲中国地域附近而创建，并防止因改进过大影响原项目冲突<br/><br/>
Note: This project was created to improve the areas near Asia and China, and to prevent conflicts from affecting the original project due to excessive improvements
<h2>
<h3>
    原作者( Author: jeanropke )：<a href="https://github.com/jeanropke/RDR2CollectorsMap">https://github.com/jeanropke/RDR2CollectorsMap</a><br/>
    改进者( helper: __OO7__ ): <a href="https://github.com/ZTaer" >https://github.com/ZTaer</a>
</h3>
<h4>
    赞助广告: <a href="https://update.leigod.com/soft/channel/LeiGodSetup_ZT.exe" > 雷神加速器快捷下载 </a>
</h4>
<pre>
    文件解析:
        0. 默认zh-s: 
           a) script.js: Settings.language = 'zh-s';
           b) language.js: Settings.language = 'zh-s';
           c) index.html: <option value="zh-s" selected >简体中文</option>
        1. 修改天数:
           a) cycles.json: current: "选择天数";
        2. 设定地图图片地址:
           a) 使用本地地图图片( 切忌不要使用默认的cdn图片链接 )
           var mapLayers = [
                L.tileLayer('https://s.rsg.sc/sc/images/games/RDR2/map/game/{z}/{x}/{y}.jpg', {
                    noWrap: true,
                    bounds: L.latLngBounds(L.latLng(-144, 0), L.latLng(0, 176))
                }),
                L.tileLayer('assets/maps/detailed/{z}/{x}_{y}.jpg', {
                    noWrap: true,
                    bounds: L.latLngBounds(L.latLng(-144, 0), L.latLng(0, 176))
                }),
                L.tileLayer('assets/maps/darkmode/{z}/{x}_{y}.jpg', {
                    noWrap: true,
                    bounds: L.latLngBounds(L.latLng(-144, 0), L.latLng(0, 176))
                })
            ];
</pre>
<pre>
    Already updated:
         0. Replaced JS-CDN plug-in to enable high-speed access in Asia
         Optimized font display
         2. Supplement some font translation
     Updating:
         0. More translations added
     Ready to update:
         0. Click the icon to display the image of the item's location in the game
</pre>

Items locations credits to [GTA Series Videos](https://www.youtube.com/user/GTASeriesVideos), [Gtax Barrett](https://twitter.com/gtaxbarrett), [IronJeff80](https://github.com/IronJeff80) and [/r/RedDeadOnline](https://www.reddit.com/r/RedDeadOnline)

Possible treasures locations by [IronJeff80](https://github.com/IronJeff80), [Dirty Tyler](https://www.youtube.com/channel/UC3LdKFizyou1RfkkmDUUVsg) and [Dean Nutz](https://www.youtube.com/channel/UCBSYrZQsPndOm-zckXNUItw)

Detailed map by [RDR2Map](https://rdr2map.com/)

Dark map by [TDLCTV](https://github.com/TDLCTV)

Thanks for the people over at [https://madamnazar.io/](https://madamnazar.io/) for the API 

Discord for contributors and translators https://discord.gg/HkU6ugT

Items locations credits to [GTA Series Videos](https://www.youtube.com/user/GTASeriesVideos), [Gtax Barrett](https://twitter.com/gtaxbarrett), [IronJeff80](https://github.com/IronJeff80) and [/r/RedDeadOnline](https://www.reddit.com/r/RedDeadOnline)

Possible treasures locations by [IronJeff80](https://github.com/IronJeff80), [Dirty Tyler](https://www.youtube.com/channel/UC3LdKFizyou1RfkkmDUUVsg) and [Dean Nutz](https://www.youtube.com/channel/UCBSYrZQsPndOm-zckXNUItw)

Condor Egg locations by [IronJeff80](https://github.com/IronJeff80) and Overnoess

Detailed map by [RDR2Map](https://rdr2map.com/)

Dark map by [TDLCTV](https://github.com/TDLCTV)

Thanks for the people over at [https://madamnazar.io/](https://madamnazar.io/) for the API 

Discord for contributors and translators https://discord.gg/HkU6ugT


Icons by [Game Icons](https://game-icons.net/)
* https://game-icons.net/1x1/lorc/magnet.html
* https://game-icons.net/1x1/skoll/trench-spade.html
* https://game-icons.net/1x1/lorc/treasure-map.html
* https://game-icons.net/1x1/lorc/spyglass.html
* https://game-icons.net/1x1/sbed/tombstone.html
* https://game-icons.net/1x1/lorc/egg-clutch.html
* https://game-icons.net/1x1/delapouite/sitting-dog.html
* https://game-icons.net/1x1/delapouite/stars-stack.html
* https://game-icons.net/1x1/lorc/pawprint.html
