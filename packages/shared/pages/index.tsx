import { css } from '@emotion/css'

const styles = {
  richtext: css`
    h2 {
      border: 2px solid red;
    }
    p {
      border: 2px solid blue;
    }
  `
}

export default function Home() {
  return (
    <div className="px-12 py-8">
      <h1 className="font-bold text-xl pb-2">Shared package</h1>
      <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
      <div className={styles.richtext}>
        <h2>The quick brown fox jumps over the lazy dog. </h2>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
      </div>
      <div className="w-[80px] h-[80px] inline-block bg-my-orange"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-orange2"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-red"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-teal"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-teal2"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-teal3"></div>
    </div>
  )
}
