function NewsTable({ news }) {
    return (
        <table className='news-table'>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Titulo</th>
                    <th>Contenido</th>
                </tr>
            </thead>
            <tbody>
                {
                    // should return a NewTableRow component
                    news.map(n => n)
                }
            </tbody>
        </table>
    );
}

export default NewsTable;