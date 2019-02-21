const ServerProxy = {

    // Promise version
    get: (url) => {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("get", url, true);
            
            // When response comes, this is excuted by main thread
            xhr.onload = () => {
                let response = xhr.responseText;
                resolve(response);  // callback
            }

            xhr.onerror = () => {
                reject();   // callback
            }

            xhr.send(); // Mian thread does not wait for the response
        });
    }

    // // callback version
    // get: (url, success, failed) => {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("get", url, true);
        
    //     // When response comes, this is excuted by main thread
    //     xhr.onload = () => {
    //         let response = xhr.responseText;
    //         success(response);  // callback
    //     }

    //     xhr.onerror = () => {
    //         failed();   // callback
    //     }

    //     xhr.send(); // Mian thread does not wait for the response
    // }
};

export default ServerProxy;