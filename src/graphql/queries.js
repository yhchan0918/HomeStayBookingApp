/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccommodation = /* GraphQL */ `
  query GetAccommodation($id: ID!) {
    getAccommodation(id: $id) {
      id
      image
      type
      title
      maxGuests
      description
      bed
      bedroom
      oldPrice
      newPrice
      totalPrice
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listAccommodations = /* GraphQL */ `
  query ListAccommodations(
    $filter: ModelAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccommodations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
        maxGuests
        description
        bed
        bedroom
        oldPrice
        newPrice
        totalPrice
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
