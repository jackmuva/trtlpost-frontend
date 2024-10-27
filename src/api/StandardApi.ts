export default class StandardApi {
    get(path: string){
        if(import.meta.env.VITE_API_URL) {
            if(sessionStorage.getItem("jwt")){
                return fetch(import.meta.env.VITE_API_URL.concat(path), {
                    method: 'GET',
                    headers:{
                        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
                    }
                });
            }
            return fetch(import.meta.env.VITE_API_URL.concat(path));
        }
    }

    delete(path: string){
        if(import.meta.env.VITE_API_URL) {
            if(sessionStorage.getItem("jwt")) {
                return fetch(import.meta.env.VITE_API_URL.concat(path), {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
                    }
                });
            }
            return fetch(import.meta.env.VITE_API_URL.concat(path), {
                method: 'DELETE'
            });
        }
    }

    post(path: string, payload?: any){
        if(import.meta.env.VITE_API_URL) {
            if(sessionStorage.getItem("jwt")) {
                return fetch(import.meta.env.VITE_API_URL.concat(path), {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
                    },
                    body: JSON.stringify(payload)
                });
            }
            return fetch(import.meta.env.VITE_API_URL.concat(path), {
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        }
    }

    put(path: string, payload?: any){
        if(import.meta.env.VITE_API_URL) {
            if(sessionStorage.getItem("jwt")) {
                return fetch(import.meta.env.VITE_API_URL.concat(path), {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
                    },
                    body: JSON.stringify(payload)
                });
            }
            return fetch(import.meta.env.VITE_API_URL.concat(path), {
                method: 'PUT',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        }
    }
}