import { Link } from 'react-router-dom';

// jika ingin menggunakan props maka harus mengisi parameter yang dikirimkan melalui component
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2> {title} </h2>
      {/* menggunakan method map untuk menampilkan isi didalam sebuah object tapa melakuakn perulangan */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>ditulis oleh {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
