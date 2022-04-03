

export const Pagination=({paginate,totaldatas,dataPerPage})=>{
    const pages=[]
    for(let i=1;i<=Math.ceil(totaldatas/dataPerPage);i++){
        pages.push(i)
    }
    return (
        <nav>
            {/* <ul className='pagination'> */}
                {pages.map((number)=>(
                    <button key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>{number}</a>
                    </button>
                ))}
            
        </nav>
    )

}