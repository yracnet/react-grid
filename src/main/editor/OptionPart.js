
export const OptionPart = ({ ...props }) => {
    return (
        <div {...props}>
            <button className="btn btn-danger">
                <i className="fa fa-download mr-2" />
                Download
            </button>
        </div>
    )
}
