import global from 'global';
export default class Utils {
    static formatDate(dateTime) {
        let date = new Date(dateTime);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes;
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + '  ' + strTime;
    }

    static getLayoutFromLocalStorage(key) {
        let ls = {};
        if (global.localStorage) {
            try {
                ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
            } catch(e) {/*Ignore*/}
        }
        return ls[key];
    }

    static saveLayoutToLocalStorage(key, value) {
        if (global.localStorage) {
            global.localStorage.setItem('rgl-8', JSON.stringify({
                [key]: value
            }));
        }
    }


}