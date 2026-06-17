import { Quote } from 'lucide-react';

export default function Summary() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <span className="section-kicker">Reflection & academic integrity</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Suy ngẫm sau hành trình học tập</h2>
      </div>

      <article data-reveal className="reveal soft-card hover-lift relative overflow-hidden rounded-3xl bg-white p-7 md:p-10">
        <Quote className="absolute right-7 top-2 text-academic-blush" size={86} />
        <h3 className="relative text-xl font-extrabold text-academic-deep-rose">Kiến thức & Kỹ năng đã đạt được</h3>
        <p className="relative mt-5 whitespace-pre-line text-justify leading-8 text-academic-muted">
          {`"Ban đầu em nghĩ portfolio chỉ là gom các bài đã làm rồi đưa lên một trang web. Nhưng khi bắt tay vào làm, em mới thấy nếu chỉ đưa file lên thì sản phẩm sẽ khá rời rạc và không thể hiện được quá trình học.

Qua học phần này, em học được cách tổ chức tài liệu rõ ràng hơn, biết đặt tên file dễ hiểu hơn và lưu trữ theo từng môn, từng bài. Em cũng hiểu hơn về cách tìm kiếm thông tin, đánh giá nguồn và sử dụng AI trong học tập. Trước đây em thường hỏi AI khá bản năng, nhưng sau bài về prompt, em nhận ra nếu đưa rõ bối cảnh, yêu cầu và định dạng mong muốn thì kết quả sẽ tốt hơn nhiều.

Việc làm portfolio bằng web cũng giúp em luyện thêm kỹ năng trình bày sản phẩm số: sắp xếp bố cục, chia nội dung, gắn link báo cáo và làm sao để người xem dễ theo dõi."`}
        </p>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7">
          <span className="section-kicker">Thử thách</span>
          <h3 className="mt-3 text-xl font-bold">Khó khăn gặp phải</h3>
          <p className="mt-4 text-justify text-sm leading-7 text-academic-muted">
            Khó nhất với em không phải là viết từng báo cáo, mà là gom tất cả lại thành một sản phẩm hoàn chỉnh. Khi đưa lên web, em phải chỉnh lại bố cục, màu sắc, phần minh chứng, bảng rubric và cả trang in PDF. Trong quá trình làm, em có dùng AI để hỗ trợ viết code, gợi ý giao diện và sửa nội dung. Tuy nhiên, em không dùng nguyên mọi thứ AI tạo ra. Em vẫn phải chạy thử, kiểm tra, chỉnh lại phần sai và thay các nội dung chung chung bằng thông tin thực tế của mình.
          </p>
        </article>
        <article data-reveal className="reveal soft-card hover-lift rounded-2xl bg-white p-7">
          <span className="section-kicker">Next steps</span>
          <h3 className="mt-3 text-xl font-bold">Kế hoạch hoàn thiện</h3>
          <p className="mt-4 text-justify text-sm leading-7 text-academic-muted">
            Sau khi hoàn thành web, em sẽ kiểm tra lại toàn bộ link báo cáo PDF để chắc chắn các file mở được đúng bài. Với những bài không có sản phẩm riêng, em sẽ ghi rõ rằng sản phẩm và minh chứng đã được trình bày trong báo cáo, không tạo thêm link hoặc nội dung không có thật. Em cũng sẽ kiểm tra bản PDF xuất từ portfolio để đảm bảo nội dung không bị thiếu khi nộp lên hệ thống.
          </p>
        </article>
      </div>

      <article data-reveal className="reveal outcome-glow rounded-3xl bg-academic-blush p-32 text-center text-white md:p-10">
        <h3 className="text-xl font-extrabold text-black">Cam kết Liêm chính Học thuật</h3>
        <p className="mx-auto mt-4 max-w-3xl whitespace-pre-line text-sm italic leading-7 text-black/85">
          {`Em, Phạm Thị Thuý Nga, cam kết các báo cáo và nội dung trong portfolio này phản ánh quá trình học tập và thực hành của bản thân. Em có sử dụng AI như một công cụ hỗ trợ, chủ yếu để gợi ý cách trình bày, sửa code và kiểm tra nội dung.

AI chỉ nên hỗ trợ, không thể thay thế hoàn toàn việc học. Em không tạo minh chứng giả, không ghi sản phẩm không có thật và không cố tình trình bày sai quá trình làm bài của mình!

Em cảm ơn thầy cô đã dành thời gian đọc những dòng này!`}
        </p>
      </article>
    </div>
  );
}
