exports.config = {"status":true,"model":{"plazza":"true","released":1405068614,"title-en":"Tutti-Frutti Chess","module":"chessbase","summary":"Ralph Betza et Philip Cohen, 1978-79","thumbnail":"tutti-frutti-thumb.png","rules":{"en":"tutti-frutti-rules.html"},"credits":{"en":"tutti-frutti-credits.html"},"gameOptions":{"preventRepeat":true,"uctTransposition":"state","uctIgnoreLoop":false,"levelOptions":{"pieceValueFactor":1,"pieceValueRatioFactor":1,"posValueFactor":0.1,"averageDistKingFactor":-0.01,"castleFactor":0.1,"minorPiecesMovedFactor":0.1,"checkFactor":0.2,"endingKingFreedomFactor":0.01,"endingDistKingFactor":0.05,"distKingCornerFactor":0.1,"distPawnPromo1Factor":0.3,"distPawnPromo2Factor":0.1,"distPawnPromo3Factor":0.05}},"obsolete":false,"js":["base-model.js","grid-geo-model.js","tutti-frutti-model.js"],"description":{"en":"tutti-frutti-description.html"},"levels":[{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"name":"easy","label":"Easy","maxNodes":1000},{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"name":"fast","label":"Fast [1sec]","maxDuration":1,"isDefault":true},{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"name":"medium","label":"Medium","maxNodes":10000,"maxDuration":10},{"ai":"uct","playoutDepth":0,"minVisitsExpand":1,"c":0.6,"ignoreLeaf":false,"uncertaintyFactor":3,"name":"strong","label":"Strong","maxNodes":20000,"maxDuration":15}]},"view":{"title-en":"Chessbase view","module":"chessbase","xdView":true,"css":["chessbase.css"],"preferredRatio":1,"useShowMoves":true,"useNotation":true,"useAutoComplete":true,"defaultOptions":{"sounds":true,"moves":true,"notation":false,"autocomplete":false},"skins":[{"name":"skin3d","title":"3D Classic","3d":true,"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","smoothedfilegeo|0|/res/fairy/pawn/pawn.js","image|/res/fairy/pawn/pawn-diffusemap.jpg","image|/res/fairy/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/fairy/knight/knight.js","image|/res/fairy/knight/knight-diffusemap.jpg","image|/res/fairy/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/fairy/bishop/bishop.js","image|/res/fairy/bishop/bishop-diffusemap.jpg","image|/res/fairy/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/fairy/king/king.js","image|/res/fairy/king/king-diffusemap.jpg","image|/res/fairy/king/king-normalmap.jpg","smoothedfilegeo|0|/res/fairy/rook/rook.js","image|/res/fairy/rook/rook-diffusemap.jpg","image|/res/fairy/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/fairy/queen/queen.js","image|/res/fairy/queen/queen-diffusemap.jpg","image|/res/fairy/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/fairy/amazon/amazon.js","image|/res/fairy/amazon/amazon-diffusemap.jpg","image|/res/fairy/amazon/amazon-normalmap.jpg","smoothedfilegeo|0|/res/fairy/marshall/marshall.js","image|/res/fairy/marshall/marshall-diffusemap.jpg","image|/res/fairy/marshall/marshall-normalmap.jpg","smoothedfilegeo|0|/res/fairy/cardinal/cardinal.js","image|/res/fairy/cardinal/cardinal-diffusemap.jpg","image|/res/fairy/cardinal/cardinal-normalmap.jpg"],"world":{"lightIntensity":1.3,"skyLightIntensity":1.2,"lightCastShadow":true,"fog":false,"color":4686804,"lightPosition":{"x":-9,"y":9,"z":9},"skyLightPosition":{"x":9,"y":9,"z":9},"lightShadowDarkness":0.55,"ambientLightColor":2236962},"camera":{"fov":45,"distMax":50,"radius":18,"elevationAngle":60,"elevationMin":0}},{"name":"skin2d","title":"2D Classic","3d":false,"preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/fairy/wikipedia-fairy-sprites.png"]}],"animateSelfMoves":false,"switchable":true,"sounds":{"move1":"alq_move1","move2":"alq_move2","move3":"alq_move3","move4":"alq_move2","tac1":"alq_tac1","tac2":"alq_tac2","tac3":"alq_tac1","promo":"promo","usermove":null},"js":["base-view.js","grid-board-view.js","fairy-set-view.js","tutti-frutti-view.js"],"visuals":{"600x600":["res/visuals/tutti-frutti-600x600-3d.jpg","res/visuals/tutti-frutti-600x600-2d.jpg"]}}}