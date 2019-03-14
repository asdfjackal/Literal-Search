literalSearch = function(word){
   var query = word.selectionText;
   var replaced = query.replace(' ', '+');
   var url = 'https://www.google.com/search?q="' + replaced + '"';
   chrome.tabs.create({url: url });
};

chrome.contextMenus.create({
title: "Literal Search",
contexts:["selection"],  // ContextType
onclick: literalSearch // A callback function
});
