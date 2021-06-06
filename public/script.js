function verify(){
    fetch('http://localhost:3000/redirectToLogin?success=false')
    .then(res => res.json())
    .then(res => {
        if(res.type == 'failure'){
            window.location.replace(`http://localhost:3000/${res.to}`)
        }
    })
}

verify();