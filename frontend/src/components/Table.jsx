function Table(props) {

    const {movies , handleRefresh , handleDelete , handleEdit , loading} = props
    return (
        <div className="table-section">
            <div className="table-header">
                <h2>Movies Database ({movies.length})</h2>
                <button
                    className="refresh-btn-simple"
                    disabled={loading}
                    title="Refresh data"
                    onClick={handleRefresh}
                >
                    ⟳
                </button>
            </div>
            <div className="table-container">
                <table className="movies-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.media_type || '-'}</td>
                                <td>{movie.year || '-'}</td>
                                <td>{movie.rating || '-'}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button
                                            className="edit-btn"
                                            onClick={() => handleEdit(movie)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(movie.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {movies.length === 0 && (
                            <tr>
                                <td colSpan="6" className="no-data">
                                    No movies found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;