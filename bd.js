var body = $response.body
var style = 'html,#page,#header,.tab_news .tab-news-content,.menu-container,.searchbox-exp #index-form,.s-loading-frame.bottom,.his-wrap-new,#index-card .suggest-div,.sug-edit,.his-more-icon,body .se-page-hd,.se-head-tablink,.se-head-tabcover,.se-page-bd,.se-form,.c-tags-item{background:#242424!important}.c-slink-new-strong,.defaultmode .c-slink-new,.c-container,.c-bg-color-white,.defaultmode .c-container-tight,.c-source-new .middle .text,.c-source-new .middle .icon-wrapper,.se-page-controller .new-pagenav,.se-page-copyright,.se-page-ft,.banner{background:#303030!important}.his-wrap-new .fix-wrap{background:#212121!important}.channel-mgr-wrapper .mgr-mask,.his-wrap-new #index-form .index-fix{background:none!important}.channel-mgr-wrapper #channel_mgr{background-color:#242424!important}#header>div:last-child{display:none}.rn-container a,.his-wrap-new .fix-wrap,.his-wrap-new #index-form .his,.his-wrap-new #index-form .sug,.se-head-tablink{border-color:#212121!important}.c-color-source,.c-tags-item{color:rgba(255,255,255,0.2)!important}.c-tags-scroll-right-mask{box-shadow:0 0 .2rem .2rem #242424!important}'
body = body.replace('</title>', `</title><style>${style}</style>`)
$done({body})
