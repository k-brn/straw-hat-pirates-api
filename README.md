# Straw Hat Pirates API

An api to find information about your favourite Straw Hat Pirate member.

**Link to project:** [https://the-straw-hat-pirates-api.herokuapp.com](https://the-straw-hat-pirates-api.herokuapp.com)

![Straw_Hat_Pirates_as_a_Family](https://user-images.githubusercontent.com/108495284/194785307-87aacfb2-3bd7-4f90-8984-11e7a5a62139.jpg)

## How It's Made:

 **Tech used:** HTML, JavaScript, NODE.js, Express.js
 
 ## Installation

 Clone this repo  your local machine using

 ```
 git clone <clone-link>
 ```
 Then run npm init to get the node modules
 ```
 npm init
 ```
 
 ## Get All Characters 

You can access the list of characters by using the /crewmembers endpoint.

```
https://the-straw-hat-pirates-api.herokuapp.com/api/crewmembers
```

 ## Get a Single Character 

You can get a single character by adding the name as a parameter: /api/nami

```
https://the-straw-hat-pirates-api.herokuapp.com/api/nami
```

```
{
    "name": "Nami",
    "age": ["18 (debut)", "20 (after timeskip)"],
    "birthday": "July 3rd",
    "height": ["169 cm (debut)", "170 cm (after timeskip)"],
    "image": "https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190720162446"
}
```
