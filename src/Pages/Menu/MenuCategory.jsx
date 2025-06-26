
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
        </div>
    );
};

export default MenuCategory;