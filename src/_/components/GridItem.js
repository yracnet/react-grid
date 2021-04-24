import React, { useState } from 'react'
import { useLocalStorage } from 'react-use-storage';
import { SketchPicker } from 'react-color';

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
                    <ItemInput
                        key={it.key}
                        model={it}
                        index={ix}
                        onChange={onChange}
                        onRemove={onRemove} />
                ))}
            </div>
        </div>
    )
}

const ItemInput = ({ index = 0, model = {}, onChange = console.log, onRemove = console.log }) => {
    const [open, setOpen] = useState(false)
    const onChangeColor = (color, index) => {
        onChange({ target: { name: 'color', value: color.hex } }, index)
    }
    return (
        <div>
            <div className="input-group input-group-sm mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">{index + 1}</span>
                </div>
                <div className="input-group-prepend">
                    <button className="btn btn-primary"
                        style={{ backgroundColor: model.color }}
                        onClick={e => setOpen(!open)}>
                        <i className="fa fa-paint" />
                        {model.color}
                    </button>
                </div>
                <input name="name"
                    type="text"
                    value={model.name}
                    onChange={e => onChange(e, index)}
                    step={0.5}
                    className="form-control" />
                <div className="input-group-append">
                    <button onClick={e => onRemove(index)}
                        className="btn btn-danger">
                        <i className="fa fa-times" />
                    </button>
                </div>
            </div>
            {
                open
                &&
                <div className="popover">
                    <div className="popover-body">
                        <SketchPicker color={model.color}
                            onChange={e => onChangeColor(e, index)} />
                        <button className="btn btn-primary w-100"
                            style={{ backgroundColor: model.color }}
                            onClick={e => setOpen(false)}>
                            <i className="fa fa-times mr-2" />
                            Close: {model.color}
                        </button>
                    </div>
                </div>
            }
        </div >
    )

}
