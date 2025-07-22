"use strict"

let pictureIDs = []

// borrowed component from Google's material design library
let graySwitch = document.getElementById("switch")
let addPicsButton = document.getElementById("add-pics")
let newPicsButton = document.getElementById("new-pics")

let width = 351
let height = 250

graySwitch.addEventListener("click", grayscale)
addPicsButton.addEventListener("click", addPics)
newPicsButton.addEventListener("click", genNewPics)

addPics()

function pictureBuilder(finish, id) {
    let pic = document.getElementById(`picture${id}`)
    if (pic == undefined || pic == null) {
        pic = document.createElement("img")
        pic.id = `picture${id}`
    }
    pic.src = URL.createObjectURL(finish)

    return pic
}

async function frameBuilder(pic, id) {
    let frame = pic.parentElement

    if (frame == null) {
        frame = document.createElement("div")
        frame.classList.add("picture-frame")
        frame.appendChild(pic)

        let overlay = document.createElement("div")

        let authname = document.createElement("h3")
        let link = document.createElement("a")

        overlay.appendChild(authname)
        overlay.appendChild(link)
        overlay.classList.add("overlay")
        frame.appendChild(overlay)
    }

    let data = await fetch(`https://picsum.photos/id/${id}/info`)
    let jsonData = await data.json() 

    let overlay = frame.getElementsByClassName("overlay")[0]
    for (let child of overlay.children) {
        if (child.tagName == "H3") {
            // console.log("weep")
            child.textContent = jsonData.author
        } else if (child.tagName == "A") {
            // console.log("wope")
            child.href = jsonData.url
            child.textContent = jsonData.url
        }
    }

    return frame
}

function linkBuilder(width, height, id, grayscale) {
    let link = "https://picsum.photos"

    if (id != null) {
        link = `${link}/id/${id}`
    }

    link = `${link}/${width}/${height}.jpg`

    if (grayscale) {
        link = `${link}?grayscale`
    }

    return link
}

async function genNewPics() {
    graySwitch.selected = false

    let reqs = pictureIDs.map(_ => fetch(linkBuilder(width, height, null, graySwitch.selected)))

    let results = await Promise.all(reqs)
    let resBlobs = await Promise.all(
        results.map(r => r.blob())
    )

    let frames = results.map(async (resBody, index) => {
        // let resBlob = await resBody.blob()
        let newId = resBody.headers.get("Picsum-ID")
        let pic = pictureBuilder(resBlobs[index], pictureIDs[index])
        pic.id = `picture${newId}`
        pictureIDs[index] = newId
        return frameBuilder(pic, newId)
    })
    await Promise.all(frames)

    // results.forEach((resBody, index) => {
    //     let resBlob = resBlobs[index]

    //     let newId = resBody.headers.get("Picsum-ID")

    //     let pic = pictureBuilder(resBlob, pictureIDs[index])
    //     pic.id = `picture${newId}`
    //     pictureIDs[index] = newId
    // })
}

async function grayscale() {
    let reqs = pictureIDs.map(x => fetch(linkBuilder(width, height, x, !graySwitch.selected)))

    let results = await Promise.all(reqs)
    let resBlobs = await Promise.all(
        results.map(r => r.blob())
    )

    results.forEach((resBody, index) => {
        let resBlob = resBlobs[index]

        let id = resBody.headers.get("Picsum-ID")

        pictureBuilder(resBlob, id)
    })
}

async function addPics() {
    let reqs = [0, 0, 0, 0].map(_ => fetch(linkBuilder(width, height, null, graySwitch.selected)))
    
    // i should probably do changes by chunks
    let results = await Promise.all(reqs)
    let resBlobs = await Promise.all(
        results.map(r => r.blob())
    )

    let container = document.getElementById("container")
    results.forEach(async (resBody, index) => {
        let resBlob = resBlobs[index];

        let id = resBody.headers.get("Picsum-ID")
        pictureIDs.push(id)

        let pic = pictureBuilder(resBlob, id)

        let frame = await frameBuilder(pic, id)

        container.appendChild(frame)
    })
}