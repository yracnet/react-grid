import { useLocalStorage } from 'react-use-storage';
import { assertItems, createCSS, createHTML } from '_/helpers/grid';

export const SourcePart = ({ className }) => {
    const [cols] = useLocalStorage('grid-cols', []);
    const [rows] = useLocalStorage('grid-rows', []);
    const [gaps] = useLocalStorage('grid-gaps', []);
    const [items, setItems] = useLocalStorage('grid-items', []);
    const opts = { cols, rows, gaps }

    const allowItems = assertItems(items, opts);
    if (items.length !== allowItems.length) {
        // ??????
        setItems(allowItems)
    }

    const inlineStyle = createCSS('grid-container', allowItems, opts);
    const inlineHtml = createHTML('grid-container', allowItems, opts);

    return (
        <div className={className}>
            <code className='card card-sm mb-2'>
                <h5 className="card-header">CSS Source</h5>
                <pre className="card-body overflow-auto">{inlineStyle}</pre>
            </code>
            <code className='card card-sm mb-2'>
                <h5 className="card-header">HTML Source</h5>
                <pre className="card-body overflow-auto">{inlineHtml}</pre>
            </code>
        </div>
    )
}