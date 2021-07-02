import { HeadingA } from '@myapp/shared'
import { HeadingB } from '@myapp/shared'
import { Label } from '@myapp/shared'
import { LetterBlock } from '@myapp/shared'

export default function Home() {
  return (
    <div className="px-12 py-8">
      <Label>HeadingA</Label>
      <HeadingA>HeadingA</HeadingA>
      <Label>HeadingB</Label>
      <HeadingB>HeadingB</HeadingB>
      <Label>LetterBlock</Label>
      <LetterBlock html={`
        <ul>
          <li>彼は背後にひそかな</li>
          <li>足音を聞いた。</li>
          <li>それはあまり</li>
          <li>良い意味を示すものではない。</li>
          <li>彼は背後にひそかな</li>
          <li>足音を聞いた。</li>
          <li>それはあまり</li>
          <li>良い意味を示すものではない。</li>
        </ul>
      `} />
    </div>
  )
}
