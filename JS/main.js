
let form = document.forms.PIB;
let elLast = document.querySelector('.lastname');
let elFirst = document.querySelector('.firstname');
let elMiddle = document.querySelector('.middlename');
let card = document.querySelector('.card');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.target);

    let LName = formData.get('lastname');
    let FName = formData.get('firstname');
    let MName = formData.get('middlename');

    let html = `
    <div class="card-item">
        <div>Прізвище: ${LName}</div>
        <div>І'мя: ${FName}</div>
        <div>По батькові: ${MName}</div>
    </div>
    `;

    card.insertAdjacentHTML('beforeend', html);

});

