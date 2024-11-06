// an array of objects where each object represents a news post
import { postsValues } from "../data/posts";

import Link from "next/link";

// Together these components display a list of the latest news posts, where each post has a title, image, description,etc

// This component takes posts as a prop and renders each post as a list item (<li>).
function ListNews({ posts }) {
  // use map function on arrays

  const listItems = posts.map((post) => (
    <div className="item col-md-4" key={post.id}>
      <div className="image">
        <Link href={`/news/${post.id}`}>
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </Link>
        <img src={post.imgUrl} alt="" />
      </div>
      <div className="tag">
        <i className="fa fa-file-text"></i>
      </div>
      <div className="info-blog">
        <span className="title">{post.title}</span>
        <span className="text">{post.text}</span>
        <span className="meta">
          <span className="author">
            <i className="fa fa-user"></i> {post.author}
          </span>
          <span className="date">
            <i className="fa fa-clock-o"></i> {post.date}
          </span>
        </span>
      </div>
    </div>
  ));

  return <div className="row">{listItems}</div>;
}

// This component wraps ListNews and passes postsValues to it as a prop.
const LatestNews = () => {
  return (
    <div className="main col-sm-12">
      <h1 className="section-title">Latest News</h1>
      <div className="grid-style1 clearfix">
        <ListNews posts={postsValues} />
      </div>
    </div>
  );
};

export default LatestNews;
