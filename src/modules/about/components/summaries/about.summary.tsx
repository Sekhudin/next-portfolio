import { H1 } from 'components/typography/h';
import { SpanPoint, P } from 'components/typography/p';
import { KampurMerdeka, OFA } from 'components/anchors/text.anchor';
import { cn, Props } from 'packages/utils/cn';

export default function AboutSummary({ className }: Props) {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={cn(``, className)}>
      <H1 className="w-11/12 lg:w-full">
        {`I'm Sekhudin. Crafting a brighter future through code.`}
      </H1>
      <P className="leading-7">
        {`As a software engineer, I bring `}
        <SpanPoint>{`${currentYear - 2023} year of freelance`}</SpanPoint>
        {` experience in software development and a total of `}
        <SpanPoint>{`${currentYear - 2021} years of personal programming`}</SpanPoint>
        {` exploration. Armed with a `}
        <SpanPoint>{`Bachelor's degree in Computer Science,`}</SpanPoint>
        {` I am devoted to constantly refining my skills and staying abreast of the dynamic tech landscape.`}
      </P>

      <P className="leading-7">
        {`In addition to my journey, I have actively explored various bootcamps and dedicated `}
        <SpanPoint>{`six months to the enriching `}</SpanPoint>
        <KampurMerdeka target="_blank" />
        {` program at `}
        <OFA target="_blank" className='after:content-["."]' />
        {` This experience immersed me in the practical realms of `}
        <SpanPoint>{`Artificial Intelligence (AI), Machine Learning (ML), and Data Science`}</SpanPoint>
        {``}
      </P>

      <P className="leading-7">
        <SpanPoint>{`Fueled by coding passion,`}</SpanPoint>
        {` I am excited about the prospect of exploring
        opportunities to deliver practical and high-quality solutions.`}
        <SpanPoint>{`Let's collaborate`}</SpanPoint>
        {` and create something exceptional together!`}
      </P>
    </div>
  );
}
