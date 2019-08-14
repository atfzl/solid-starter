import { history } from '#/router';

function Home() {
  return (
    <div
      onClick={() => {
        history.push('/login');
      }}
    >
      Home
    </div>
  );
}

export default Home;
