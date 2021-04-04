var body = $response.body
var style = 'html,body,.hww53CMqxtL__mobile-promo,.Sl6fgd,.card:not(:empty),.mnr-c:not(:empty),.wxSJCb,.tJHJj{background:#242424!important}.card:not(:empty),.mnr-c:not(:empty){box-shadow:none!important}.zGVn2e,.YSlUOe{background:#212121!important}.xKfQmb .mfMhoc{color:rgba(255,255,255,0.2)!important}.f6F9Be,.As6eLe,.UUbT9,.Fh5muf,.GqbEwc,.ym36Af,.GNJvt{background:#303030!important}.P1Ycoe,.lgcPHd{background:none!important}#gsr{background:#181818!important}.zGVn2e,.Sl6fgd .UUbT9,hr,.oySJpc,.GNJvt,#footer__lgbr{border-color:#303030!important}.M6hT6 #swml,.JQyAhb{border-color:#212121!important}'
body = body.replace('</title>', `</title><style>${style}</style>`)
$done({body})
