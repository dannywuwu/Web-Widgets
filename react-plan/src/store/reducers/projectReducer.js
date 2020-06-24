const initState = {
    projects: [
        {id: '1', title: 'eat breakfast', content: 'delicious'},
        {id: '2', title: 'play piano', content: 'very nice'},
        {id: '3', title: 'read webtoon', content: '서사시'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project', action.error);
            return state;
        default:
            return state;
    }
}

export default projectReducer