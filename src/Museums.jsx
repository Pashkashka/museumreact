import {Link } from 'react-router-dom'

function Museums({ museums, onChangeSearchInput, searchValue, setSearchValue, onMuseumClick }) {
    return (
        <div className="content">


            <div className="search-blok">

                <img width={15} height={15} src="img/search.png" alt="Search" />
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
            </div>
            <h1>{searchValue ? 'Search by request:   ' : 'Museums'} </h1>

            <div className="Pizza">

                {
                    museums.filter((museum) => museum.title.toLowerCase().includes(searchValue.toLowerCase())).map((museum) => (

                        <Link to="/exhibitions"   className="Link">
                            <div className="card" key={museum.id}
                                onClick={() => onMuseumClick(museum)} >
                                

                                <img width={200} height={200} src={museum.imageUrl} alt="Museum" />

                                <h5>{museum.title} </h5>
                            <div className="cardButt"></div>
                            <div className="Price"></div>
                            <div>
                                <div>
                                    <span>Price:</span>
                                        <b>{museum.Price}</b>
                                </div>
                            </div>
                            </div>
                        </Link>



                    )
                    )
                }


            </div>

        </div >);
}
export default Museums;