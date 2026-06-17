import { portfolioData } from '../data/portfolioData';
import { Languages, Quote, Sparkles } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function HomeTab() {
  const { student, overview } = portfolioData;

  return (
    <div className="space-y-24 lg:space-y-32">
      <section data-reveal className="reveal soft-card soft-pink-glow rounded-3xl bg-white p-7 md:p-10 lg:p-14">
        <div className="max-w-4xl">
          <span className="section-kicker">Portfolio / Digital & AI Learning</span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-academic-ink sm:text-4xl md:text-6xl">
            Portfolio học phần —<br />
            <span className="text-academic-ink">{student.name}</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-academic-muted sm:text-xl md:text-2xl">
            Vietnamese Language & Culture Learning Portfolio
          </p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-academic-muted md:text-lg">{student.bio}</p>
        </div>

        <div className="mt-12 grid gap-6 border-t border-academic-border pt-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['Trường', 'ULIS - VNU'],
            ['Ngành', 'Ngành Tiếng Việt và Văn hoá Việt Nam'],
            ['Học phần', 'Công nghệ số & Ứng dụng AI'],
            ['Sinh viên', student.name],
            ['Mã sinh viên', '25040336'],
          ].map(([label, value]) => (
            <div key={label}>
              <span className="section-kicker">{label}</span>
              <p className="mt-2 text-sm font-bold leading-6 text-academic-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ho-so" className="section-anchor grid items-stretch gap-6 lg:grid-cols-12">
        <div data-reveal className="reveal soft-card hover-lift relative min-h-[360px] overflow-hidden rounded-3xl bg-academic-blush p-8 lg:col-span-5">
          <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-academic-border bg-white/40" />
          <div className="absolute bottom-16 right-10 h-28 w-28 rounded-full bg-academic-pastel/25" />
          <Quote className="absolute right-8 top-8 text-academic-border" size={72} strokeWidth={1.25} />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <span className="section-kicker">Student profile</span>
              <h2 className="mt-5 text-3xl font-extrabold text-academic-ink">{student.name}</h2>
              <figure className="mx-auto mt-5 w-full max-w-[300px] rounded-2xl border border-academic-border bg-white p-3 shadow-[0_10px_24px_rgba(236,72,153,0.14)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-academic-ivory">
                  <img
                    src={avatarImage}
                    alt={`Ảnh chân dung ${student.name}`}
                    className="h-full w-full object-cover object-[58%_center]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-md bg-white/95 px-3 py-2 text-[11px] font-bold text-academic-rose shadow-sm backdrop-blur-sm">
                    Thúy Nga
                  </figcaption>
                </div>
              </figure>
              <p className="mt-2 text-academic-muted">{student.id} · ULIS - VNU</p>
            </div>
            <div>
              <p className="max-w-sm text-lg font-semibold leading-8 text-academic-ink">
                Học ngôn ngữ bằng tư duy số, sự tò mò văn hóa và cách sử dụng AI có trách nhiệm.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {student.skills.slice(0, 4).map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7">
            <Languages className="text-academic-deep-rose" size={25} />
            <span className="section-kicker mt-6 block">Global learning</span>
            <h3 className="mt-2 text-xl font-bold">Ngành Tiếng Việt và Văn hoá Việt Nam</h3>
            <p className="mt-3 text-sm leading-6 text-academic-muted">
              Học ngôn ngữ là quá trình đi từ cách dùng từ, đặt câu đến việc hiểu con người và văn hóa phía sau ngôn ngữ đó. Khi có nền tảng văn hóa, việc giao tiếp trở nên tự nhiên và có chiều sâu hơn.
            </p>
          </article>
          <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7">
            <Sparkles className="text-academic-deep-rose" size={25} />
            <span className="section-kicker mt-6 block">Digital learning</span>
            <h3 className="mt-2 text-xl font-bold">Công nghệ số & AI</h3>
            <p className="mt-3 text-sm leading-6 text-academic-muted">
              Công cụ số hỗ trợ người học tìm kiếm tài liệu, ghi chép, hệ thống hóa thông tin và trình bày ý tưởng rõ ràng hơn. Điều quan trọng không chỉ là biết dùng công cụ, mà là biết chọn lọc và sử dụng đúng mục đích.
            </p>          
          </article>
          <blockquote data-reveal className="reveal soft-card hover-lift relative rounded-2xl bg-academic-ivory p-7 sm:col-span-2">
            <Quote className="absolute right-6 top-5 text-academic-pastel" size={38} />
            <span className="section-kicker">A note</span>
            <p className="mt-4 max-w-2xl text-lg italic leading-8 text-academic-ink">
              “Công nghệ không thay thế quá trình tự học, nhưng nếu được sử dụng một cách tỉnh táo, nó có thể giúp người học hiểu vấn đề nhanh hơn, chủ động hơn và biết nhìn lại cách mình học.”
            </p>
          </blockquote>
        </div>
      </section>

      <section id="bai-tap" data-reveal className="reveal section-anchor">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">Learning index</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Bản đồ học tập</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-academic-muted md:text-right">
            Bảy năng lực nền tảng định hướng hành trình học tập và sáu bài thực hành trong portfolio.
          </p>
        </div>
        <div className="space-y-3">
          {overview.map((item, index) => {
            const Icon = item.icon;
            return (
              <article data-reveal key={item.id} className="reveal hover-lift group flex items-center gap-5 rounded-xl border border-academic-border bg-white px-5 py-4 transition hover:border-academic-rose hover:bg-academic-blush">
                <span className="w-8 shrink-0 text-sm font-extrabold text-academic-deep-rose">{String(index + 1).padStart(2, '0')}</span>
                <span className="h-8 w-px bg-academic-border" />
                <Icon size={20} className="shrink-0 text-academic-rose" />
                <div className="min-w-0 md:flex md:flex-1 md:items-center md:justify-between md:gap-6">
                  <h3 className="font-bold text-academic-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-academic-muted md:mt-0 md:text-right">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section data-reveal className="reveal space-y-8">
        <div className="max-w-3xl">
          <span className="section-kicker">Digital learning profile</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Hồ sơ học tập</h2>
          <p className="mt-4 text-base leading-7 text-academic-muted">
            Portfolio phản ánh cách kiến thức ngôn ngữ, năng lực số và tư duy học thuật được kết nối thành một quá trình học tập có hệ thống.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Profile', 'Trọng tâm học tập', 'Tiếng Việt, văn hóa Việt Nam và năng lực giao tiếp trong môi trường học thuật hiện đại.'],
            ['Objective', 'Mục tiêu học phần', 'Thành thạo công cụ số, biết đánh giá thông tin và sử dụng AI như một trợ lý học tập có trách nhiệm.'],
            ['Purpose', 'Lý do xây dựng portfolio', 'Hệ thống hóa sản phẩm, minh chứng tiến bộ và nhìn lại hành trình phát triển kỹ năng.'],
            ['Skills', 'Kỹ năng mũi nhọn', student.skills.join(' · ')],
            ['Digital focus', 'Định hướng ứng dụng', 'Quản lý dữ liệu, nghiên cứu thông tin, prompt engineering, cộng tác trực tuyến và sáng tạo nội dung.'],
            ['Academic values', 'Giá trị học thuật', 'Chính xác, minh bạch, tôn trọng bản quyền và chủ động kiểm chứng nội dung do AI hỗ trợ.'],
          ].map(([label, title, description]) => (
            <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7" key={label}>
              <span className="section-kicker">{label}</span>
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-academic-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
