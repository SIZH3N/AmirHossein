/// <reference types="@workadventure/iframe-api-typings" />

WA.chat.sendChatMessage('Hello world', 'Mr Robot');
console.log("the website script is open now");

WA.onInit().then(() => {
    WA.room.onEnterLayer('chat').subscribe(() => {
        WA.nav.openTab('https://www.wikipedia.org/');
               });
    console.log('Current player name: ', WA.player.name);
});



export {}