import './styles.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import GitSearchLoader from './GitSearchLoader';
import { Profile } from 'types/profile';

import ResultContainer from 'components/ResultContainer';

type FormData = {
  user: string;
};

const GitSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
      console.log(profile, isLoading);
      
  }, [profile, isLoading])

  return (
    <div className="user-search-container">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading  ?
        (<GitSearchLoader />) : (
        <ResultContainer profile={profile}/>
        )}
    </div>
  );
};

export default GitSearch;
