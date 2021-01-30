import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPost = id => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore
        .collection('posts')
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error('That post does not exist');
      }

      post.value = { id, ...res.data() };
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return {
    post,
    error,
    load,
  };
};

export default getPost;
