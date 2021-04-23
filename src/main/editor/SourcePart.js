import { useLocalStorage } from 'react-use-storage';

export const SourcePart = ({ className }) => {
    const [col] = useLocalStorage('columns', []);
    const [row] = useLocalStorage('rows', []);
    const [gap] = useLocalStorage('gaps', []);

    const gridCols = col.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gridRows = row.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gridGaps = gap.reduce((str, it) => str + ' ' + it.value + it.unit, '');

    const inlineStyle = `
.grid-container {
    display: grid;
    grid-template-columns: ${gridCols};
    grid-template-rows: ${gridRows};
    gap: ${gridGaps};
}
    `
    return (
        <div className={className}>
            <code className="card card-sm">
                <h5 className="card-header">CSS Source</h5>
                <pre className="card-body">{inlineStyle}</pre>
            </code>
        </div>
    )
}