import Avatar from 'src/components/atoms/image/async-avatar';
import { H4 } from 'src/components/atoms/typography/h';
import { Small } from 'src/components/atoms/typography/p';
import { type SingleRepository, Repos } from 'src/service/github/queries/repositories';
import { cn, hrefTo, PropsWithClassName } from 'src/utils';

const ProjectCard = ({ className, ...v }: PropsWithClassName<SingleRepository>) => {
  const { tech, language } = Repos.techProject({ ...v });
  return (
    <div
      className={cn(
        `hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300
        rounded-lg md:rounded-xl flex flex-col p-4 cursor-pointer group`,
        className
      )}
      onClick={() => hrefTo(v.url, '_blank')}>
      <Avatar className="w-10 h-10 mb-6" alt={v.name} />

      <div className="h-40 md:h-52 xl:h-56 flex flex-col justify-between gap-y-2">
        <div>
          <H4 className="first-letter:uppercase mb-4">{v.name}</H4>
          <Small className="font-light dark:font-extralight leading-5 text-wrap truncate">
            {v.description}
          </Small>
          <div className="mt-4 font-mono">
            {tech && (
              <Small className="font-bold">
                {'Tech: '}
                <span className="font-normal">{tech}</span>
              </Small>
            )}
            {language && !tech && (
              <Small className={`font-bold`}>
                {'Language: '}
                <span className="font-normal" style={{ color: `${language.color}` }}>
                  {language.name}
                </span>
              </Small>
            )}
          </div>
        </div>

        <div className="flex items-center justify-start gap-x-10 group/a">
          {v.url && (
            <a
              className="w-fit flex items-center space-x-2 text-sm text-zinc-500 font-sans font-semibold
              group-hover:text-indigo-700 group-hover/a:text-zinc-400 hover:dark:bg-secondary px-3 py-1.5 rounded-md"
              href={v.url}
              target="_blank"
              aria-label="View Source Code">
              View Source
            </a>
          )}
          {v.homepageUrl && (
            <a
              className="w-fit flex items-center space-x-2 text-sm text-zinc-500 font-sans font-semibold
              hover:text-indigo-700"
              href={v.homepageUrl}
              target="_blank"
              aria-label="Learn More to Home Page">
              Larn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectCardFallback = ({ className }: PropsWithClassName) => (
  <div className={cn(``, className)}>
    <div>Fallback</div>
  </div>
);

export default ProjectCard;
