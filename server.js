const axios = require('axios')
const path = require('path')
const fs = require('fs')


const fetchData = async () => {

    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts')

        const stringData = JSON.stringify(response.data)
        
        fs.writeFileSync(path.join(__dirname, '/result', 'post.json'), stringData, (err, data) => {
            if(err) {
                throw err
            }
            console.log(data)
        })

    } catch (error) {
        console.log(error)   
    }
   
    

}

fetchData()
