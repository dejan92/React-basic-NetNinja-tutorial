const initState = {
  posts: [
    {
      id: "1",
      title: "post1",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint inventore qui nostrum voluptatum perspiciatis quis in atque eligendi soluta, tempore, architecto, temporibus praesentium facere enim sit odit totam eveniet laudantium?"
    },
    {
      id: "2",
      title: "post2",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint inventore qui nostrum voluptatum perspiciatis quis in atque eligendi soluta, tempore, architecto, temporibus praesentium facere enim sit odit totam eveniet laudantium?"
    },
    {
      id: "3",
      title: "post3",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint inventore qui nostrum voluptatum perspiciatis quis in atque eligendi soluta, tempore, architecto, temporibus praesentium facere enim sit odit totam eveniet laudantium?"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    })
    return {
      ...state,
      posts: newPosts
    }
  } 
  return state;
}

export default rootReducer