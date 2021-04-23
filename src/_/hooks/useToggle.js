import { useRef } from "react";

export const useToggle = (refName, props = {}) => {
    const { direction = 'LR', classCollapse = 'collapse', className = 'root-toggle', classButton = 'btn-toggle' } = props;
    const [classOpen, classClose] = direction === 'LR' ? ['fa fa-arrow-left', 'fa fa-arrow-right'] : direction === 'RL' ? ['fa fa-arrow-right', 'fa fa-arrow-left'] : []
    const ref = useRef(refName)
    const onToggle = () => {
        if (ref.current) {
            ref.current.classList.toggle(classCollapse)
        }
    }
    const Btn = (
        <div className={className}>
            <button className={classButton} onClick={onToggle}>
                <i className={'btn-open ' + classOpen} />
                <i className={'btn-close ' + classClose} />
            </button>
        </div>
    )
    return [ref, onToggle, Btn]
}
