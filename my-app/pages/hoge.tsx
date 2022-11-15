export async function getStaticProps() {
  return {
    props: { title: 'ほげ' }
  }
}

export default function Hoge() {
  const ans = 1 + 1;

  return (
    <div>1 + 1 = {ans}</div>
  )
}