/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccommodation = /* GraphQL */ `
  mutation CreateAccommodation(
    $input: CreateAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    createAccommodation(input: $input, condition: $condition) {
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
export const updateAccommodation = /* GraphQL */ `
  mutation UpdateAccommodation(
    $input: UpdateAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    updateAccommodation(input: $input, condition: $condition) {
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
export const deleteAccommodation = /* GraphQL */ `
  mutation DeleteAccommodation(
    $input: DeleteAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    deleteAccommodation(input: $input, condition: $condition) {
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
