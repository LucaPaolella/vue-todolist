"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todo: {

                spesa: [
                    { text: 'Fare spesa' },
                    { done: true }
                ],

                nutrireGatto: [
                    { text: 'Fare spesa' },
                    { done: false }
                ],

                lavareMacchina: [
                    { text: 'Fare spesa' },
                    { done: true }
                ],
            }
        }

    }
}).mount("#app");