//access all elements function
const getElement = (el) => document.querySelector(el);

//open my menu onClick
getElement('.open').addEventListener('click', () => {
    getElement('.navigation-list').classList.add('active');
});

//close my menu onClick
getElement('.close').addEventListener('click', () => {
    getElement('.navigation-list').classList.remove('active');
});