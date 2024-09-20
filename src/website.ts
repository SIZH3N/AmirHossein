WA.chat.sendChatMessage('Hello world', 'Mr Robot');
console.log("the website script is open now");

WA.room.onEnterLayer('chat').subscribe(() => {
    WA.nav.openTab('https://www.wikipedia.org/');
           });
export {}