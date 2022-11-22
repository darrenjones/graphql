import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
 query GetCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`;


export const GET_CHARACTERS_PAGE = gql`
  query GetCharacters($page: Int!) {
  charactersPage(page: $page) {
      info {
      count
      pages
      next
      prev
    }
      results {
      id
      name
      status
      image
    }
  }
}
`;