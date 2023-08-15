import allIcon from '../assets/img/all_button.svg';
import favIcon from '../assets/img/favorites_button.svg';

import anxiousIcon from '../assets/img/anxious_button.svg';
import strengthIcon from '../assets/img/strength_button.svg';
import flexibilityIcon from '../assets/img/flexibility_button.svg';
import beginnerIcon from '../assets/img/beginner_button.svg';
import intermediateIcon from '../assets/img/intermediate_button.svg';
import expertIcon from '../assets/img/expert_button.svg';

// import allIconActive from '../assets/img/all_button_active.svg'
import favIconActive from '../assets/img/favorites_active_button.svg';
import anxiousIconActive from '../assets/img/anxious_active_button.svg';
import strengthIconActive from '../assets/img/strength_active_button.svg';
import flexibilityIconActive from '../assets/img/flexibility_active_button.svg'
import beginnerIconActive from '../assets/img/beginner_button_active.svg';
import intermediateIconActive from '../assets/img/intermediate_button_active.svg'
import expertIconActive from '../assets/img/expert_button_active.svg';

const FilterButton = (props) => {
    const {filters, setFilters} = props;

    const handleButtons = (input) => {
        if(input === 'reset') {
            setFilters({})
        }
        else {
            setFilters({...filters, ...input})
        }
    }

    return (
        <section className='filterButton'>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons('reset')}><img src={allIcon}/></button>
                <p className='text'>All</p>
            </div>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons({favs: true})}><img src={filters.favs === true ? favIconActive : favIcon}/></button>
                <p className='text'>Favourites</p>
            </div>
            <div className='filterButtonContainer'>
               <button onClick={() => handleButtons({category: 'stressrelief'})}><img src={filters.category === 'stressrelief' ? anxiousIconActive : anxiousIcon}/></button>
                <p className='text'>Stress</p>
            </div>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons({category: 'strength'})}><img src={filters.category === 'strength' ? strengthIconActive : strengthIcon}/></button>
                <p className='text'>Strength</p>
            </div>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons({category: 'flexibility'})}><img src={filters.category === 'flexibility' ? flexibilityIconActive : flexibilityIcon}/></button>
                <p className='text'>Flexibility</p>
            </div>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons({level: 'beginner'})}><img src={filters.level === 'beginner' ? beginnerIconActive : beginnerIcon}/></button>
                <p className='text'>Beginner</p>
            </div>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons({level: 'intermediate'})}><img src={filters.level === 'intermediate' ? intermediateIconActive : intermediateIcon}/></button>
                <p className='text'>Intermediate</p>
            </div>
            <div className='filterButtonContainer'>
                <button onClick={() => handleButtons({level: 'expert'})}><img src={filters.level === 'expert' ? expertIconActive : expertIcon}/></button>
                <p className='text'>Expert</p>
            </div>
        </section>
    )
}

export default FilterButton