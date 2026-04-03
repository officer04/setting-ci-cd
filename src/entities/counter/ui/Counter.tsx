import { useEffect, useState } from 'react';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [post, setPost] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getPosts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(import.meta.env.VITE_POSTS_API_URL);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {isLoading ? <p>Загрузка</p> : post?.map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};
