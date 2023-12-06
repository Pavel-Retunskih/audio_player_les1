// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies:[
        {title: 'Front'},
        {title: 'Back'},
        {title: 'DevOps'}
      ]
}


// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

let techElement = document.createElement('select');
let optionElement0 = document.createElement('option')
optionElement0.append(info.technologies[0].title)
let optionElement1 = document.createElement('option')
optionElement1.append(info.technologies[1].title)
let optionElement2 = document.createElement('option')
optionElement2.append(info.technologies[2].title)

techElement.append(optionElement0, optionElement1, optionElement2);
document.body.append(techElement);