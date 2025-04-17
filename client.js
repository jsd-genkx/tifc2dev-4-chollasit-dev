import axios from 'axios';

const data = {
  title: 'New Post Title',
  content: 'New Post Content',
};

try {
  let response = await axios.post('http://localhost:3000/posts', data);
  console.log('Post created successfully:', response.data);
} catch (error) {
  console.error('Error creating post:', error);
}
