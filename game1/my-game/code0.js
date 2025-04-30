gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDCoinObjects1= [];
gdjs.MainCode.GDCoinObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDRedwoodBackgroundObjects1= [];
gdjs.MainCode.GDRedwoodBackgroundObjects2= [];
gdjs.MainCode.GDWoodBackgroundObjects1= [];
gdjs.MainCode.GDWoodBackgroundObjects2= [];
gdjs.MainCode.GDUgaObjects1= [];
gdjs.MainCode.GDUgaObjects2= [];
gdjs.MainCode.GDShopObjects1= [];
gdjs.MainCode.GDShopObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.MainCode.GDCoinObjects1});
gdjs.MainCode.asyncCallback9556236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Coin"), gdjs.MainCode.GDCoinObjects2);

{for(var i = 0, len = gdjs.MainCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDCoinObjects2[i].getBehavior("Resizable").setSize(460, 460);
}
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
for (const obj of gdjs.MainCode.GDCoinObjects1) asyncObjectsList.addObject("Coin", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback9556236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShopObjects1Objects = Hashtable.newFrom({"Shop": gdjs.MainCode.GDShopObjects1});
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.MainCode.GDCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDCoinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9555636);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainCode.GDNewTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MainCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.MainCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDCoinObjects1[i].getBehavior("Resizable").setSize(430, 430);
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Uga"), gdjs.MainCode.GDUgaObjects1);
{for(var i = 0, len = gdjs.MainCode.GDUgaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUgaObjects1[i].getBehavior("Text").setText("Срібло");
}
}{for(var i = 0, len = gdjs.MainCode.GDUgaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUgaObjects1[i].setColor("217;255;255");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 1000);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Uga"), gdjs.MainCode.GDUgaObjects1);
{for(var i = 0, len = gdjs.MainCode.GDUgaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUgaObjects1[i].getBehavior("Text").setText("Золото");
}
}{for(var i = 0, len = gdjs.MainCode.GDUgaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUgaObjects1[i].setColor("72;142;205");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 10000);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Uga"), gdjs.MainCode.GDUgaObjects1);
{for(var i = 0, len = gdjs.MainCode.GDUgaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUgaObjects1[i].getBehavior("Text").setText("Алмаз");
}
}{for(var i = 0, len = gdjs.MainCode.GDUgaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUgaObjects1[i].setColor("10;118;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.MainCode.GDShopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDShopObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDCoinObjects1.length = 0;
gdjs.MainCode.GDCoinObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDRedwoodBackgroundObjects1.length = 0;
gdjs.MainCode.GDRedwoodBackgroundObjects2.length = 0;
gdjs.MainCode.GDWoodBackgroundObjects1.length = 0;
gdjs.MainCode.GDWoodBackgroundObjects2.length = 0;
gdjs.MainCode.GDUgaObjects1.length = 0;
gdjs.MainCode.GDUgaObjects2.length = 0;
gdjs.MainCode.GDShopObjects1.length = 0;
gdjs.MainCode.GDShopObjects2.length = 0;

gdjs.MainCode.eventsList1(runtimeScene);
gdjs.MainCode.GDCoinObjects1.length = 0;
gdjs.MainCode.GDCoinObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDRedwoodBackgroundObjects1.length = 0;
gdjs.MainCode.GDRedwoodBackgroundObjects2.length = 0;
gdjs.MainCode.GDWoodBackgroundObjects1.length = 0;
gdjs.MainCode.GDWoodBackgroundObjects2.length = 0;
gdjs.MainCode.GDUgaObjects1.length = 0;
gdjs.MainCode.GDUgaObjects2.length = 0;
gdjs.MainCode.GDShopObjects1.length = 0;
gdjs.MainCode.GDShopObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
