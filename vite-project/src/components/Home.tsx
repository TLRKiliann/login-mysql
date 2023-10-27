//import './styles/_Home.scss';

const Home = () => {
  return (
    <main className="home--main">
      <p>Welcome Home !</p>
      <p className="home--paragraph">
        <a href='/login'>👉 &nbsp;Login</a>
      </p>
      <p className="home--paragraph">
        <a href='/logindashboard'>👉 &nbsp;Dashboard</a>
      </p> 
    </main>
  )
}
export default Home;