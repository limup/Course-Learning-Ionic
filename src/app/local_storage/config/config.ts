import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable({ providedIn: 'root' })
export class configService {
    
    private config ={
        showSlide: false,
        name: "",
        userName: ""
    }

    constructor() {

    }

    getConfigData(){
        return localStorage.getItem(config_key_name);
    }

    setConfigData(showSlide?: any, name?: string, userName?: string){
        let config ={
            showSlide: false,
            name: "",
            userName: ""
        }

        if(showSlide){
            config.showSlide = showSlide;
        }

        if(name){
            config.name = name;
        }

        if(userName){
            config.userName = userName;
        }

        localStorage.setItem(config_key_name, JSON.stringify(config));
    }

}
