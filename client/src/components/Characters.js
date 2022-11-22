import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS, GET_CHARACTERS_PAGE } from "../graphql/Query";

const Characters = () => {
  const [page, setPage] = useState(1)
  const { data: { characters, charactersPage } = [], loading, error, } = useQuery(GET_CHARACTERS_PAGE, {
    variables: { page },
    fetchPolicy: 'network-only',
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const { results, info: { pages, next, prev } } = charactersPage

  const chars = Object.values(results).map(char =>
    <div className="container" key={char.id}>
      <img src={char.image} alt={char.image} />
      <p className="character-name">{char.name}</p>
      <p className="character-status">Status: {char.status}</p>
    </div >
  )

  const getPageNumFromUrl = (url) => {
    return parseInt(url.substr(url.indexOf('?page=')).substr(6))
  }

  const handlePaginationClick = (e, url) => {
    e.preventDefault()
    const pageNum = getPageNumFromUrl(url)
    setPage(pageNum)
  }

  return (
    <>
      <h1>Rick and Morty API</h1>
      <h2>Page: {page} of {pages}</h2>
      <div className="button-group">
        <button onClick={e => handlePaginationClick(e, prev)} disabled={page <= 1}>Prev</button>
        <button onClick={e => handlePaginationClick(e, next)} disabled={page >= pages}>Next</button>
      </div>

      <div className="character">{chars}</div>
    </>
  );
};

export default Characters
