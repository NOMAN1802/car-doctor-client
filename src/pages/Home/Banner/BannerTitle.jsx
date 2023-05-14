

const BannerTitle = () => {
    return (
        <div className="absolute flex items-center rounded-xl h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className='text-white space-y-7 pl-12 w-1/2'>
            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Projects</button>
            </div>
        </div>
      </div>
    );
};

export default BannerTitle;