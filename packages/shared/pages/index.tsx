import { HeadingA } from '../components/HeadingA'
import { HeadingB } from '../components/HeadingB'
import { Label } from '../components/Label'
import { LetterBlock } from '../components/LetterBlock'

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
      {/*
      <div className="w-[80px] h-[80px] inline-block bg-my-orange"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-orange2"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-red"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-teal"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-teal2"></div>
      <div className="w-[80px] h-[80px] inline-block bg-my-teal3"></div>
      */}
    </div>
  )
}
