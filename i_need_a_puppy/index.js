'use strict';

// 버튼 클릭 시 강아지 사진 뿅
let getPuppyBtn = document.getElementById('get-puppy');
let puppyPic = document.getElementById('puppy-pic');

getPuppyBtn.addEventListener('click', evt => {
    fetch('https://api.thedogapi.com/v1/images/search?')
    .then(res => res.json())
    .then(puppies => {
        puppies.forEach(puppy => {
            puppyPic.innerHTML = `<h3>Yeyy! We found a lucky puppy! You're a lucky girl. 🎉</h3>
            <p style="color:#999">(Between you and me, if you try to click the button again, a new puppy will come to you.)</p>
            <img src="${puppy.url}" alt="Your Lovely Puppy Here" />`
        })
    })
})