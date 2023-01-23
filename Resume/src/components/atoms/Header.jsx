import Photo from '../../assets/imgs/myPhoto.jpg';
import '../../assets/styles/Header.css'
import Title01 from './Title01';
import information from '../../data/information';
import TextLine01 from './TextLine01';

function Header() {
    return ( 
        <header>
            <img src={Photo} alt="Una foto mia" class="img" />
            <section class="infHolder">
                <Title01 msn={information.name} />
                <TextLine01 msn={information.age} />
                <TextLine01 msn={information.city} />
                <TextLine01 msn={information.celphone} />
                <TextLine01 msn={information.eMail} />
            </section>
        </header>
        
     );
}

export default Header;