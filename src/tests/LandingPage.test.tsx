import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';
import { Movie } from '../types/Movie';
test('renders the landing page correctly', () => {

  const movies = ([
    {id: 1, title: 'foo'},
    {id: 2, title: 'bar'},
    {id: 3, title: 'baz'},
  ] as Array<Movie>)

  const onClickMovieMock = jest.fn()
  const onChangeSearchMock = jest.fn()

  render(
    <LandingPage
      onClickMovie={onClickMovieMock}
      onChangeSearch={onChangeSearchMock}
      searchResults={movies}
    />
  )

  const title = screen.getByText('foo');
  expect(title).toBeInTheDocument();

  title.click()
  expect(onClickMovieMock).toBeCalledWith({id: 1, title: 'foo'});
});
