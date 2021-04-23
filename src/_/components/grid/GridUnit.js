import React from 'react'
import { useLocalStorage } from 'react-use-storage'


export const GridUnit = ({ title, name = 'grid-item' }) => {
    const [state, setState] = useLocalStorage(name, []);
    const onAppend = () => {
        const item = {
            key: new Date().getTime(),
            value: 1,
            unit: 'fr'
        }
        setState([...state, item])
    }
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
            <h5 className="card-header">
                {title}
                <button onClick={onAppend}
                    className="btn btn-sm btn-primary float-right">+</button>
            </h5>
            <div className="card-body">
                {
                    state.map((it, ix) => (
                        <ItemInput key={it.key}
                            model={it}
                            onChange={e => onChange(e, ix)}
                            onRemove={e => onRemove(ix)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const UNITS = ['fr', 'px', '%', 'em', 'auto', 'min-content', 'max-content', 'minmax']
const ItemInput = ({ index = 0, model = {}, onChange = console.log, onRemove = console.log }) => {
    return (
        <div className="input-group input-group-sm mb-1">
            <input name="value"
                type="number"
                value={model.value}
                onChange={e => onChange(e, index)}
                step={0.5}
                className="form-control" />
            <select name="unit"
                value={model.unit}
                onChange={e => onChange(e, index)}
                className="custom-select">
                {UNITS.map(unit => <option key={unit}>{unit}</option>)}
            </select>
            <div className="input-group-append">
                <button onClick={e => onRemove(index)}
                    className="btn btn-danger">x</button>
            </div>
        </div>
    )

}
