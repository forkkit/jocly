exports.view=View={Game:{},Board:{},Move:{}},function(){var e,a,i;View.Game.cbTargetMesh="/res/ring-target.js",View.Game.cbTargetSelectColor=16777215,View.Game.cbTargetCancelColor=16746496,View.Game.cbPromoSize=2e3,View.Game.xdInit=function(i){this.g.fullPath=this.mViewOptions.fullPath,this.cbPieceByType={},e=this.cbVar,a=this.cbDefineView(),this.cbView=a,this.cbClearPieces(),this.cbCreateLights(i),this.cbCreateScreens(i),this.cbCreateBoard(i),this.cbCreatePromo(i),this.cbCreatePieces(i),this.cbCreateCells(i)},View.Game.cbMakeDummyMesh=function(e){return"undefined"!=typeof THREE?new THREE.Mesh(new THREE.CubeGeometry(1e-4,1e-4,1e-4),new THREE.MeshLambertMaterial):null},View.Game.cbCurrentGame=function(){return i},View.Game.cbCreatePieces=function(e){for(var a=this.cbMakeDummyMesh(e),i=0;i<this.cbPiecesCount;i++)e.createGadget("piece#"+i,{base:{},"2d":{type:"sprite"},"3d":{type:"custommesh3d",create:function(e,i,t){return a}}})},View.Game.cbCreateBoard=function(e){var a=this.cbMakeDummyMesh(e);e.createGadget("board",{base:{},"2d":{type:"canvas",width:12e3,height:12e3,draw:function(e){console.warn("board draw must be overridden")}},"3d":{type:"custommesh3d",receiveShadow:!0,create:function(e,i,t){return a}}})},View.Game.cbCreateCells=function(e){for(var a=this,i=0;i<this.g.boardSize;i++)!function(i){e.createGadget("cell#"+i,{"2d":{z:101,type:"element",initialClasses:a.cbCellClass(e,i),width:1300,height:1300}}),e.createGadget("clicker#"+i,$.extend(!0,{"2d":{z:103,type:"element",initialClasses:"cb-clicker"},"3d":{type:"meshfile",file:a.g.fullPath+a.cbTargetMesh,flatShading:!0,castShadow:!0,smooth:0,scale:[.9,.9,.9],materials:{square:{transparent:!0,opacity:0},ring:{color:a.cbTargetSelectColor,opacity:1}}}},a.cbView.clicker))}(i)},View.Game.cbCreatePromo=function(e){e.createGadget("promo-board",{base:{type:"element",x:0,y:0,width:2e3,height:2e3,z:108,css:{"background-color":"White"}}}),e.createGadget("promo-cancel",{base:{type:"image",file:this.g.fullPath+"/res/images/cancel.png",x:0,y:0,width:800,height:800,z:109}});for(var a=0;a<this.g.pTypes.length;a++)e.createGadget("promo#"+a,{base:{y:0,z:109,type:"sprite",clipwidth:100,clipheight:100,width:1200,height:1200}})},View.Game.xdBuildScene=function(t){i=this,e=this.cbVar,a=this.cbDefineView(),this.cbView=a;for(var r=0;r<this.cbExtraLights.length;r++)t.updateGadget("extralights#"+r,{"3d":{visible:!0}});t.updateGadget("board",$.extend({base:{visible:!0}},this.cbView.board));for(var n=0;n<this.g.boardSize;n++)!function(e){var a=i.cbMakeDisplaySpec(e,0),r=$.extend(!0,{},a,{base:{visible:!0}},i.cbView.clicker,i.cbView.cell);t.updateGadget("cell#"+e,r),$.extend(!0,a,i.cbView.clicker),t.updateGadget("clicker#"+e,a)}(n);t.updateGadget("videoa",{"3d":{visible:!0,playerSide:1,z:3e3,y:1==this.mViewAs?1e4:-1e4,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[3,3,3]}}),t.updateGadget("videoabis",{"3d":{visible:!0,playerSide:-1,z:1500,x:1==this.mViewAs?-5500:5500,y:1==this.mViewAs?8900:-8900,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[.75,.75,.75]}}),t.updateGadget("videob",{"3d":{visible:!0,playerSide:-1,z:3e3,y:1==this.mViewAs?-1e4:1e4,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[3,3,3]}}),t.updateGadget("videobbis",{"3d":{visible:!0,playerSide:1,z:1500,x:1==this.mViewAs?5500:-5500,y:1==this.mViewAs?-8900:8900,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[.75,.75,.75]}}),t.updateGadget("promo-board",{base:{visible:!1}}),t.updateGadget("promo-cancel",{base:{visible:!1}});for(var r=0;r<this.g.pTypes.length;r++)t.updateGadget("promo#"+r,{base:{visible:!1}})},View.Game.cbDisplayBoardFn=function(e){var a=this;return function(t,r,n){var s=e.style+"_"+e.margins.x+"_"+e.margins.y+"_"+a.mNotation+"_"+a.mViewAs,c=this;s!=this._cbKey&&(this._cbKey=s,e.display.call(i,e,c,function(e){c.replaceMesh(e,r,n)}))}},View.Game.cbDrawBoardFn=function(e){return function(a){e.draw.call(i,e,this,a)}},View.Game.cbMakeDisplaySpec=function(e,a){var i={};for(var t in this.cbView.coords){var r=this.cbView.coords[t],n=r.call(this,e);i[t]={x:n.x||0,y:n.y||0,z:n.z||0,rotateX:n.rx||0,rotateY:(n.ry||0)*("3d"==t?this.mViewAs*a<0?-1:1:0),rotate:(n.rz||0)+("3d"==t&&this.mViewAs*a<0?180:0)}}return i},View.Game.cbMakeDisplaySpecForPiece=function(i,t,r){function n(e,a,i){return a?$.extend(!0,e,a.default,a[i]):{}}var s=this.cbMakeDisplaySpec(t,r.s);if(void 0===e.pieceTypes[r.t])return void console.warn("Piece type",r.t,"not defined in model");var c=e.pieceTypes[r.t].aspect||e.pieceTypes[r.t].name;return c?(a.pieces&&(s=n(s,a.pieces,c),a.pieces[r.s]&&(s=n(s,a.pieces[r.s],c))),s):void console.warn("Piece type",r.t,"has no aspect defined")},View.Board.xdDisplay=function(e,a){for(var i=0;i<this.pieces.length;i++){var t=this.pieces[i];if(t.p<0)e.updateGadget("piece#"+i,{base:{visible:!1}});else{var r=a.cbMakeDisplaySpecForPiece(a,t.p,t);r=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},r),e.updateGadget("piece#"+i,r)}}for(;i<a.cbPiecesCount;i++)e.updateGadget("piece#"+i,{base:{visible:!1}})},View.Game.cbExtraLights=[{color:16777215,intensity:.8,position:[9,14,-9],props:{shadowCameraNear:10,shadowCameraFar:25,castShadow:!0,shadowMapWidth:2048,shadowMapHeight:2048}}],View.Game.cbCreateLights=function(e){for(var a=0;a<this.cbExtraLights.length;a++)!function(a,i){e.createGadget("extralights#"+i,{"3d":{type:"custommesh3d",create:function(e){var i=new THREE.SpotLight(a.color,a.intensity);i.shadow.camera.far=a.props.shadowCameraFar,i.shadow.camera.near=a.props.shadowCameraNear,i.shadow.mapSize.width=a.props.shadowMapWidth,i.shadow.mapSize.height=a.props.shadowMapHeight,i.position.set.apply(i.position,a.position);var t=new THREE.Mesh;t.add(i);var r=new THREE.Object3D;t.add(r),i.target=r,e(t)}}})}(this.cbExtraLights[a],a)},View.Game.cbCreateScreen=function(e){var a=new THREE.PlaneGeometry(4,3,1,1),i=new THREE.MeshPhongMaterial({color:16777215,map:e,shading:THREE.FlatShading,emissive:{r:1,g:1,b:1}}),t=new THREE.Mesh(a,i);return this.objectReady(t),null},View.Game.cbCreateScreens=function(e){var a=this;e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videoabis",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videobbis",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}})},View.Board.xdInput=function(a,i){function t(){a.updateGadget("promo-board",{base:{visible:!1}}),a.updateGadget("promo-cancel",{base:{visible:!1}})}return{initial:{f:null,t:null,pr:null},getActions:function(r,n){var s={};if(null==n.f)r.forEach(function(e){void 0===s[e.f]&&(s[e.f]={f:e.f,moves:[],click:["piece#"+this.board[e.f],"clicker#"+e.f],view:["clicker#"+e.f],highlight:function(t){a.updateGadget("cell#"+e.f,{"2d":{classes:"select"==t?"cb-cell-select":"cb-cell-cancel",opacity:i.mShowMoves||"cancel"==t?1:0}}),a.updateGadget("clicker#"+e.f,{"3d":{materials:{ring:{color:"select"==t?i.cbTargetSelectColor:i.cbTargetCancelColor,opacity:i.mShowMoves||"cancel"==t?1:0,transparent:!i.mShowMoves&&"cancel"!=t}},castShadow:i.mShowMoves||"cancel"==t}})},unhighlight:function(){a.updateGadget("cell#"+e.f,{"2d":{classes:""}})},validate:{f:e.f}}),s[e.f].moves.push(e)},this);else if(null==n.t)r.forEach(function(r){var n=void 0===r.cg?r.t:r.cg;void 0===s[n]&&(s[n]={t:r.t,moves:[],click:["piece#"+this.board[n],"clicker#"+n],view:["clicker#"+n],highlight:function(e){a.updateGadget("cell#"+n,{"2d":{classes:"select"==e?"cb-cell-select":"cb-cell-cancel",opacity:i.mShowMoves||"cancel"==e?1:0}}),a.updateGadget("clicker#"+n,{"3d":{materials:{ring:{color:"select"==e?i.cbTargetSelectColor:i.cbTargetCancelColor,opacity:i.mShowMoves||"cancel"==e?1:0,transparent:!i.mShowMoves&&"cancel"!=e}},castShadow:i.mShowMoves||"cancel"==e}})},unhighlight:function(e){a.updateGadget("cell#"+n,{"2d":{classes:""}})},validate:{t:r.t},execute:function(t){var n=this;this.cbAnimate(a,i,r,function(){var c=s[r.t].moves;c.length>1&&(a.updateGadget("promo-board",{base:{visible:!0,width:i.cbPromoSize*(c.length+1)}}),a.updateGadget("promo-cancel",{base:{visible:!0,x:c.length*i.cbPromoSize/2}}),c.forEach(function(t,r){var n=e.pieceTypes[t.pr].aspect||e.pieceTypes[t.pr].name,s=$.extend(!0,{},i.cbView.pieces.default,i.cbView.pieces[n]);i.cbView.pieces[this.mWho]&&(s=$.extend(!0,s,i.cbView.pieces[this.mWho].default,i.cbView.pieces[this.mWho][n])),a.updateGadget("promo#"+t.pr,{base:$.extend(s["2d"],{x:(r-c.length/2)*i.cbPromoSize})})},n)),t()})},unexecute:function(){if(null!=r.c){var e=this.pieces[r.c],n=i.cbMakeDisplaySpecForPiece(i,e.p,e);n=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},n),a.updateGadget("piece#"+r.c,n)}var s=this.pieces[this.board[r.f]],c=i.cbMakeDisplaySpecForPiece(i,s.p,s);a.updateGadget("piece#"+s.i,c),t()}}),void 0!==r.cg&&(s[n].validate.cg=r.cg,s[n].execute=function(e){this.cbAnimate(a,i,r,function(){e()})}),s[n].moves.push(r)},this);else if(null==n.pr){var c=[];r.forEach(function(e){void 0!==e.pr&&(void 0===s[e.pr]&&(s[e.pr]={pr:e.pr,moves:[],click:["promo#"+e.pr],validate:{pr:e.pr},cancel:["promo-cancel"],post:t,skipable:!0},c.push(e.pr)),s[e.pr].moves.push(e))},this),c.length>1&&c.forEach(function(e){s[e].view=["promo#"+e]})}return s}}},View.Game.cbCellClass=function(e,a){return"classic-cell "+((a+(a-a%this.g.NBCOLS)/this.g.ROWS)%2?"classic-cell-black":"classic-cell-white")},View.Board.xdPlayedMove=function(e,a,i){a.mOldBoard.cbAnimate(e,a,i,function(){a.MoveShown()})},View.Board.cbAnimate=function(e,a,i,t){function r(){0==--s&&(c&&a.PlaySound("tac"+(1+Math.floor(3*Math.random()))),t())}var n=this,s=1,c=!1,o=this.pieces[this.board[i.f]],l=a.cbMakeDisplaySpec(i.f,o.s),d=a.cbMakeDisplaySpecForPiece(a,i.t,o);for(var m in l){var h=l[m];void 0!==h.z&&function(e){var t=h.z,r=d[e].z,s=n.cbMoveMidZ(a,i,t,r,e),o=t,l=o-s,m=o-r;s!=(t+r)/2&&(c=!0);var u=4*l-2*m,p=-m*m,f=Math.abs(u*u- -4*p),g=(-u-Math.sqrt(f))/-2,b=(-u+Math.sqrt(f))/-2,w=g,v=-w-m;(0==w||-v/(2*w)<0||-v/(2*w)>1)&&(w=b,v=-w-m),d[e].positionEasingUpdate=function(e){var a=(w*e*e+v*e+o)*this.SCALE3D;this.object3d.position.y=a}}(m)}if(c||a.PlaySound("move"+(1+Math.floor(4*Math.random()))),e.updateGadget("piece#"+o.i,d,600,function(){r()}),null!=i.c){s++;var u={positionEasingUpdate:null};switch(a.cbView.captureAnim3d||"movedown"){case"movedown":u.z=-2e3;break;case"scaledown":u.scale=[0,0,0]}var p=this.pieces[i.c];e.updateGadget("piece#"+p.i,{"2d":{opacity:0},"3d":u},600,r)}if(void 0!==i.cg){var h=a.cbVar.castle[i.f+"/"+i.cg],f=h.r[h.r.length-1],o=this.pieces[this.board[i.cg]],d=a.cbMakeDisplaySpecForPiece(a,f,o);s++,e.updateGadget("piece#"+o.i,d,600,function(){r()})}},View.Board.cbMoveMidZ=function(e,a,i,t){return(i+t)/2}}(),function(){View.Game.cbBaseBoard={TEXTURE_CANVAS_CX:1024,TEXTURE_CANVAS_CY:1024,display:function(e,a,i){var t=this;e.getResource=a.getResource,e.createGeometry.call(this,e,function(a){e.createTextureImages.call(t,e,function(r){var n=["diffuse"].concat(e.extraChannels||[]),s={};n.forEach(function(a){var i=document.createElement("canvas");i.width=e.TEXTURE_CANVAS_CX,i.height=e.TEXTURE_CANVAS_CY,s[a]=i}),e.createMaterial.call(t,e,s,function(n){var c=new THREE.Mesh(a,n);e.modifyMesh.call(t,e,c,function(a){e.paint.call(t,e,s,r,function(){i(a)})})})})})},createTextureImages:function(e,a){var i=this,t={},r=0,n=e.texturesImg||{};for(var s in n)r++;if(0==r)a(t);else for(var s in n)!function(s){e.getResource("image|"+i.g.fullPath+n[s],function(e){t[s]=e,0==--r&&a(t)})}(s)},createMaterial:function(e,a,i){var t=new THREE.Texture(a.diffuse);t.needsUpdate=!0;var r={specular:"#050505",shininess:30,map:t};if(a.bump){var n=new THREE.Texture(a.bump);n.needsUpdate=!0,r.bumpMap=n,r.bumpScale=.05}i(new THREE.MeshPhongMaterial(r))},modifyMesh:function(e,a,i){i(a)},prePaint:function(e,a,i,t,r){r()},paint:function(e,a,i,t,r){r()},postPaint:function(e,a,i,t,r){r()},paintChannel:function(e,a,i,t){},draw:function(e,a,i){var t=this;e.getResource=a.getResource,e.createTextureImages.call(this,e,function(a){e.paintChannel.call(t,e,i,a,"diffuse")})}}}(),function(){function e(e){for(var a=JSON.stringify(e),i=0,t=0;t<a.length;t++)i=(i<<5)-i+a.charCodeAt(t),i&=i;return i}var a,i={};View.Game.cbDisplayPieceFn=function(i){var t=this,r=e(i);return function(e,n,s){a=this.getResource;var c=/^piece#([0-9]+)$/.exec(this.gadget.id);if(!c)return null;var o=parseInt(c[1]),l=t.cbCurrentGame();if(o>=l.mBoard.pieces.length)return null;var d=l.mBoard.pieces[o],m=l.cbVar.pieceTypes[d.t].aspect||l.cbVar.pieceTypes[d.t].name,h=m+"_"+r+"_"+d.s,u=this;h!=this._cbKey&&(this._cbKey=h,u.options=n,l.cbMakePiece(i,m,d.s,function(e){u.replaceMesh(e,u.options,s)}))}},View.Game.cbMakePiece=function(a,t,r,n){function s(e,a,i){return a?$.extend(!0,e,a.default,a[i]):{}}if(!a)return void console.error("piece-view: style is not defined");var c=s({},a,t);a[r]&&(c=s(c,a[r],t));var o=e(c),l=i[o];Array.isArray(l)?l.push(n):l?n(new THREE.Mesh(l.geometry,l.material)):(i[o]=[n],c.loadResources.call(this,c,function(e){c.displayPiece.call(this,c,e,function(){var a=i[o];i[o]={geometry:e.geometry,material:e.material},a.forEach(function(a){a(new THREE.Mesh(e.geometry,e.material))})})}))},View.Game.cbClearPieces=function(){i={}},View.Game.cbBasePieceStyle={default:{mesh:{jsFile:function(e,a){a(new THREE.CubeGeometry(1,1,1),new THREE.MeshPhongMaterial({}))},smooth:0,rotateZ:0},loadMesh:function(e,i){"function"==typeof e.mesh.jsFile?e.mesh.jsFile(e,i):a("smoothedfilegeo|"+e.mesh.smooth+"|"+this.g.fullPath+e.mesh.jsFile,i)},loadImages:function(e,i){function t(){0==--n&&i(s)}var r=this,n=1,s={};for(var c in e.materials){var o=e.materials[c].channels;for(var l in o)if(o[l].texturesImg)for(var d in o[l].texturesImg)!function(e,i){n++,a("image|"+r.g.fullPath+i,function(a){s[e]=a,t()})}(d,o[l].texturesImg[d])}t()},loadResources:function(e,a){function i(){0==--s&&a({geometry:r,images:t,textures:{},loadedMaterials:n})}var t,r,n,s=2;e.loadMesh.call(this,e,function(a,t){if(!a._cbZRotated){var s=new THREE.Matrix4;s.makeRotationY(e.mesh.rotateZ*Math.PI/180),a.applyMatrix(s),a._cbZRotated=!0}r=a,n=t,i()}),e.loadImages.call(this,e,function(e){t=e,i()})},displayPiece:function(e,a,i){e.makeMaterials.call(this,e,a),i()},paintTextureImageClip:function(e,a,i,t,r,n,s,c,o){var l=a.canvas.width,d=a.canvas.height;if(r.patternFill&&r.patternFill[n]){var m=r.patternFill[n];a.save();var h=document.createElement("canvas");h.width=l,h.height=d,ctxTmp=h.getContext("2d"),ctxTmp.fillStyle=m,ctxTmp.fillRect(0,0,l,d),ctxTmp.globalCompositeOperation="destination-in",ctxTmp.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),a.drawImage(h,0,0,l,d,0,0,l,d),a.restore()}else a.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d)},paintTextureImage:function(e,a,i,t,r,n,s,c){var o;o=r.clipping&&r.clipping[n]?r.clipping[n]:{x:0,y:0,cx:s.width,cy:s.height},e.paintTextureImageClip.call(this,e,a,i,t,r,n,s,o,c)},paintTexture:function(e,a,i,t,r){var n=e.materials[i].channels[t];for(var s in n.texturesImg){var c=r.images[s];e.paintTextureImage.call(this,e,a,i,t,n,s,c,r)}},makeMaterialTextures:function(e,a,i){for(var t in e.materials[a].channels){var r=e.materials[a].channels[t],n=document.createElement("canvas");n.width=r.size.cx,n.height=r.size.cy;var s=n.getContext("2d");e.paintTexture.call(this,e,s,a,t,i);var c=new THREE.Texture(n);c.needsUpdate=!0,i.textures[a][t]=c}},makeMaterials:function(e,a){a.textures={};for(var i in e.materials)a.textures[i]={},e.makeMaterialTextures.call(this,e,i,a),e.makeMaterial.call(this,e,i,a)}}},View.Game.cbTokenPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterials:function(e,a){a.textures={};for(var i in e.materials)a.textures[i]={},e.makeMaterialTextures.call(this,e,i,a);var t=[];for(var r in a.loadedMaterials){var n=a.loadedMaterials[r].clone(),s=n.name;if(e.materials[s]){$.extend(!0,n,e.materials[s].params);for(var c in e.materials[s].channels)switch(c){case"diffuse":n.map=a.textures[s][c];break;case"bump":n.bumpMap=a.textures[s][c]}}t.push(n)}var o=new THREE.MultiMaterial(t);a.material=o}}}),View.Game.cbUniformPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterial:function(e,a,i){var t=e.materials[a].params;t.map=i.textures[a].diffuse,t.normalMap=i.textures[a].normal;var r=e.materials[a].channels.normal.normalScale||1;t.normalScale=new THREE.Vector2(r,r);var n=new THREE.MeshPhongMaterial(t);i.material=n,i.geometry.mergeVertices(),i.geometry.computeVertexNormals()}}}),View.Game.cbPhongPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{phongProperties:{color:"#ffffff",shininess:300,specular:"#ffffff",emissive:"#222222",shading:"undefined"!=typeof THREE?THREE.FlatShading:0},makeMaterials:function(e,a){var i=new THREE.MeshPhongMaterial(e.phongProperties);a.material=i}}})}(),function(){var e=0,a=0,i={};View.Game.cbEnsureConstants=function(){a||(a=this.cbVar.geometry.height,e=this.cbVar.geometry.width)},View.Game.cbCSize=function(t){this.cbEnsureConstants();var r=i[t.margins.x+"_"+t.margins.y];if(!r){var n,s,c,o,l=e+2*t.margins.x,d=a+2*t.margins.y;n=l/d,o=n<1?12e3*n/l:12e3/n/d,s=(e+2*t.margins.x)*o,c=(a+2*t.margins.y)*o,r={cx:o,cy:o,pieceCx:o,pieceCy:o,ratio:n,width:s,height:c},i[t.margins.x+"_"+t.margins.y]=r}return r},View.Game.cbGridBoard=$.extend({},View.Game.cbBaseBoard,{notationMode:"out",coordsFn:function(i){return i=i||{},i.margins=i.margins||{x:0,y:0},function(t){var r=this.cbCSize(i),n=t%e,s=(t-n)/e;return 1==this.mViewAs&&(s=a-1-s),this.mViewAs==-1&&(n=e-1-n),{x:(n-(e-1)/2)*r.cx,y:(s-(a-1)/2)*r.cy,z:0}}},createGeometry:function(e,a){var i=this.cbCSize(e),t=i.width/1e3,r=i.height/1e3,n=new THREE.PlaneGeometry(t,r),s=new THREE.Matrix4;s.makeRotationX(-Math.PI/2),n.applyMatrix(s);for(var c=n.faceVertexUvs[0],o=0;o<c.length;o++)for(var l=0;l<c[o].length;l++)i.ratio<1&&(c[o][l].x=c[o][l].x*i.ratio+(1-i.ratio)/2),i.ratio>1&&(c[o][l].y=c[o][l].y/i.ratio+(1-1/i.ratio)/2);a(n)},paintBackground:function(e,a,i,t,r,n){i.boardBG&&a.drawImage(i.boardBG,-r/2,-n/2,r,n)},paintChannel:function(e,a,i,t){var r=this.cbCSize(e);e.paintBackground.call(this,e,a,i,t,r.width,r.height)},paint:function(e,a,i,t){for(var r in a){var n=a[r].getContext("2d");n.save(),n.scale(e.TEXTURE_CANVAS_CX/12e3,e.TEXTURE_CANVAS_CY/12e3),n.translate(6e3,6e3),e.paintChannel.call(this,e,n,i,r),n.restore()}t()}}),View.Game.cbGridBoardClassic=$.extend({},View.Game.cbGridBoard,{colorFill:{".":"rgba(160,150,150,0.9)","#":"rgba(0,0,0,1)"," ":"rgba(0,0,0,0)"},texturesImg:{boardBG:"/res/images/wood.jpg"},modifyMesh:function(e,a,i){function t(e,a){var i=new THREE.Shape;return i.moveTo(-e/2,-a/2),i.lineTo(e/2,-a/2),i.lineTo(e/2,a/2),i.lineTo(-e/2,a/2),i}var r=this.cbCSize(e),n=r.width/1e3,s=r.height/1e3,c=t(n+.5+.1,s+.5+.1),o=t(n+.1,s+.1);c.holes.push(o);var l={amount:.4,steps:1,bevelSize:.1,bevelThickness:.04,bevelSegments:1},d=new THREE.ExtrudeGeometry(c,l),m=new THREE.Matrix4;m.makeRotationX(-Math.PI/2),d.applyMatrix(m),blackMat=new THREE.MeshPhongMaterial({color:"#000000",shininess:500,specular:"#888888",emissive:"#000000"});var h=new THREE.Mesh(d,blackMat);h.position.y=-l.amount-.01,a.add(h);var u=new THREE.Mesh(new THREE.BoxGeometry(n,s,.1),blackMat);u.rotation.x=Math.PI/2,u.position.y=-.1,a.add(u),i(a)},paintCell:function(e,a,i,t,r,n,s,c,o){a.strokeStyle="rgba(0,0,0,1)",a.lineWidth=15,a.fillStyle="bump"==t?"#ffffff":e.colorFill[r],a.fillRect(n-c/2,s-o/2,c,o),a.rect(n-c/2,s-o/2,c,o)},paintCells:function(i,t,r,n){for(var s=this.cbCSize(i),c=i.coordsFn(i),o=0;o<a;o++)for(var l=0;l<e;l++){var d=1==this.mViewAs?l+o*e:e*a-(1+l+o*e),m=c.call(this,d),h=this.cbView.boardLayout[a-o-1][l],u=m.x,p=m.y,f=s.cx,g=s.cy;i.paintCell.call(this,i,t,r,n,h,u,p,f,g)}},paintLines:function(i,t,r,n){var s=this.cbCSize(i);t.strokeStyle="#000000",t.lineWidth=40,t.strokeRect(-e*s.cx/2,-a*s.cy/2,e*s.cx,a*s.cy)},paintChannel:function(e,a,i,t){var r=this.cbCSize(e);e.paintBackground.call(this,e,a,i,t,r.width,r.height),e.paintCells.call(this,e,a,i,t),e.paintLines.call(this,e,a,i,t),this.mNotation&&e.paintNotation.call(this,e,a,t)},paintNotation:function(e,a,i){var t=this.cbCSize(e);switch(a.textAlign="center",a.textBaseline="middle",a.fillStyle="#000000",a.font=Math.ceil(t.cx/3)+"px Monospace",e.notationMode){case"out":e.paintOutNotation.apply(this,arguments);break;case"in":e.paintInNotation.apply(this,arguments)}},paintOutNotation:function(i,t,r){for(var n=this.cbCSize(i),s=0;s<a;s++){var c=a-s;this.mViewAs<0&&(c=s+1);var o=-(e/2+i.margins.x/2)*n.cx,l=(s-a/2+.5)*n.cy;t.fillText(c,o,l)}for(var d=0;d<e;d++){var m=d;this.mViewAs<0&&(m=e-d-1);var o=(d-e/2+.5)*n.cx,l=(a/2+i.margins.y/2)*n.cy;t.fillText(String.fromCharCode(97+m),o,l)}},paintInNotation:function(i,t,r){var n=this.cbCSize(i),s=i.coordsFn(i),c=i.colorFill;t.font=Math.ceil(n.cx/5)+"px Monospace";for(var o=0;o<a;o++)for(var l=0;l<e;l++){var d=a-o,m=l;this.mViewAs<0?m=e-l-1:d=o+1;var h=1==this.mViewAs?l+o*e:e*a-(1+l+o*e),u=s.call(this,h);switch(t.fillStyle="rgba(0,0,0,0)","bump"==r&&(t.fillStyle=c["."]),this.cbView.boardLayout[a-o-1][l]){case".":t.fillStyle="bump"==r?c["."]:c["#"];break;case"#":t.fillStyle=c["."]}var p=u.x-n.cx/3,f=u.y-n.cy/3;i.notationDebug?t.fillText(h,p,f):t.fillText(String.fromCharCode(97+m)+d,p,f)}}}),View.Board.cbMoveMidZ=function(e,a,i,t){var r=e.cbVar.geometry,n=r.C(a.f),s=r.C(a.t),c=r.R(a.f),o=r.R(a.t);return s-n==0||o-c==0||Math.abs(s-n)==Math.abs(o-c)?(i+t)/2:Math.max(i,t)+1500},View.Game.cbGridBoardClassic2D=$.extend({},View.Game.cbGridBoardClassic,{colorFill:{".":"#F1D9B3","#":"#C7885D"," ":"rgba(0,0,0,0)"}}),View.Game.cbGridBoardClassic3DMargin=$.extend({},View.Game.cbGridBoardClassic,{margins:{x:.67,y:.67},extraChannels:["bump"]}),View.Game.cbGridBoardClassic2DMargin=$.extend({},View.Game.cbGridBoardClassic2D,{margins:{x:.67,y:.67}}),View.Game.cbGridBoardClassic2DNoMargin=$.extend({},View.Game.cbGridBoardClassic2D,{margins:{x:0,y:0},notationMode:"in",texturesImg:{boardBG:"/res/images/whitebg.png"}})}(),function(){View.Game.cbMakrukBoard=$.extend({},View.Game.cbGridBoardClassic,{colorFill:{".":"rgba(0,0,0,0)"},paintLines:function(e,a,i,t){a.strokeStyle="rgba(0,0,0,1)",a.lineWidth=30,a.stroke()}}),View.Game.cbMakrukBoard3DMargin=$.extend({},View.Game.cbMakrukBoard,{margins:{x:.47,y:.47},extraChannels:["bump"],texturesImg:{boardBG:"/res/images/wood-chipboard-5.jpg"}}),View.Game.cbMakrukBoard2DMargin=$.extend({},View.Game.cbMakrukBoard,{margins:{x:.47,y:.47},colorFill:{".":"rgba(0,0,0,0)"},texturesImg:{boardBG:"/res/images/wood-chipboard-4.jpg"}})}(),function(){var e={cx:512,cy:512};View.Game.cbMakrukPieceStyle=function(e){return $.extend(!0,{1:{default:{"2d":{clipy:0}}},"-1":{default:{"2d":{clipy:100}}},default:{"3d":{display:this.cbDisplayPieceFn(this.cbMakrukPieceStyle3D)},"2d":{file:this.mViewOptions.fullPath+"/res/images/wikipedia.png",clipwidth:100,clipheight:100}},"mk-pawn":{"2d":{clipx:0}},"mk-knight":{"2d":{clipx:100}},"mk-bishop":{"2d":{clipx:200}},"mk-rook":{"2d":{clipx:300}},"mk-queen":{"2d":{clipx:400}},"mk-king":{"2d":{clipx:500}}},e)},View.Game.cbMakrukPieceStyle3D=$.extend(!0,{},View.Game.cbUniformPieceStyle3D,{default:{mesh:{normalScale:1,rotateZ:180},materials:{mat0:{channels:{diffuse:{size:e},normal:{size:e}}}}},1:{default:{materials:{mat0:{params:{specular:328965,shininess:200}}},paintTextureImageClip:function(e,a,i,t,r,n,s,c,o){var l=a.canvas.width,d=a.canvas.height;"diffuse"==t?(a.globalCompositeOperation="normal",a.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),a.globalCompositeOperation="normal",a.fillStyle="rgba(255,238,202,0.8)",a.fillRect(0,0,512,512)):a.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d)}}},"-1":{default:{materials:{mat0:{params:{specular:1118481,shininess:100}}},paintTextureImageClip:function(e,a,i,t,r,n,s,c,o){var l=a.canvas.width,d=a.canvas.height;"diffuse"==t?(a.globalCompositeOperation="normal",a.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),a.globalCompositeOperation="normal",a.fillStyle="rgba(250,30,0,0.5)",a.fillRect(0,0,512,512)):a.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d)}}},"mk-pawn":{mesh:{jsFile:"/res/makruk/pawn/mk-pawn.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/makruk/pawn/mk-pawn-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/makruk/pawn/mk-pawn-normalmap.jpg"}}}}}},"mk-knight":{mesh:{jsFile:"/res/makruk/knight/mk-knight.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/makruk/knight/mk-knight-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/makruk/knight/mk-knight-normalmap.jpg"}}}}}},"mk-bishop":{mesh:{jsFile:"/res/makruk/bishop/mk-bishop.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/makruk/bishop/mk-bishop-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/makruk/bishop/mk-bishop-normalmap.jpg"}}}}}},"mk-rook":{mesh:{jsFile:"/res/makruk/rook/mk-rook.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/makruk/rook/mk-rook-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/makruk/rook/mk-rook-normalmap.jpg"}}}}}},"mk-queen":{mesh:{jsFile:"/res/makruk/queen/mk-queen.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/makruk/queen/mk-queen-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/makruk/queen/mk-queen-normalmap.jpg"}}}}}},"mk-king":{mesh:{jsFile:"/res/makruk/king/mk-king.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/makruk/king/mk-king-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/makruk/king/mk-king-normalmap.jpg"}}}}}}})}(),function(){View.Game.cbDefineView=function(){return{coords:{"2d":this.cbGridBoard.coordsFn.call(this,this.cbMakrukBoard2DMargin),"3d":this.cbGridBoard.coordsFn.call(this,this.cbMakrukBoard3DMargin)},boardLayout:["........","........","........","........","........","........","........","........"],board:{"2d":{draw:this.cbDrawBoardFn(this.cbMakrukBoard2DMargin)},"3d":{display:this.cbDisplayBoardFn(this.cbMakrukBoard3DMargin)}},clicker:{"2d":{width:1400,height:1400},"3d":{scale:[.9,.9,.9]}},pieces:this.cbMakrukPieceStyle({default:{"2d":{width:1400,height:1400},"3d":{scale:[.6,.6,.6]}}})}},View.Board.cbMoveMidZ=function(e,a,i,t){return"N"==a.a?Math.max(i,t)+1500:(i+t)/2}}();