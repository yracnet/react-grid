import React from 'react'
import { useLocalStorage } from 'react-use-storage';

export const GridName = ({ title, name }) => {
    const [state, setState] = useLocalStorage(name, { selected: false, name: '', start: {}, end: {} });
    const onChange = ({ target }) => {
        const { name, value } = target
        setState({ ...state, [name]: value })

    }
    return (
        <div className="card card-sm mb-2">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                Name: <input name="name" value={state.value} onChange={onChange} />
                Start: <code>{state.start.c}x{state.start.r}</code>
                End:<code>{state.end.c}x{state.end.r}</code>
            </div>
        </div>
    )
}
