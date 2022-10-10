const express = require('express')
const app = express()
const cors = require('cors')
const { request, response } = require('express')
const PORT = 3000

const crewMembers = {
    'monkey d. luffy':{
        'name': 'Monkey D. Luffy',
        'age': ['7 (debut)', '19 (after timeskip)'],
        'birthday': 'May 5th',
        'height': ['172 cm (debut)', '174 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20200429191518'
    },
    'roronoa zoro':{
        'name': 'Roronoa Zoro',
        'age': ['19 (debut)', '21 (after timeskip)'],
        'birthday': 'November 11th',
        'height': ['178 cm (debut)', '181 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20141008195159'
    },
    'nami':{
        'name': 'Nami',
        'age': ['18 (debut)', '20 (after timeskip)'],
        'birthday': 'July 3rd',
        'height': ['169 cm (debut)', '170 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190720162446'
    },
    'usopp':{
        'name': '',
        'age': ['17 (debut)', '19 (after timeskip)'],
        'birthday': 'April 1st',
        'height': ['174 cm (debut)', '176 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130708033601'
    },
    'sanji':{
        'name': 'Sanji',
        'age': ['19 (debut)', '21 (after timeskip)'],
        'birthday': 'March 2nd',
        'height': ['177 cm (debut)', '180 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20170625125657'
    },
    'tony tony chopper':{
        'name': 'Tony Tony Chopper',
        'age': ['15 (debut)', '17 (after timeskip)'],
        'birthday': 'December 24th',
        'height': '90 cm (hybrid form)',
        'image': 'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130428202154'
    },
    'nico robin':{
        'name': 'Nico Robin',
        'age': ['28 (debut)', '30 (after timeskip)'],
        'birthday': 'February 6th',
        'height': '188 cm',
        'image': 'https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190202051257'
    },
    'franky':{
        'name': 'Franky',
        'age': ['34 (debut)', '36 (after timeskip)'],
        'birthday': 'March 9th',
        'height': ['225 cm (debut)', '240 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130225034035'
    },
    'brook':{
        'name': 'Brook',
        'age': ['88 (debut)', '90 (after timeskip)'],
        'birthday': 'April 3rd',
        'height': ['266 cm (debut)', '277 cm (after timeskip)'],
        'image': 'https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20161016160925'
    },
    'jinbe':{
        'name': 'Jinbe',
        'age': ['44 (debut)', '46 (after timeskip)'],
        'birthday': 'April 2nd',
        'height': '301 cm',
        'image': 'https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png/revision/latest?cb=20170521201349'
    },
    'unknown':{
        'name': 'unknown',
        'age': '0',
        'birthday': 'unknown',
        'height': 'unknown',
        'image': 'unknown'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/crewMembers', (request, response)=>{
    response.json(crewMembers)
})

app.get('/api/:name', (request, response)=>{
    const pirateName = request.params.name.toLowerCase()
    
    if(crewMembers[pirateName]){
        response.json(crewMembers[pirateName])
    }else{
        response.json(crewMembers['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is now running on port ${PORT}!`)
})