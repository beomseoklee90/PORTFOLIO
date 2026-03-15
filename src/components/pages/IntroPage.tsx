// src/components/pages/IntroPage.tsx
export default function IntroPage() {
  return (
    <div className="w-full h-full bg-white text-black p-10 md:p-16 flex flex-col justify-between border-l border-neutral-200">
      {/* 상단: 카테고리 & 닉네임 */}
      <div className="flex justify-between items-start border-b border-black pb-4 mb-8">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
          Special Interview
        </span>
        <span className="text-[10px] font-medium tracking-widest text-neutral-400">
          ISSUE NO. 01
        </span>
      </div>

      {/* 중단: 메인 컨텐츠 */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tighter">
          ICE BREAKING:
          <br />
          <span className="text-neutral-400">BEYOND THE CODE.</span>
        </h2>

        <div className="space-y-6 text-sm leading-relaxed font-serif text-neutral-800">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            안녕하세요. 연세대학교 컴퓨터과학과를 졸업하고, 사람들에게 긍정적인
            영향과 영감을 드리는 일을 하고 있습니다. 단순한 코딩을 넘어 웹
            어플리케이션의 상류/하류 공정, 설계, 개발, 테스트를 아우르는
            기술력이 저의 핵심 자산입니다.
          </p>

          <p>
            저는 그동안{" "}
            <span className="font-bold underline decoration-1 underline-offset-4">
              공장, 로우코드, 신용카드, 고속도로, 소개팅 앱, 숙박 예약, 건설
            </span>{" "}
            등 다양한 도메인의 프로젝트에 참여하며 폭넓은 개발 경험을
            쌓아왔습니다. 복잡한 시스템의 설계부터 유지보수에 이르기까지 전체
            과정을 직접 관리하며 다져온 실력을 바탕으로 사장님들의 비즈니스
            문제를 실질적으로 해결해 드립니다.
          </p>

          <p className="italic text-neutral-500 pt-4 border-t border-neutral-100">
            "우리는 기술로 얼어붙은 문제를 깨고, 새로운 비즈니스의 흐름을
            만듭니다."
          </p>
        </div>
      </div>

      {/* 하단: 시그니처 & 페이지 번호 */}
      <div className="mt-8 flex justify-between items-end">
        <div>
          <div className="text-[10px] tracking-widest font-bold uppercase mb-1">
            Expertise
          </div>
          <div className="text-[9px] text-neutral-400 uppercase tracking-tighter space-x-2">
            <span>Next.js</span> <span>•</span> <span>System Architecture</span>{" "}
            <span>•</span> <span>CI/CD</span>
          </div>
        </div>
        <span className="text-xs font-bold font-sans">01</span>
      </div>
    </div>
  );
}
