import React from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  posts: Post[];
}

const getPost = async (): Promise<PostProps> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const posts: Post[] = await response.json();
    return { posts };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { posts: [] };
  }
};


const ServicesPage = async() => {

  const response = await getPost();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8 mb-4">Services</h1>
      <h2 className='text-2xl'>Personalized Style Advisory Service</h2>
      <p>In the fast-paced world of fashion, finding the perfect style can be overwhelming. That's why we offer personalized style advice. Whether through smart algorithms or professional stylists, our goal is to make the shopping experience unique for each customer. We'll explore how this service not only enhances the shopping experience but also strengthens the relationship with our brand, fostering customer loyalty.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
        {
          response.posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
              <div className="mt-4 flex justify-end">
              </div>
            </div>

          ))
        }
      </div>
    </div>
    
  );
};

export default ServicesPage;
