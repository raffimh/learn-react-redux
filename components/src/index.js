import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export default function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Sam"
          timeAgo="Today at 4:40PM"
          content="Nice Blog Post!"
          avatar={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Jane"
          timeAgo="Today at 6:25PM"
          content="I like the title"
          avatar={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Jhon"
          timeAgo="Today at 8:15PM"
          content="I like the writing"
          avatar={faker.image.people()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
