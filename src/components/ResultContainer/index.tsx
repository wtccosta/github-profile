import './styles.css';

import { Profile } from 'types/profile';
<<<<<<< HEAD
=======

>>>>>>> refatoctoring
import ResultCard from 'components/ResultCard';

type Props = {
  profile?: Profile;
<<<<<<< HEAD
}

const ResultContainer = ( {profile }: Props) => {
  return (
    <div className="result-container">
      <div className="profile-image">
        <p>Imagem</p>
        <img src={profile?.avatar_url} alt={profile?.name} />
      </div>
      <div className="profile-records">
        <h3 className="text-primary">Informações</h3>
=======
};
const ResultContainer = ({ profile }: Props) => {
  return (
    <div className="result-container">
      <div className="profile-image">
        <img src={profile?.avatar_url} alt={profile?.name} />
      </div>
      <div className="profile-records">
        <h3>Informações</h3>
>>>>>>> refatoctoring
        <ResultCard title="Perfil" description={profile?.url} link={true} />
        <ResultCard title="Número" description={profile?.followers} />
        <ResultCard title="Localidade" description={profile?.location} />
        <ResultCard title="Número" description={profile?.name} />
      </div>
    </div>
  );
};

export default ResultContainer;
