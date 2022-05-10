import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Rai');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  // handleForm
  const handleSubmit = (e) => {
    // menggunakan preventDefault agar ketika sebuh button ditekan tidak akan merefresh  halaman
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new Blog added');
      setIsPending(false);
    });

    history.push('/');
  };

  return (
    <div className="create">
      <h2>Create A New Blog</h2>
      {/* menggunakan onSubmit agar bisa mensubmit form  */}
      <form action="" onSubmit={handleSubmit}>
        <label> Blog Title : </label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog Body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Blog Author</label>
        <select required value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Rai">Rai</option>
          <option value="Fandi">Fandi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
