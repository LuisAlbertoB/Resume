import Title01 from '../atoms/Title01';
import '../../assets/styles/Container.css'
import TextLine01 from '../atoms/TextLine01';
import information from '../../data/information';

function Container() {
    return ( 
            <section class="studies">
            <Title01 msn="Studies." class="font" />
            <section class="txtStudies">
                <div class="left">
                <TextLine01 msn={information.year01} />
                <TextLine01 msn={information.cityContry01} />
                </div>
                <div class="right">
                <TextLine01 msn={information.title01} />
                <TextLine01 msn={information.school01} />
                </div>
                </section>

            <section class="txtStudies">
                <div class="left">
                <TextLine01 msn={information.year02} />
                <TextLine01 msn={information.cityContry02} />
                </div>
                <div class="right">
                <TextLine01 msn={information.title02} />
                <TextLine01 msn={information.school02} />
                </div>
                </section>

                <section class="txtStudies">
                <div class="left">
                <TextLine01 msn={information.year03} />
                <TextLine01 msn={information.cityContry03} />
                </div>
                <div class="right">
                <TextLine01 msn={information.title03} />
                <TextLine01 msn={information.school03} />
                </div>
                </section>

                <section>
                <Title01 msn="Languages." />
                <TextLine01 msn={information.lenguage01} />
                <TextLine01 msn={information.lenguage02} />
                </section>

                <Title01 msn="Work experience." />
                <a href="https://github.com/LuisAlbertoB/FumaMenosAplicacionWeb.git">
                <TextLine01 msn={information.workExperience01} />
                </a>

                <a href="https://github.com/LuisAlbertoB/edC1A2Caso1Minisuper.git">
                <TextLine01 msn={information.workExperience02} />
                </a>

                <a href="https://github.com/LuisAlbertoB/Veterinaria2.git">
                <TextLine01 msn={information.workExperience03} />
                </a>

                <Title01 msn="Additional training and interests" />
                <TextLine01 msn={information.additionalTrainingAndInterests} />
                </section>
                
                
        );
}

export default Container;