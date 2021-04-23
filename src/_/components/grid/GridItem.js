import React from 'react'
import { useLocalStorage } from 'react-use-storage';

export const GridItem = ({ title, store }) => {
    const [state, setState] = useLocalStorage(store, []);
    const onChange = ({ target }, ix) => {
        const { name, value } = target;
        const newState = [...state]
        newState[ix][name] = value;
        setState(newState)
    }
    const onRemove = (ix) => {
        const newState = state.filter((it, i) => i !== ix);
        setState(newState)
    }
    return (
        <div className="card card-sm mb-2">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                {state.map((it, ix) => (
                    <ItemInput model={it} index={ix} onChange={onChange} onRemove={onRemove} />
                ))}
            </div>
        </div>
    )
}

const COLORS = ['red', 'blue', 'green']
const ItemInput = ({ index = 0, model = {}, onChange = console.log, onRemove = console.log }) => {
    return (
        <div className="input-group input-group-sm mb-1">
            <input name="name"
                type="text"
                value={model.name}
                onChange={e => onChange(e, index)}
                step={0.5}
                className="form-control" />
            <select name="color"
                value={model.color}
                onChange={e => onChange(e, index)}
                className="custom-select">
                {COLORS.map(unit => <option key={unit}>{unit}</option>)}
            </select>
            <div className="input-group-append">
                <button onClick={e => onRemove(index)}
                    className="btn btn-danger">x</button>
            </div>
        </div>
    )

}
