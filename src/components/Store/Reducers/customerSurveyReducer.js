const initState = {
  customerSurvey: [
    {id: '1', question1: 'answer1', question2: 'answer2', question3: 'answer3', question4: 'answer4'},
    {id: '2', question1: 'answer11', question2: 'answer12', question3: 'answer13', question4: 'answer14'},
    {id: '3', question1: 'answer21', question2: 'answer22', question3: 'answer23', question4: 'answer24'}
  ]
}

const customerSurveyReducer = (state = initState, action) => {
  return state
}
export default customerSurveyReducer