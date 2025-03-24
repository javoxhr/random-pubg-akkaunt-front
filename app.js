let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.setText("Random Akkaunt sotib olish")
tg.MainButton.show()

tg.MainButton.onClick(()=> {
    let data = {
        stars: 1
    }
    tg.sendData(JSON.stringify(data))
})

const accaunts = [
    {
        title: "Pubg accaunt 77 Level",
        level: "77",
        img: "./images/akk-1.webp",
        id: 1
    },
    {
        title: "Pubg accaunt 67 Level",
        level: "67",
        img: "./images/akk-2.webp",
        id: 2
    },
    {
        title: "Pubg accaunt 54 Level",
        level: "54",
        img: "./images/akk-1.webp",
        id: 3
    },
    {
        title: "Pubg accaunt 49 Level",
        level: "49",
        img: "./images/akk-4.jpg",
        id: 4
    },
    {
        title: "Pubg accaunt 54 Level",
        level: "54",
        img: "./images/akk-5.png",
        id: 5
    },
    {
        title: "Pubg accaunt 57 Level",
        level: "57",
        img: "./images/akk-6.webp",
        id: 6
    },
]

const cardsWrp = document.querySelector('.cards-wrapper')

accaunts.forEach((el) => {
    cardsWrp.innerHTML += `
       <div class="card-wrp">
       <img class="card-img" src="${el.img}">
        <div class="card">
            <h3>${el.title}</h3>
            <p>LV ${el.level}</p>
            <button class="card-btn">Ko'rish</button>
        </div>
       </div/>
    `
})

const cardBtn = document.querySelectorAll('.card-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const modalWrp = document.querySelector('.modal-wrapper')
const body = document.querySelector('body')

function closeModal() {
    modal.classList.remove('active-modal')
    overlay.style.display = 'none'
    body.style.overflow = 'auto'
}

cardBtn.forEach((btn, btnI) => {
    btn.addEventListener('click', () => {
        modal.classList.add('active-modal')
        overlay.style.display = 'block'
        body.style.overflow = 'hidden'
        modalWrp.innerHTML = ""
        accaunts.forEach((el, i) => {
            if (i == btnI) {
                modalWrp.innerHTML = `
                <img class="modal-img" src="${el.img}" alt="">
                <h2>${el.title}</h2>
                <span>Level: ${el.level}</span>
                `
            }
        })
    })
})

overlay.addEventListener('click', () => closeModal())