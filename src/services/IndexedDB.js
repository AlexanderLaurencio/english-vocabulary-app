export function openIDB () {
    return new Promise((resolve,reject) => {
        try {
            let openRequest = indexedDB.open("WordsDB",1)

            openRequest.onupgradeneeded = () => {
                const db = openRequest.result;
                db.createObjectStore("Words", {keyPath: "id", autoIncrement: true});
            };

            openRequest.onsuccess = (e) => {
                const db = openRequest.result;
                console.log("IndexedDB open successfully")

                db.onversionchange = () => {
                console.error("Database is outdated, please close and reopen the page");
                }
                resolve(db);
            };

            openRequest.onerror = (e) => {
                console.error(`Error while opening IndexeDB: ${openRequest.error.message}`)
                reject(openRequest.error.message);
            };

            openRequest.onblocked = () => {
                console.warn("Please there is another tab open. Please close it");
                reject(openRequest.error.message);
            };
        } catch (e) {
            reject(e)
        }
    })
};

export async function addRecord(word) {
    let db = await openIDB();
    let transaction = db.transaction("Words","readwrite");
    let objectStore = transaction.objectStore("Words");
    let request = objectStore.add(word);

    request.onsuccess = () => console.log("Word added");

    //THE CONSTRAINT ERROR TRIGGERS FOR NO REASON EVEN THOUGH THE ID OF THE NEW RECORD IS 
    //UNIQUE
    request.onerror = (e) => {
        console.error("Error, perhaps you're adding two or more records with the same id",e.target.error)
    };
};

export async function getAllRecords() {
    return new Promise(async (resolve,reject) => {
        let db = await openIDB();
        let transaction = db.transaction("Words","readonly");
        let objectStore = transaction.objectStore("Words");
        let request = objectStore.getAll();

        request.onsuccess = () => {
         console.log("Records obtained");
         resolve(request.result);
        };

        request.onerror = (e) => {
            console.error("Error while getting all records",e.target.error);
            reject(e.target.error);
        };
    })
};

export async function deleteRecord(id) {
    let db = await openIDB();
    let transaction = db.transaction("Words","readwrite");
    let objectStore = transaction.objectStore("Words");
    let request = objectStore.delete(id);

    request.onsuccess = () => console.log("Word deleted");

    request.onerror = (e) => console.error("Error deleting word",e.target.error);
};

export async function modifyRecord(word) {
    let db = await openIDB();
    let transaction = db.transaction("Words","readwrite");
    let objectStore = transaction.objectStore("Words");
    let request = objectStore.put(word)

    request.onsuccess = () => console.log("Word modified");

    request.onerror = (e) => console.error("Error modifying word",e.target.error);
};