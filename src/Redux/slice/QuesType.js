import { createSlice } from "@reduxjs/toolkit";

const stateChoice = {
  singleChoice: true,
  multipleChoice: false,
};

export const QuesType = createSlice({
  name: "QUESTION_TYPE",
  initialState: stateChoice,
  reducers: {
    showSingleChoiceQues: (state) => {
      state.singleChoice = true;
    },
    dontShowSingleChoiceQues: (state) => {
      state.singleChoice = false;
      console.log("single...:", state.singleChoice);
    },
    showMultipleChoiceQues: (state) => {
      state.multipleChoice = true;
      //   state.multipleChoice = action.payload;
      //   console.log("multiple", action.payload);
    },
    dontShowMultipleChoiceQues: (state) => {
      state.multipleChoice = false;
    },
  },
});

export const {
  showSingleChoiceQues,
  dontShowSingleChoiceQues,
  showMultipleChoiceQues,
  dontShowMultipleChoiceQues,
} = QuesType.actions;
export default QuesType.reducer;
