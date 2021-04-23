import { useLocalStorage } from 'react-use-storage';

export const SourcePart = ({ className }) => {
    const [col] = useLocalStorage('columns', []);
    const [row] = useLocalStorage('rows', []);
    const [gap] = useLocalStorage('gaps', []);

    const gtc = col.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const ctr = row.reduce((str, it) => str + ' ' + it.value + it.unit, '');
    const gg = gap.reduce((str, it) => str + ' ' + it.value + it.unit, '');

    const inlineStyle = `
.grid-container {
    display: grid;
    grid-template-columns: ${gtc};
    grid-template-rows: ${ctr};
    gap: ${gg};
    grid-template-areas:
        ". . . . ."
        ". . . . ."
        ". . . . .";
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