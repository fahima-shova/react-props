import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
const App = () => {
    return (
        <div className = 'ui container comments'>  {/* the whole coment section */}
           <CommentDetail 
              author = "Sam" 
              timeAgo = "Today at 4:00PM" 
              comment = "Good blog post!" 
              image={Faker.image.image()}
            /> 
           <CommentDetail 
              author = "Alex" 
              timeAgo = "Today at 5:00AM" 
              comment = "Amazing." 
              image={Faker.image.image()}
            /> 
           <CommentDetail 
              author = "Jane" 
              timeAgo = "Yesterday at 2:00PM" 
              comment = "Great!" 
              image={Faker.image.image()}
            /> 
        </div>

    )
}

ReactDom.render(<App />, document.getElementById('root'));