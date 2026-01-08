function MovieForm(props) {
    const {action ,handleAddMovie , handleUpdateMovie , formData , handleInputChange} = props
    return (
        
        <form className="movie-form" onSubmit={action === 'add' ? handleAddMovie : handleUpdateMovie}>
            {action === 'add' ? (
                <div className="simple-form">
                    <div className="form-group">
                        <label>Movie Name</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter movie name only"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Add to List</button>
                </div>
            ) : (
                <div className="full-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Title *</label>
                            <input
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Movie Type</label>
                            <select name="movieType" value={formData.movieType} onChange={handleInputChange}>
                                <option value="">Select Type</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Year</label>
                            <input
                                name="year"
                                value={formData.year}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Rating</label>
                            <input
                                name="rating"
                                value={formData.rating}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">Update Movie</button>
                </div>
            )}
        </form>
    );
}

export default MovieForm;