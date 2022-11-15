import { useRouter } from "next/router";
export default function User() {
  const router = useRouter();
  const { id, uid, name } = router.query;

  console.log(router.query);

  return (
    <div>
      <h1>User{id}の{uid}のページです</h1>
      <p>nameは{name}</p>
    </div>
  )
}