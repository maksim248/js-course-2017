(function() {
    let height = 1,
        block = '#',
        space = ' ';

    if (height<2) {
        return console.log('Error! Height must be >= 2');
    }

    for (let i = 0; i < height; i++) {
        console.log(space.repeat(height-i) + block.repeat(i+1) + space.repeat(2) + block.repeat(1+i));
    }
})();
