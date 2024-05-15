export default function Page({params}: {params: {categories: string, postId: string}}) {
  const categories = params.categories;
  const postId = params.postId;
  if(postId) {
    return <div>post id is: {postId}</div>
  }
  return <div>categories Page: {categories}</div>
}