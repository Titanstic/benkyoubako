import {gql} from "@apollo/client";

export const GET_TEST_NAME = gql`
    query MyQuery {
      test_name(order_by: {language_level: {id: desc}}) {
        id
        test_name
        language_level {
          level_name
          id
        }
        checked
        test_type {
          id
          type_name
        }
      }
    }

`