
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../hooks/UseMenu';

const PopularMenu = () => { 
const [menu]=UseMenu();

const popular=menu.filter(data=>data.category==="popular")

    return (
        <section>
            <SectionTitle heading="From Our Menu" subheading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    popular.map(item => <MenuItem key={item._id} items={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;