import { Button } from "@repo/ui/components/ui/button";

const Home = async () => {
  const res = await fetch("https://api.gpt.bilguun.tech");
  const data = await res.json();

  return (
    <div>
      <main>
        <h1>Super Cool GPT</h1>
        <p>{JSON.stringify(data)}</p>
        <Button>Click me</Button>
      </main>
    </div>
  );
};

export default Home;
