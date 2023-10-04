
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {

    const { title , image_url , details , _id} = aNews || {}

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-10">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        {
                            details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`}
                            className='text-blue-600'>Read More...</Link> </p> :
                            <p>{details}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNews: PropTypes.object.isRequired
}


export default NewsCard;