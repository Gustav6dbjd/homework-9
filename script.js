
 let buttons = document.querySelectorAll('button');
 buttons.forEach(button => {
    button.textContent = 'Нажми меня';
 });



 let container = document.querySelector('.container');
 if (container) {
    container.classList.add('active');
 }



 let parentElement = document.getElementById('parent');
 if (parentElement) {
    let descendants = parentElement.getElementsByTagName('*');
    console.log('Количество потомков:', descendants.length);
 } else {
    console.log('Элемент с идентификатором "parent" не найден.');
 }


