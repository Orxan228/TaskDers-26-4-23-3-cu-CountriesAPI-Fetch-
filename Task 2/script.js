let API_URL = "https://jsonplaceholder.typicode.com/posts"
const tBody = document.getElementById("tBody")

axios.get(API_URL).then((response)=>{
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        const {userId}= response.data[i]
        const {id}= response.data[i]
        const {title}= response.data[i]
        const {body}= response.data[i]
        row = `<tr>
        <td>${userId}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${body}</td>
        </tr>`  
        tBody.innerHTML += row
    }
})

