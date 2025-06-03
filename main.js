//////////////////////////////////////////////////
// Inicializando carga de JavaScript del Proyecto!
console.log('Init JavaScript loading of Project...');

/*
/////////////
// IndexedDB!

// Check Browser support
if (!window.indexedDB) {
  alert("Sorry! Your browser does not support IndexedDB");
}
const dbName = "WebPageDB",
  customerData = [
    { userkey: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { userkey: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
  ];
// Open DataBase
//let request = window.indexedDB.open(dbName, 3);
// Error Handling
let request = window.indexedDB.open(dbName);
request.onerror = event => {
  console.error("Database error: " + event.target.errorCode);
};
//request.onsuccess = event => {
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const customersObjectStore = db.createObjectStore("customers", { keyPath: "userkey" });
  customersObjectStore.createIndex("name", "name", { unique: false });
  customersObjectStore.createIndex("email", "email", { unique: true });
  customersObjectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created customersObjectStore
    const customersObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customersObjectStore.add(customer);
    });
  };
};
// Let some dead Time...
const queryObjectStore = db.transaction("customers").objectStore("customers");
queryObjectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log(`Name for userkey ${cursor.key} is ${cursor.value.name}`);
    console.log(`row: ${cursor.value}`);
    cursor.continue();
  } else {
    console.log("No more entries!");
  }
};

//////////////////////////
// Window: sessionStorage!

// Save data to sessionStorage
sessionStorage.setItem("key", "value");
// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");
// Remove saved data from sessionStorage
sessionStorage.removeItem("key");
// Remove all saved data from sessionStorage
sessionStorage.clear();
*/

////////////////////////////////////////////////
// Finalizando carga de JavaScript del Proyecto!
console.log('End JavaScript loading of Project...');
