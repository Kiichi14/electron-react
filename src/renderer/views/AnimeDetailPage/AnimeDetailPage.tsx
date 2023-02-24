/* eslint-disable import/no-named-as-default */
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAnimeStatus } from 'renderer/store/selectors/anime/animeSelector';
import fetchAnimeById from 'renderer/store/effects/anime/fetchAnimeEffect';
import { useAppDispatch } from '../../hooks/useAppSelector';
import './style/detail.css';

const AnimeDetailPage = () => {
  const { info } = useSelector(selectAnimeStatus);

  const { genres } = info;

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) dispatch(fetchAnimeById({ id: Number(id) }));
    else navigate('/');
  }, [dispatch, id, navigate]);

  return id !== undefined ? (
    <div className="animeDetail">
      <h1>Détail de l&apos;Anime :</h1>
      <div className="containerInfo">
        <div className="imgAnime">
          <img src={info.images?.jpg.large_image_url} alt="anime couverture" />
        </div>
        <div className="info">
          <p>Titre de l&apos;anime : {info.title}</p>
          <div className="tags">
            {genres.map((tags) => (
              <p className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                {tags.name}
              </p>
            ))}
          </div>
          <p>Date de Parution : {info.year}</p>
          <p>Durée moyen d&apos;un épisode : {info.duration}</p>
          <p>Nombre d&apos;épisode : {info.episodes}</p>
          <p>Classification : {info.rating}</p>
          <p>Synopsis : {info.synopsis}</p>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AnimeDetailPage;
