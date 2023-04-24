const { createApp } = Vue

createApp({

    data() {
        return {

        }
    },

    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res.data.response)
            })


    },
    methods: {
        // randomMail() {

        //     // for (i = 0; i < 10; i++) {
        //     //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
        //     //         this.mailSingle[i] = res.data.response
        //     //     })

        //     //     console.log(this.mailSingle[i])
        //     // }




        // }

    }



}).mount('#app')




