function next(){
    const contents = document.querySelectorAll('.content');
    const sub1 = document.querySelector('sub');

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains('sub')){
            content.classList.toggle    ('active');

        }
    });
}

function prev(){
    const content = document.querySelector('.content');
    const main = document.querySelector('#main');


    content.classList.remove('active');
    main.classList.add('active');   
}