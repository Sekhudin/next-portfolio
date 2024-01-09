import { H1 } from 'src/components/atoms/typography/h';
import { Div, SpanPoint, P, Anchor } from 'src/components/atoms/typography/p';
import { cn, PropsWithClassName } from 'src/utils';

export default function DescriptionSection({ className }: PropsWithClassName) {
  return (
    <Div className={cn(``, className)}>
      <H1 className="w-11/12 lg:w-full drop-shadow-lg tracking-widest">
        {`I'm Sekhudin. Crafting a brighter future through code.`}
      </H1>
      <P>
        {`As a `}
        <SpanPoint>{`software engineer,`}</SpanPoint>
        {` I bring `}
        <SpanPoint>{`a year of freelance`}</SpanPoint>
        {` experience in software development and a total of `}
        <SpanPoint>{`three years of personal programming`}</SpanPoint>
        {` exploration. Armed with a `}
        <SpanPoint>{`Bachelor's degree in Computer Science,`}</SpanPoint>
        {` I am devoted to constantly refining my skills and staying abreast of the dynamic tech landscape.`}
      </P>

      <P>
        {`In addition to my journey, I have `}
        <SpanPoint>{`actively explored various bootcamps`}</SpanPoint>
        {` and dedicated `}
        <SpanPoint>{`six months to the enriching`}</SpanPoint>
        <Anchor
          href="https://kampusmerdeka.kemdikbud.go.id/"
          target="_blank">{` Kampus Merdeka `}</Anchor>
        <SpanPoint>{`program`}</SpanPoint>
        {` at `}
        <Anchor
          href="https://orbitfutureacademy.id/"
          target="_blank">{`Orbit Future Academy.`}</Anchor>
        {` This experience immersed me in the practical realms of `}
        <SpanPoint>{`Artificial Intelligence (AI), Machine Learning (ML), and Data Science`}</SpanPoint>
        {``}
      </P>

      <P>
        <SpanPoint>{`Fueled by coding passion,`}</SpanPoint>
        {` I am excited about the prospect of exploring
        opportunities to deliver practical and high-quality solutions.`}
        <SpanPoint>{`Let's collaborate`}</SpanPoint>
        {` and create something exceptional together!`}
      </P>
    </Div>
  );
}
