export default {
  info({ fullName, username, tweet, image, likes }) {
    return { full_name: fullName, username, tweet, image, likes };
  },
};
