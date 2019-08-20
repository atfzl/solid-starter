import { history } from '#/utils/router';

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
