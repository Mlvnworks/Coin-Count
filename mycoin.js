// save input to local storage
class Saved {
    constructor(amount, proccess, dated, remark) {
        this.amount = amount;
        this.proccess = proccess;
        this.dated = dated;
        this.remark = remark;
    }

    // saved total tp localtorage
    total = () => {
        let key = 'total';
        let ttl = localStorage.getItem(key) ? localStorage.getItem(key) * 1 : 0;
        let amountAfter = this.proccess === 'get' ? ttl - this.amount * 1 : ttl + this.amount * 1;
        localStorage.setItem(key, amountAfter);
        return amountAfter;
    };

    // saved histories
    history = x => {
        let key = 'transactions';
        let savedTrans = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
        savedTrans.push(x);
        localStorage.setItem(key, JSON.stringify(savedTrans));
        location.reload();
    };
}

// date
const date = `${new Date().getMonth() + 1}/${new Date().getMonth() + 21}/${new Date().getFullYear()}`;
console.log(date);

// components
const getBtn = document.querySelector('#get-btn');
const addBtn = document.querySelector('#add-btn');
const disDate = (document.querySelector('#show-d').textContent = date);
const disTotal = (document.querySelector('#saved').textContent = textContent = localStorage.getItem('total') ? localStorage.getItem('total') : '0.00');
const hisArea = document.querySelector('#his-area');

hisArea.addEventListener('click', e => {
    if (e.target.classList.contains('bi')) {
        if (confirm('Are you sure you want to delete all History?')) {
            localStorage.removeItem('transactions');
            location.reload();
        }
    }
});

const disHistory = document.querySelector('#h-list');

const histories = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : [];

histories.forEach(trans => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${trans.amount}</td>
        <td>${trans.dated}</td>
        <td>${trans.remark ? trans.remark : 'not set'}</td>
    `;

    disHistory.prepend(tr);
});

const makeTransaction = e => {
    const amountInput = document.querySelector('#value');
    const remark = document.querySelector('#remark');

    let validity = amountInput.value === '' ? false : true;

    if (!validity) {
        alert('Please Input all Fields!');
        location.reload();
    }

    if (validity) {
        let currentTrans = new Saved(amountInput.value, e.target.textContent.toLowerCase(), date, remark.value);
        currentTrans.total();
        currentTrans.history(currentTrans);
    }
};

// modify modal for add and get
const modifyModal = e => {
    // text on modal header
    const modalLabel = (document.querySelector('#exampleModalLabel').textContent = e.target.textContent === 'Get' ? 'GET SAVING' : 'ADD SAVING');

    // text o modal total
    const modalTotal = (document.querySelector('#mod-total').textContent = localStorage.getItem('total') ? localStorage.getItem('total') : '0.00');

    // text o modal msg
    const msg = (document.querySelector('#msg').textContent = e.target.textContent === 'Get' ? 'Amount to be Get' : 'Amount to bea Add');

    // text on btn
    const modalBtn = document.querySelector('#modal-btn');
    modalBtn.textContent = e.target.textContent === 'Get' ? 'Get' : 'Add';
    modalBtn.addEventListener('click', e => makeTransaction(e));
};

getBtn.addEventListener('click', e => modifyModal(e));
addBtn.addEventListener('click', e => modifyModal(e));
