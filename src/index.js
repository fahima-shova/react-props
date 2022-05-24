import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css';

const App = () => {
    return (
        <div className = 'ui container comments'> 
           <ApprovalCard> 
            <CommentDetail 
                author = "Sam" 
                timeAgo = "Today at 4:00PM" 
                comment = "Good blog post!" 
                image = {Faker.image.image()}
            /> 
           </ApprovalCard>

           <ApprovalCard>
            <CommentDetail 
                author = "Alex" 
                timeAgo = "Today at 5:00AM" 
                comment = "Amazing." 
                image = {Faker.image.image()}
            /> 
           </ApprovalCard>
        
           <ApprovalCard>
            <CommentDetail 
                author = "Jane" 
                timeAgo = "Yesterday at 2:00PM" 
                comment = "Great!" 
                image = {Faker.image.image()}
            /> 
           </ApprovalCard>
        </div>

    )
}

ReactDom.render(<App />, document.getElementById('root'));