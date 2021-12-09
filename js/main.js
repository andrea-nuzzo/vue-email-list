const app = new Vue({
    el:"#root",

    data:{
        //Dichiaro un array vuoto dove inserire le mail richiamate dal server
        mails:[],
    },


    methods:{
        // Questa funzione controlla il numero di mail (Bonus) e se sono maggiori di dieci le mostro a schermo
        numbMails: function(){
           if (this.mails.length >= 10){
               return true;
           } else{
               return false;}
        }
    },

    created() {
        // Ciclo per ottenere dal server 10 mail differenti
        for(let i = 1; i <= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

                // Pusho le mail all'interno dei data
                this.mails.push(response.data.response);
            })    
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        } 
    },

    
});