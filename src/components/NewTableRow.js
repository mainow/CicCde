function NewTableRow({ date, title, content, onDeleteNew=()=>{}, onEditNew=()=>{} }) {
    return (
        <tr className="new-table-row">
            <td>{date}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td className="edit-cta-new-table-row d-flex gap-1 justify-content-end">
                <button onClick={onDeleteNew} className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                </button>
                <button onClick={onEditNew} className="btn btn-success">
                    <i className="fa-solid fa-pencil"></i>
                </button>
            </td>
        </tr>
    );
}

export default NewTableRow;