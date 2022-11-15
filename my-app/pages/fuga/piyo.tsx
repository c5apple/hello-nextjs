export async function getStaticProps() {
  return {
    props: { title: 'ぴよ' }
  }
}

export default function Piyo() {
  const ans = 1 + 1;

  return (
    <div>1 + 1 = {ans}piyo</div>
  )
}