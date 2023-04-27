const { createApp } = Vue

createApp({

    data() {
        return {
            mailHtml: [


            ]
        }
    },

    mounted() {

        this.randomMail()

        // for (i = 0; i < 10; i++) {
        //     randomMail();
        // }

    },
    methods: {



        randomMail() {

            for (i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    this.mailHtml.push(res.data.response)

                })
            }

            console.log(mailHtml)



        }

    }



}).mount('#app')




