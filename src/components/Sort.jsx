
const Sort = ({ sort, setSort }) => {

    const onSelectChange = ({ currentTarget: input }) => {
        console.log(input.value);
        setSort(input.value)
    }
    return (
        <div className="flex justify-center items-center">
            <form className="w-32 h-20 shadow-lg p-6 m-3">
                <label>Sort by:</label>
                <div style={{ width: '200px' }}>
                    <select
                        name="sort"
                        onChange={onSelectChange}
                        className="select"
                        defaultValue={sort}
                    >
                        <option value="price">Price low to high</option>
                        <option value="-price">Price high to low</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Sort;