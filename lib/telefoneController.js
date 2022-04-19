const { default: storage } = require("./storage")

module.exports = {
    async getTelefones(setLista){

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        let config = {
            method: 'GET',
            headers: headers
        }

        fetch('http://localhost/api_telefones/api_telefones.php', config)
        .then((response)=> response.json())
        .then((json)=>{
            console.log(json);
            storage.save({
                key: 'telefones',
                data: json,
                expires: null,
            });
            setLista(json);
        })
        .catch((err)=>{
            storage.load({
                key:'telefones'
            })
            .then((data)=>{
                setLista(data);
            })
        })
    }
}