import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import axios from 'axios'
import Table from '../components/Table';
import MovieForm from '../components/MovieForm';

const HomePage = () => {

    const api = axios.create({
        baseURL: "http://localhost:8000"
    })

    const [movies, setMovies] = useState([]);
    const [action, setAction] = useState("add");
    const [loading, setLoading] = useState(false);
    const [, setError] = useState("");
    const [, setMessage] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        media_type: "",
        year: "",
        rating: "",
    });

    const [editId, setEditId] = useState(null);


    const fetchMovies = async () => {
        setLoading(true);
        try {
            const res = await api.get("/movielist");
            setMovies(res.data);
            setError("");
        } catch {
            setError("Failed to fetch movies");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, []);


    const handleActionChange = (e) => {
        setAction(e.target.value);
        setFormData({ title: "", media_type: "", year: "", rating: "" });
        setEditId(null);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleAddMovie = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");

        try {
            await api.post("/movielist", { title: formData.title });
            setMessage("Movie added successfully");
            setFormData({ title: "", media_type: "", year: "", rating: "" });
            fetchMovies();
        } catch (err) {
            setError(err.response?.data?.detail || "Failed to add movie");
        }

        setLoading(false);
    };


    const handleEdit = (movie) => {
        setAction("update");
        setEditId(movie.id);
        setFormData({
            title: movie.title,
            media_type: movie.media_type || "",
            year: movie.year || "",
            rating: movie.rating || "",
        });
    };


    const handleUpdateMovie = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");

        try {
            await api.put(`/movielist/${editId}`, {
                title: formData.title,
                media_type: formData.media_type,
                year: Number(formData.year),
                rating: Number(formData.rating),
            });

            setMessage("Movie updated successfully");
            setAction("add");
            setEditId(null);
            setFormData({ title: "", media_type: "", year: "", rating: "" });
            fetchMovies();
        } catch {
            setError("Failed to update movie");
        }

        setLoading(false);
    };

    const handleRefresh = () => {
        fetchMovies();
    }


    const handleDelete = async (id) => {
        const ok = window.confirm("Delete this movie?");
        if (!ok) return;

        setLoading(true);
        setError("");
        setMessage("");

        try {
            await api.delete(`/movielist/${id}`);
            setMessage("Movie deleted successfully");
            fetchMovies();
        } catch {
            setError("Failed to delete movie");
        }

        setLoading(false);
    };

    return (
            <div className="movie-manager">
                <div className="header">
                    <h1>My Movie DB</h1>

                </div>

                <div className="controls">
                    <select
                        value={action}
                        onChange={handleActionChange}
                        className="action-select"
                    >
                        <option value="add">Add Movie to List</option>
                        <option value="update">Update Movie from DB</option>
                    </select>
                </div>

                <MovieForm
                    action={action}
                    handleAddMovie={handleAddMovie}
                    handleUpdateMovie={handleUpdateMovie}
                    formData={formData}
                    handleInputChange={handleInputChange}
                />

                <Table
                    movies={movies}
                    handleRefresh={handleRefresh}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    loading={loading}
                />
            </div>
    );
};

export default HomePage;
