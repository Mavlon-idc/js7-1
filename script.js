const smth = [];
for (i = 0; i < Infinity; i++) {
    const typeIn = prompt();
    const ungroup = typeIn.split(', ');
    if (ungroup[0] === 'add') {
        smth.push(ungroup[1])
    } else if
        (ungroup[0] === 'del') {
        for(const key in smth){
            smth[key] === ungroup[1] ? smth.splice(key,1) : ''
        }
    }
    else if (typeIn = 'stop') {
        break
    }
    else {
        break
    }
    console.log(smth);
}

