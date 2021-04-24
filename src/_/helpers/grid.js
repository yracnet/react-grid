const reduceUnit = (str, it) => {
    if (typeof it === 'string') {
        return str + ' ' + it;
    } else {
        return str + ' ' + it.value + it.unit;
    }
}

export const assertItems = (items = [], props = {}) => {
    const { cols = [], rows = [] } = props
    const cs = cols.length - 1
    const rs = rows.length - 1
    return items.map(it => {
        let { end, start } = it
        if (start.c > cs || start.r > rs) {
            return undefined;
        }
        end.c = end.c > cs ? cs : end.c;
        end.r = end.r > rs ? rs : end.r;
        return { ...it, end };
    }).filter(it => it)
}

export const createCSS = (name = 'grid-container', items = [], opts = {}) => {
    const { cols = [], rows = [], gaps = [] } = opts

    const gtc = cols.reduce(reduceUnit, '');
    const gtr = rows.reduce(reduceUnit, '');
    const gtg = gaps.reduce(reduceUnit, '');



    const gtiStyles = items
        .reduce((str, it) => str + `
.${name} > .${it.name}{
    grid-area: ${it.start.r + 1} / ${it.start.c + 1} / ${it.end.r + 2} / ${it.end.c + 2};
    border: 4px solid ${it.color};
}`, '')
    return `.${name} {
    display: grid;
    grid-template-columns: ${gtc};
    grid-template-rows: ${gtr};
    gap: ${gtg};
}${gtiStyles}`
}



export const createHTML = (name = 'grid-container', items = []) => {
    const divHtml = items
        .reduce((str, it) => str + `
   <div class="${it.name}"> ${it.name} </div>`, '')
    return (
        `<div class="${name}">${divHtml}
</div>`
    )
}



