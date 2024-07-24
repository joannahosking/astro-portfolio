import { useState, useEffect } from "preact/hooks";
import "./igfeed.css";

const IgFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://feeds.behold.so/cXKKK7y6nxKVE2io1XFe")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  });

  return (
    <ul class="ig-feed">
      {posts &&
        posts.map((post) => (
          <li>
            <a href={post.permalink} class="ig-post">
              <img src={post.sizes.small.mediaUrl} alt={post.caption} />
            </a>
          </li>
        ))}
    </ul>
  );
};

export default IgFeed;