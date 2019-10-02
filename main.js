literalSearch = function(word){
   var query = word.selectionText;
   var replaced = query.replace(' ', '+');
   var url = 'https://www.google.com/search?q="' + replaced + '"';
   chrome.tabs.create({url: url });
};

literalSearchBackground = function(word){
   var query = word.selectionText;
   var replaced = query.replace(' ', '+');
   var url = 'https://www.google.com/search?q="' + replaced + '"';
   chrome.tabs.create({url: url, active: false});
}

chrome.contextMenus.create({
title: "Literal Search",
contexts:["selection"],  // ContextType
onclick: literalSearch // A callback function
});

chrome.contextMenus.create({
title: "Literal Search in Background",
contexts:["selection"],  // ContextType
onclick: literalSearchBackground // A callback function
});
