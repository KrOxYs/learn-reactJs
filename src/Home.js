import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // useState
  // useState digunakan agar sebuah variable menjadi reactive atau bisa dimanupulasi/ diubah
  // nama variable dibungkus dalam sebuah array
  // array yang pertama merupakan variable penampung dari useState
  // array yang kedua merupakan sebuah function yang berfungsi agar variable pertama bisa diubah

  // blogs
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  // useEffect Dijalankan sebelum render

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.......</div>}
      {/* megirimkan data dari component home ke component BlogList menggunakan props */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
