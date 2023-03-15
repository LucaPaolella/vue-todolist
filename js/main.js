"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todo: [
                {
                    nomeTodo: "spesa",
                    text: "Uscire a fare la spesa",
                    done: true
                },

                {
                    nomeTodo: "NutrireGatto",
                    text: 'Dare da mangiare a Fiocco',
                    done: false
                },

                {
                    nomeTodo: "Lavare Macchina",
                    text: 'Lavare la mia fantastica Panda',
                    done: true
                }     
            ],
        
        barra: document.querySelector('.barra')
        }

    }
}).mount("#app");