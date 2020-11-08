import React from 'react'
import { render, screen } from '@testing-library/react'
import DetailsPage from '../components/DetailsPage'

test('renders the correct movie details', () => {

  const m = {
    title: 'foo',
    tagline: 'bar',
    runtime: 123,
    release_date: '12-12-2020',
  }

  //@ts-ignore
  render(<DetailsPage movie={m}/>)

  const title = screen.getByText(m.title)
  expect(title).toBeInTheDocument()

  const tagline = screen.getByText(m.tagline)
  expect(tagline).toBeInTheDocument()

  const runtime = screen.getByText(m.runtime.toString())
  expect(runtime).toBeInTheDocument()

  const releaseDate = screen.getByText(m.release_date)
  expect(releaseDate).toBeInTheDocument()
})
