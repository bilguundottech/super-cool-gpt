const Home = async () => {
  const res = await fetch("https://api.gpt.bilguun.tech/endpoint");
  const data = await res.json();

  return (
    <div>
      <main>
        <h1>Super Cool GPT</h1>
        <p>{data.message}</p>
      </main>
    </div>
  );
};

export default Home;
