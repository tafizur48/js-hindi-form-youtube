const button = document.querySelectorAll('.button') //console.log(button);
const body = document.querySelector('body')  //this is nodelist toh forEach laga Chakta hu

// using forEach method
button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){    //this e just a name(variable name) whatever to give the name its a parameter
        // console.log(e)
        // console.log(e.target);
    //     if(e.target.id === 'grey'){
    //         body.style.backgroundColor = e.target.id
    //     }

    //     if(e.target.id === 'white'){
    //         body.style.backgroundColor = e.target.id
    //     }

    //     if(e.target.id === 'blue'){
    //         body.style.backgroundColor = e.target.id
    //     }

    //     if(e.target.id === 'yellow'){
    //         body.style.backgroundColor = e.target.id
    //     }

    //     if(e.target.id === 'purple'){
    //         body.style.backgroundColor = e.target.id
    //     }


    // using switch case method
    switch (e) {
        case 1:
            e.target.id === 'grey'
            break;

        case 2:
            e.target.id === 'white'
            break;

        case 3:
            e.target.id === 'blue'
            break;

        case 4:
            e.target.id === 'yellow'
            break;

        case 5:
            e.target.id === 'purple'
            break;
    
        default:
            body.style.backgroundColor = e.target.id
            break;
    }

    });

    
});
