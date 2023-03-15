"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todo:{
                spesa:{
                    text:"fare spesa",
                    done: true
                },

                nutrireGatto:{
                    text:"fare spesa",
                    done: false
                },

                lavareMacchina:{
                    text:"fare spesa",
                    done: true
                },
            }
        }

    }
}).mount("#app");