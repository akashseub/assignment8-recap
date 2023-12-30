

const Header = () => {
    return (
        <div className="lg: max-w-7xl mx-auto text-center items-center space-y-12 mt-12 pb-36">
            <h2 className="font-extrabold text-5xl">I Grow By Helping People In Need</h2>
            <div className="flex justify-center">
                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs rounded-r-none" />
                <button className="btn btn-secondary rounded-l-none">Search</button>
            </div>
        </div>
    );
};

export default Header;