import queryString from 'query-string';

class Api {
    static headers(){
        return{
            'Content-Type': 'application/x-www-form-urlencoded',
            'TCM':'TRUE',
            'Authorization':'Basic bmF0OjEyMw=='
        };
    }


    static get(path) {
        return this.xhr(path, null, 'GET');
    }
    static post(path, params) {
        return this.xhr(path,params||{}, 'POST');
    }
    static xhr(route, params, verb) {
        const host = 'http://localhost:81/gwr';
        const url = `${host}${route}`;

        let options = {
            method: verb,
            headers: Api.headers(),
            body: params ?queryString.stringify(params):null
            // body:JSON.stringify({headCode:params})

        };


        // let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
        // let otherOptions = {headers:Api.headers()};
        return fetch(url, options).then( resp => {
            let json = resp.json();
            if (resp.ok) {
                return json;
            }
            return json.then(err => {throw err;});
        }).
        then( json => {
            return json;
        } );
    }
}

export default Api;
