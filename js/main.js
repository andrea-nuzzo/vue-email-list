/*Attrvaerso l'apposita API di Boolean :api:

generare 10 indirizzi email e stamparli in pagina all'interno di una lista
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. (modificato) */

const app = new Vue({

    el:"#root",

    data:{
        mails:[],
    },


    methods:{
        numbMails: function(){
           if (this.mails.length >= 10){
               return true;
           } else{
               return false;}
        }
    },

    created() {
        for(let i = 1; i <= 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.mails.push(response.data.response);
            })    

            .catch(function (error) {
                // handle error
                console.log(error);
            })
        } 
    },

    
});