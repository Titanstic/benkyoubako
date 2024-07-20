import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    testDatas: [],
    questionDatas: [],
    loading: false,
    error: null
};

const querySlice = createSlice({
    name: "apiQueryAndMutation",
    initialState,
    reducers: {
        getDataStart: (state) => {
            state.loading = true;
            state.testDatas = [];
            state.questionDatas = [];
            state.error = null
        },
        getTestData: (state, action) => {
            state.loading = false;
            state.testDatas = action.payload;
            state.error = null
        },
        getQuestionData: (state, action) => {
            state.loading = false;
            state.testDatas = action.payload;
            state.error = null
        },
        getDataFailure: (state, action) => {
            state.testDatas = [];
            state.questionDatas = [];
            state.loading = false;
            state.error = action.payload;
        }
    }
});


export const { getDataStart, getTestData, getQuestionData, getDataFailure  } = querySlice.actions;

export default querySlice.reducer;