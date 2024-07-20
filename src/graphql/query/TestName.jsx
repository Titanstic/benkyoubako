import {gql} from "@apollo/client";

export const TEST_NAME_BY_TYPE_AND_LEVEL = gql`
query MyQuery($level: String!, $type: String!) {
  test_name(where: {language_level: {level_name: {_eq: $level}}, test_type: {type_name: {_eq: $type}}}, order_by: {id: asc}) {
    test_name
    id
    total_mark
    checked
  }
}
`

export const TEST_NAME_BY_ID = gql`
    query MyQuery( $id: Int!) {
      test_name_by_pk(id: $id) {
        total_mark
        test_name
        level_id
      }
    }
`

export const GET_QUESTION = gql`
    query MyQuery($testId: Int!) {
      question(where: {test_id: {_eq: $testId}}) {
        question_text
        multiple_choice
        id
        answers {
          answer_text
        }
      }
    }
`