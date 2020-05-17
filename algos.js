const rev = val => {
    let res = 0;
    const base = 10
    while (val) {
        res = res * base + (val % base)
        val = (val/base) | 0
    }
}

