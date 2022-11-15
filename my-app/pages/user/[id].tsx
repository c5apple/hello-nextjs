import { useRouter } from "next/router";
export default function User() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>User{router.query.id}のページです</h1>
    </div>
  )
}