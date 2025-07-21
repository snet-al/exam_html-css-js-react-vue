"use strict"

let pictureIDs = []
let gray = false

function pictureBuilder(finish, id) {
    let pic = document.getElementById(`picture${id}`)
    if (pic == undefined || pic == null) {
        pic = document.createElement("img")
        pic.id = `picture${id}`
    }
    pic.src = URL.createObjectURL(finish)

    return pic
}

function linkBuilder(width, height, id, grayscale) {
    let link = "https://picsum.photos"

    if (id != null) {
        link = `${link}/id/${id}`
    }

    link = `${link}/${width}/${height}.webp?random=${Date.now()}`

    if (grayscale) {
        link = `${link}&grayscale`
    }

    return link
}

async function genNewPics() {
    gray = false

    let reqs = pictureIDs.map(_ => fetch(linkBuilder(355, 250, null, gray)))

    let results = await Promise.all(reqs)
    let resBlobs = await Promise.all(
        results.map(r => r.blob())
    )

    results.forEach(async (resBody, index) => {
        let resBlob = resBlobs[index]

        let newId = resBody.headers.get("Picsum-ID")

        let pic = pictureBuilder(resBlob, pictureIDs[index])
        pic.id = `picture${newId}`
        pictureIDs[index] = newId
    })
}

async function grayscale() {
    gray = !gray

    let reqs = pictureIDs.map(x => fetch(linkBuilder(355, 250, x, gray)))

    let results = await Promise.all(reqs)
    let resBlobs = await Promise.all(
        results.map(r => r.blob())
    )

    results.forEach(async (resBody, index) => {
        let resBlob = resBlobs[index]

        let id = resBody.headers.get("Picsum-ID")

        pictureBuilder(resBlob, id)
    })
}

async function main() {
    let reqs = [0, 0, 0, 0].map(_ => fetch(linkBuilder(355, 250, null, gray)))
    
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

        let frame = document.createElement("div")
        frame.classList.add("picture-frame")
        frame.appendChild(pic)

        container.appendChild(frame)
    })
}

main()