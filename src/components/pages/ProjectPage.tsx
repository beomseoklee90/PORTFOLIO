interface Props {
  title: string;
  pageNum: string;
}

export default function ProjectPage({ title, pageNum }: Props) {
  return (
    <div className="w-full h-full bg-white text-black p-12 flex flex-col justify-between border-l border-neutral-200 shadow-inner">
      <div>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-sm leading-relaxed text-neutral-600 font-serif">
          디테일의 차이가 브랜드의 격을 결정합니다. 최고의 사용자 경험을 제안하는 이 프로젝트는 기존의 틀을 깨는 혁신적인 접근 방식을 취했습니다.
        </p>
      </div>
      <div className="text-right text-xs font-bold text-neutral-400">
        PAGE {pageNum}
      </div>
    </div>
  );
}