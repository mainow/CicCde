class NewManager {
    
    static getNews(newSetter) {
        fetch("http://127.0.0.1:8080/noticias/todas")
        .then(r => r.json())
        .then(data => newSetter(Array.from(data.news.reverse(), val => ({key: val[0], date: val[3], title: val[2], content: val[4]}))))
    }
    
    static createNew(img, date, title, content, callback=()=>{}) {
        const create = imgName => {
            content = content.replace(/\n/g, ""); // remove html line breaks
            fetch(`http://127.0.0.1:8080/noticias/crear?img-temp=${img}&img-name=${imgName}&date=${date}&title=${title}&content=${content}`)
            .then(r => r.json())
            .then(data => callback(data.success));
        }

        fetch("http://127.0.0.1:8080/noticias/toolbox")
        .then(r => r.json())
        .then(data => {
            create(`new-${data.nextNewId}.jpg`);
        })
        // on error set success to false
        .catch(() => callback(false));
    }

    static deleteNew(id, callback=()=>{}) {
        fetch(`http://127.0.0.1:8080/noticias/eliminar?id=${id}`)
        .then(r => callback())
    }

}


export default NewManager;