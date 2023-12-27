
// eslint-disable-next-line react/prop-types, no-unused-vars
const Tours = ({ tours, loading }) => {
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours?.map((tour) => (
                    <div key={tour._id}>
                        <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                            <img className="rounded-xl" src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" alt="" />
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="mt-5 text-2xl font-semibold">{tour.name}</h1>
                                    <p className="mt-2">{tour.price}$</p>
                                </div>
                                <div>
                                    <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;