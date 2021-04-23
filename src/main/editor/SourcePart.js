import { useLocalStorage } from 'react-use-storage';
import { createCSS, createHTML } from '_/helpers/grid';

export const SourcePart = ({ className }) => {
    const [cols] = useLocalStorage('columns', []);
    const [rows] = useLocalStorage('rows', []);
    const [gaps] = useLocalStorage('gaps', []);
    const [items] = useLocalStorage('grid-design', []);

    const inlineStyle = createCSS('grid-container', { cols, rows, gaps, items });
    const inlineHtml = createHTML('grid-container', { cols, rows, gaps, items });

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