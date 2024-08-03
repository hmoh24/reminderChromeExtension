//Chrome runtime works by allowing different parts of your Chrome extension (like background scripts, content scripts, and popup scripts) to communicate with each other
//Only one sw.js file per extension
//Need storage to be enabled to persist state across sessions
console.log('test');


// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.type === 'open_side_panel') {
//     // Handle the message, like opening a side panel
//       chrome.sidePanel.open({ windowId: tab.windowId });
//   }
// });

//Initialise state on installation
//Service workers (though HTML pages can) do not have access to window object and thus no access to window.localStorage - alternative is chrome.storage API
//10MB by default, can be extended 

// chrome.runtime.onInstalled.addListener(({ x }) => {
//   if (x === 'install') {
//     chrome.storage.local.set({

//     })
//   }
// })


// chrome.storage.onChanged.addListener((changes, namespace) => {
//   for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//     console.log(
//       `Storage key "${key}" in namespace "${namespace}" changed.`,
//       `Old value was "${oldValue}", new value is "${newValue}".`
//     );
//   }
// });