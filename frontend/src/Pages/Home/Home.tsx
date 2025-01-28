import React from 'react';

import Film from '../../Components/Home/Film/Film.tsx';
import Genre from '../../Components/Home/Genre/Genre.tsx';
import Menu from '../../Components/Menu/Menu.tsx';

import Styles from "./Home.module.scss";

import Pocket from "../../assets/pocket.png";
import User from "../../assets/user.png";

const Home:React.FC = () => {
 // const [films, setFilms] = useState([]);

 /* useEffect(() => {
    fetch('http://localhost:5000/films')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Erreur:', error));
  }, []); */
  return (
    <div className={Styles.container}>
      <Menu img={User} title='Pour Toto'/>
      <Film title={'Title'} description={'Imperiali seminecem inpulsu similia formidabat cuiusdam ingravesceret incessens famis sibi addictum quod et subditis ingravesceret miserando seminecem addictum audaciam subditis seminecem vulgi seminecem similia discerpsit similia periculi miserando subditis quisque exitio imaginem imperiali post seminecem discerpsit sibi imaginem famis domum inpulsu lacrimosum ingravesceret documento famis subditis ambitiosam cum inter periculi ut similia inflammavit unius famis rectoremque inflammavit pugnis sordidioris pugnis haec et et sordidioris calcibus ingravesceret recenti ignibus penuria ingravesceret furoris domum quisque imperiali commeatuum furoris audaciam suos formidabat considerans vulgi interitum documento incessens formidabat iudicio laniatu sui quod unius haec lacrimosum exitio famis ignibus inter unius similia inpulsu ingravesceret.'} img={Pocket}/>
      <Genre title={'Humour'} image={'Image humour'}/>
      <Genre title={'Drame'} image={'Image drame'}/>
      <Genre title={'Suspence'} image={'Image Suspence'}/>
    {/** <ul>
        {films.map(film => (
          <li key={film.id}>
            {film.title} - Réalisé par {film.director}
          </li>
        ))}
      </ul>*/}  
    </div>
  );
};
export default Home;