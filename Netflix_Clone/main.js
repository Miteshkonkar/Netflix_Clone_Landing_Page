const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Selected Tab content
function selectItem(e){
    removeBorder();
    removeShow();
    //adds border-bottom on click
    this.classList.add('tab-border');
    //gives content of selected tab
    const tabContentItem=document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show');
}

//remove border-bottom initially
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//gets tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

