
// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
    // console.log(postsPerPage, totalPosts);
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers);
    return (
        <div>
            <div className="flex justify-center space-x-1 text-gray-800">
                {/* <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button> */}
                {pageNumbers.map(item => (
                    <div key={item}>
                        <button
                            onClick={() => paginate(item)}
                            className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50 text-orange-600 border-orange-600">{item}</button>
                    </div>
                ))}
                {/* <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 2">2</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 3">3</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100" title="Page 4">4</button> */}
                {/* <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button> */}
            </div>
        </div>
    );
};

export default Pagination;