import { render } from '@testing-library/react';
import {
  animesSlice,
  initialState,
} from 'renderer/store/slices/anime/animesSlice';
import StatusType from 'renderer/types/Status';
import { withRouter, withStore } from 'renderer/utils/testUtils';
import AnimeDetailPage from '../AnimeDetailPage';

describe('Button component', () => {
  it('should display successfully', () => {
    const page = render(
      withStore(withRouter(<AnimeDetailPage />, ['/animes/:id']))
    );
    expect(page).toBeTruthy();
  });

  it('should display card anime successfully', () => {
    const page = render(
      withStore(
        withRouter(<AnimeDetailPage />, ['/animes/:id']),
        animesSlice({
          ...initialState,
          status: StatusType.SUCCESS,
        })
      )
    );
    const card = page.getByTestId('anime-details-card');
    expect(card).toBeTruthy();
  });
});
