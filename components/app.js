const titleList = {"tw": "課程查詢", "en":"Courses Inquiry"};

const app = Vue.createApp({
    template = '<app-title :title-lang="lang_code" /><app-form /><app-content />',
    data() {
        return {
            lang_code: "tw", 
        }
    },
});

app.component('app-title',{
    template: '<div class="banner shadow"><div id="title">{{title}}</div></div>',
    data() {
        return {
            title: "",
        }
    },
    props: ["titleLang"],
    methods: {
        fetchLang(){
            this.title = titleList[this.titleLang];
        }
    },
    beforeMount(){
        this.fetchLang();
    },
    beforeUpdate(){
        this.fetchLang();
    }
});

app.component('app-form',{
    template: '<div></div>',
});