export default class blank {
    constructor(title, content) {
        this.title = title;
        this.content = content;  
    }

    template(){
        let tmpl=`<div class="main">
            <div class="top"></div>
            <div class="middle">
                <img src="https://s.momocdn.com/w/u/others/2019/02/25/1551067700592-empty-icon.png">
                <p>${this.title}</p>
            </div>
            <div class="bottom"></div>
        </div>
        `;
        return tmpl;
    }
}
