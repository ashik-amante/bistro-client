
import { Link } from 'react-router-dom';
import Cover from '../Home/Shared/Cover/Cover';
import MenuItem from '../Home/Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='pt-8'>
            {title && <Cover
                img={coverImg}
                title={title}
            ></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._key}
                        item={item}
                    >
                    </MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`} className="card-actions justify-center">
                <button className="btn btn-outline mt-4 border-0 border-b-4 font-bold text-yellow-500 uppercase">Order</button>
            </Link>
        </div>
    );
};

export default MenuCategory;