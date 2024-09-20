WA.chat.sendChatMessage('Hello world', 'Mr Robot');


WA.room.onEnterLayer('chat').subscribe(() => {
    WA.nav.openTab('https://www.wikipedia.org/');
           });
export {}