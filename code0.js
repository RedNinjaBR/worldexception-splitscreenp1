gdjs.MenuCode = {};
gdjs.MenuCode.GDMenuButtonObjects1_1final = [];

gdjs.MenuCode.GDMenuButtonObjects1= [];
gdjs.MenuCode.GDMenuButtonObjects2= [];
gdjs.MenuCode.GDMenuButtonObjects3= [];
gdjs.MenuCode.GDMenuButtonObjects4= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDTitleObjects4= [];
gdjs.MenuCode.GDTitleBackObjects1= [];
gdjs.MenuCode.GDTitleBackObjects2= [];
gdjs.MenuCode.GDTitleBackObjects3= [];
gdjs.MenuCode.GDTitleBackObjects4= [];
gdjs.MenuCode.GDContinueTextObjects1= [];
gdjs.MenuCode.GDContinueTextObjects2= [];
gdjs.MenuCode.GDContinueTextObjects3= [];
gdjs.MenuCode.GDContinueTextObjects4= [];
gdjs.MenuCode.GDCodeObjects1= [];
gdjs.MenuCode.GDCodeObjects2= [];
gdjs.MenuCode.GDCodeObjects3= [];
gdjs.MenuCode.GDCodeObjects4= [];
gdjs.MenuCode.GDServerObjects1= [];
gdjs.MenuCode.GDServerObjects2= [];
gdjs.MenuCode.GDServerObjects3= [];
gdjs.MenuCode.GDServerObjects4= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Inventory", runtimeScene, runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Maker", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Save1", "Existence");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Name", runtimeScene, runtimeScene.getScene().getVariables().get("Name"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Body", runtimeScene, runtimeScene.getScene().getVariables().get("Body"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Hair", runtimeScene, runtimeScene.getScene().getVariables().get("Hair"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Shirt", runtimeScene, runtimeScene.getScene().getVariables().get("Shirt"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Pants", runtimeScene, runtimeScene.getScene().getVariables().get("Pants"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Shoes", runtimeScene, runtimeScene.getScene().getVariables().get("Shoes"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Save1", "Existence"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "HealthMax", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Health", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Gold", 0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Level", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Weapon", "None");
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", "None");
}{gdjs.evtTools.inventory.serializeToVariable(runtimeScene, "None", runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Inventory")));
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1, gdjs.MenuCode.GDMenuButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCodeObjects2 */
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, (( gdjs.MenuCode.GDCodeObjects2.length === 0 ) ? "" :gdjs.MenuCode.GDCodeObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1, gdjs.MenuCode.GDMenuButtonObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.MenuCode.GDCodeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCodeObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCodeObjects2[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCodeObjects2[k] = gdjs.MenuCode.GDCodeObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCodeObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback23660708 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback23660708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback23662316 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Code"), gdjs.MenuCode.GDCodeObjects2);

{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, (( gdjs.MenuCode.GDCodeObjects2.length === 0 ) ? "" :gdjs.MenuCode.GDCodeObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDCodeObjects1) asyncObjectsList.addObject("Code", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback23662316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects1[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects1[k] = gdjs.MenuCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1, gdjs.MenuCode.GDMenuButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.MenuCode.GDCodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCodeObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCodeObjects1[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCodeObjects1[k] = gdjs.MenuCode.GDCodeObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCodeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Game");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.unloadJSONFile("Save1");
}
{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects1[k] = gdjs.MenuCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects1[k] = gdjs.MenuCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "FireBase Test");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "HealthMax", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Health", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Gold", 0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Level", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Weapon", "None");
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", "None");
}{gdjs.evtTools.inventory.serializeToVariable(runtimeScene, "None", runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Inventory")));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Inventory", runtimeScene, runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Maker", false);
}}

}


{


gdjs.MenuCode.eventsList9(runtimeScene);
}


};gdjs.MenuCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.loadJSONFileFromStorage("Save1");
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].SetLabelText((gdjs.RuntimeObject.getVariableString(gdjs.MenuCode.GDMenuButtonObjects1[i].getVariables().getFromIndex(1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("menu");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
}

}


{

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1_1final, gdjs.MenuCode.GDMenuButtonObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1_1final, gdjs.MenuCode.GDMenuButtonObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].hide();
}
}}

}


{


gdjs.MenuCode.eventsList10(runtimeScene);
}


{



}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;
gdjs.MenuCode.GDMenuButtonObjects2.length = 0;
gdjs.MenuCode.GDMenuButtonObjects3.length = 0;
gdjs.MenuCode.GDMenuButtonObjects4.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects4.length = 0;
gdjs.MenuCode.GDTitleBackObjects1.length = 0;
gdjs.MenuCode.GDTitleBackObjects2.length = 0;
gdjs.MenuCode.GDTitleBackObjects3.length = 0;
gdjs.MenuCode.GDTitleBackObjects4.length = 0;
gdjs.MenuCode.GDContinueTextObjects1.length = 0;
gdjs.MenuCode.GDContinueTextObjects2.length = 0;
gdjs.MenuCode.GDContinueTextObjects3.length = 0;
gdjs.MenuCode.GDContinueTextObjects4.length = 0;
gdjs.MenuCode.GDCodeObjects1.length = 0;
gdjs.MenuCode.GDCodeObjects2.length = 0;
gdjs.MenuCode.GDCodeObjects3.length = 0;
gdjs.MenuCode.GDCodeObjects4.length = 0;
gdjs.MenuCode.GDServerObjects1.length = 0;
gdjs.MenuCode.GDServerObjects2.length = 0;
gdjs.MenuCode.GDServerObjects3.length = 0;
gdjs.MenuCode.GDServerObjects4.length = 0;

gdjs.MenuCode.eventsList11(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;