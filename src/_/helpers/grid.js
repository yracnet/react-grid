const reduceUnit = (str, it) => {
    if (typeof it === 'string') {
        return str + ' ' + it;
    } else {
        return str + ' ' + it.value + it.unit;
    }
}

export const createCSS = (name = 'grid-container', props = {}) => {
    const { cols = [], rows = [], gaps = [], items = [] } = props
    const cs = cols.length
    const rs = rows.length

    const gtc = cols.reduce(reduceUnit, '');
    const gtr = rows.reduce(reduceUnit, '');
    const gtg = gaps.reduce(reduceUnit, '');



    const gtiStyles = items.map(it => {
        let { end, start } = it
        //start.c = start.c > cs ? cs : start.c;
        //start.r = start.r > rs ? rs : start.r;
        console.log('--->', end, cs);
        end.c = end.c > cs ? cs : end.c;
        end.r = end.r > rs ? rs : end.r;
        return { ...it, end };
    })
        .reduce((str, it) => str + `
.${name} > .${it.name}{
    grid-area: ${it.start.c + 1} / ${it.start.r + 1} / ${it.end.c + 2} / ${it.end.r + 2};
    border: 4px solid ${it.color};
}`, '')
    return `.${name} {
    display: grid;
    grid-template-columns: ${gtc};
    grid-template-rows: ${gtr};
    gap: ${gtg};
}${gtiStyles}`
}



export const createHTML = (name = 'grid-container', props = {}) => {
    const { items = [] } = props

    const divHtml = items.reduce((str, it) => str + `
   <div class="${it.name}"> ${it.name} </div>`, '')
    return (
        `<div class="${name}">${divHtml}
</div>`
    )
}



