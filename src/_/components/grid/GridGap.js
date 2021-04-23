import React from 'react'
import { useLocalStorage } from 'react-use-storage'

const INIT = [{ value: 0, unit: 'px' }, { value: 0, unit: 'px' }];

export const GridGap = ({ title, name = 'grid-gap' }) => {
    const [state, setState] = useLocalStorage(name, INIT);
    const onChange = ({ target }, index) => {
        const { name, value } = target;
        const newState = [...state]
        newState[index][name] = value;
        setState(newState)
    }
    return (
        <div className="card card-sm">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <GapInput index={0} model={state[0]} onChange={onChange} />
                <GapInput index={1} model={state[1]} onChange={onChange} />
            </div>
        </div>
    )
}

const UNITS = ['px', '%', 'em']
const GapInput = ({ index = 99, model = {}, onChange = console.log }) => {
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
        </div>
    )

}
