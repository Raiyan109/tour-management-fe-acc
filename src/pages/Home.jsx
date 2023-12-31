import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Tours from './Tours';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';

const Home = () => {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')

    const base_url = 'http://localhost:5000/api/v1/tours'

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const url = `${base_url}?sort=${sort}&search=${search}`

                setLoading(true)
                const { data } = await axios.get(url)

                setTours(data.data)

                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchTours()
    }, [sort, search])
    console.log(tours);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = tours.slice(indexOfFirstPost, indexOfLastPost)


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
            <Navbar setSearch={(search) => setSearch(search)} />
            <Sort sort={sort} setSort={setSort} />
            <Tours tours={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={tours.length} paginate={paginate} />
        </div>
    );
};

export default Home;