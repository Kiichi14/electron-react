import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'renderer/hooks/useAppSelector';
import { selectCharacterInfo } from 'renderer/store/selectors/anime/animeSelector';

const CharacterTopPage = () => {
  const { info } = useSelector(selectCharacterInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'character/fetchCharacter', payload: {} });
  }, [dispatch]);

  console.log(info);

  return (
    <div>
      <h1>Top des Personnages : </h1>
      <NavLink to="/">Accueil</NavLink>
    </div>
  );
};

export default CharacterTopPage;
