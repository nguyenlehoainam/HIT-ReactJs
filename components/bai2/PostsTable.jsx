import React from 'react';
import posts from './posts.json'; 
import './PostsTable.css'; 

const PostsTable = () => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 3).map((post, index) => ( 
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.title}</td> 
              <td>{post.id * 1000}</td> 
              <td>{post.userId === 1 ? 'dcode' : 'Students'}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;