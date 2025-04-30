gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDScoreDisplayObjects1= [];
gdjs.ShopCode.GDScoreDisplayObjects2= [];
gdjs.ShopCode.GDBuyButtonObjects1= [];
gdjs.ShopCode.GDBuyButtonObjects2= [];
gdjs.ShopCode.GDMultiObjects1= [];
gdjs.ShopCode.GDMultiObjects2= [];
gdjs.ShopCode.GDPriceObjects1= [];
gdjs.ShopCode.GDPriceObjects2= [];
gdjs.ShopCode.GDNameboostObjects1= [];
gdjs.ShopCode.GDNameboostObjects2= [];
gdjs.ShopCode.GDBackObjects1= [];
gdjs.ShopCode.GDBackObjects2= [];


gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.ShopCode.GDBackObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects = Hashtable.newFrom({"BuyButton": gdjs.ShopCode.GDBuyButtonObjects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ShopCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 40);
}
}
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nameboost"), gdjs.ShopCode.GDNameboostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.ShopCode.GDPriceObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.ShopCode.GDScoreDisplayObjects1);
{for(var i = 0, len = gdjs.ShopCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDScoreDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.ShopCode.GDPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Price")));
}
}{for(var i = 0, len = gdjs.ShopCode.GDNameboostObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDNameboostObjects1[i].getBehavior("Text").setText("Multitap level 1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9583636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.ShopCode.GDScoreDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{for(var i = 0, len = gdjs.ShopCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDScoreDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nameboost"), gdjs.ShopCode.GDNameboostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Price")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDNameboostObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDNameboostObjects1[i].getBehavior("Text").getText() == "Multitap level 1" ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDNameboostObjects1[k] = gdjs.ShopCode.GDNameboostObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDNameboostObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9585100);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.ShopCode.GDScoreDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Price")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(2);
}{for(var i = 0, len = gdjs.ShopCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDScoreDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuyButton"), gdjs.ShopCode.GDBuyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nameboost"), gdjs.ShopCode.GDNameboostObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDBuyButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Price")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ShopCode.GDNameboostObjects1.length;i<l;++i) {
    if ( gdjs.ShopCode.GDNameboostObjects1[i].getBehavior("Text").getText() == "Multitap level 1" ) {
        isConditionTrue_0 = true;
        gdjs.ShopCode.GDNameboostObjects1[k] = gdjs.ShopCode.GDNameboostObjects1[i];
        ++k;
    }
}
gdjs.ShopCode.GDNameboostObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9586900);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ShopCode.GDNameboostObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Price"), gdjs.ShopCode.GDPriceObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreDisplay"), gdjs.ShopCode.GDScoreDisplayObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Price")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(2);
}{for(var i = 0, len = gdjs.ShopCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDScoreDisplayObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Price")) * 2);
}{for(var i = 0, len = gdjs.ShopCode.GDPriceObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDPriceObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Price")));
}
}{for(var i = 0, len = gdjs.ShopCode.GDNameboostObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDNameboostObjects1[i].getBehavior("Text").setText("Multitap level 2");
}
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDScoreDisplayObjects1.length = 0;
gdjs.ShopCode.GDScoreDisplayObjects2.length = 0;
gdjs.ShopCode.GDBuyButtonObjects1.length = 0;
gdjs.ShopCode.GDBuyButtonObjects2.length = 0;
gdjs.ShopCode.GDMultiObjects1.length = 0;
gdjs.ShopCode.GDMultiObjects2.length = 0;
gdjs.ShopCode.GDPriceObjects1.length = 0;
gdjs.ShopCode.GDPriceObjects2.length = 0;
gdjs.ShopCode.GDNameboostObjects1.length = 0;
gdjs.ShopCode.GDNameboostObjects2.length = 0;
gdjs.ShopCode.GDBackObjects1.length = 0;
gdjs.ShopCode.GDBackObjects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);
gdjs.ShopCode.GDScoreDisplayObjects1.length = 0;
gdjs.ShopCode.GDScoreDisplayObjects2.length = 0;
gdjs.ShopCode.GDBuyButtonObjects1.length = 0;
gdjs.ShopCode.GDBuyButtonObjects2.length = 0;
gdjs.ShopCode.GDMultiObjects1.length = 0;
gdjs.ShopCode.GDMultiObjects2.length = 0;
gdjs.ShopCode.GDPriceObjects1.length = 0;
gdjs.ShopCode.GDPriceObjects2.length = 0;
gdjs.ShopCode.GDNameboostObjects1.length = 0;
gdjs.ShopCode.GDNameboostObjects2.length = 0;
gdjs.ShopCode.GDBackObjects1.length = 0;
gdjs.ShopCode.GDBackObjects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
