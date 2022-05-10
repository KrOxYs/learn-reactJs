import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  // menggunakan useParams agar bisa mengambil apa yang dikirimkan di ur parameter
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
      console.log('Delete Succes');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <p>Loading......</p>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p className="blogauthor">Ditulis Oleh {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
