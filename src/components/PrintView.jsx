import { portfolioData } from '../data/portfolioData';
import { Printer } from 'lucide-react';

export default function PrintView() {
  const { student, overview, projects, rubric } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-xl print:shadow-none print:border-none print:p-0 print:w-full print:max-w-none text-slate-900 font-sans">
      
      {/* Nút Điều Khiển In (Bị tự động ẩn khi lưu file PDF) */}
      <div className="no-print flex justify-between items-center mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200 sticky top-4 z-50">
        <div>
          <h3 className="font-bold text-slate-800">Chế độ xem bản in chuyên dụng</h3>
          <p className="text-xs text-slate-500">Mọi thành phần nội dung đã được mở sẵn hoàn toàn để xuất PDF qua Ctrl + P</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-academic-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold shadow-md transition-all text-sm"
        >
          <Printer size={18} />
          In / Lưu PDF (Ctrl + P)
        </button>
      </div>

      <div className="space-y-10 print:space-y-8">
        
        {/* LỜI ĐẦU / HEADER TIÊU ĐỀ TRANG IN */}
        <div className="text-center border-b-2 border-slate-800 pb-6 print-section">
          <h1 className="text-2xl md:text-3xl font-black uppercase text-slate-900 tracking-wide">Vietnamese LANGUAGE & CULTURE LEARNING PORTFOLIO</h1>
          <h2 className="text-md md:text-lg font-bold text-slate-700 mt-1">Môn học: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</h2>
          <div className="w-16 h-1 bg-slate-800 mx-auto mt-4"></div>
        </div>

        {/* 1. KHỐI THÔNG TIN SINH VIÊN (DỮ LIỆU ĐỘNG) */}
        <div className="print-section">
          <h3 className="text-lg font-bold uppercase text-slate-800 border-l-4 border-slate-800 pl-3 mb-4 bg-slate-50 py-1.5">
            I. Thông tin sinh viên & Bản sắc cá nhân
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm border border-slate-200 p-4 rounded-lg bg-white">
            <p><strong>Họ và tên:</strong> {student.name}</p>
            <p><strong>Mã sinh viên / Khóa:</strong> {student.id}</p>
            <p><strong>Ngành học:</strong> {student.major}</p>
            <p><strong>Cơ sở đào tạo:</strong> {student.university}</p>
            <div className="col-span-2 border-t border-slate-100 pt-2 mt-1">
              <p className="text-justify leading-relaxed"><strong>Giới thiệu bản thân:</strong> {student.bio}</p>
            </div>
            <div className="col-span-2 pt-1">
              <p><strong>Kỹ năng cốt lõi:</strong> {student.skills?.join(' • ')}</p>
            </div>
          </div>
        </div>

        {/* 2. TỔNG QUAN NĂNG LỰC HỌC PHẦN */}
        <div className="print-section">
          <h3 className="text-lg font-bold uppercase text-slate-800 border-l-4 border-slate-800 pl-3 mb-4 bg-slate-50 py-1.5">
            II. Tổng quan Năng lực Học phần
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {overview.map((item) => (
              <div key={item.id} className="border border-slate-200 p-3 rounded bg-white">
                <span className="font-bold text-slate-800">Chủ đề {item.id}: {item.title}</span>
                <p className="text-slate-600 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CHI TIẾT CÁC BÀI TẬP THÀNH PHẦN (DỮ LIỆU ĐỘNG) */}
        <div className="print-section page-break-before">
          <h3 className="text-lg font-bold uppercase text-slate-800 border-l-4 border-slate-800 pl-3 mb-6 bg-slate-50 py-1.5">
            III. Nội dung chi tiết các Bài tập & Nhiệm vụ thành phần
          </h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-slate-300 rounded-xl p-5 bg-white shadow-none break-inside-avoid">
                <div className="border-b border-slate-200 pb-2 mb-3 flex justify-between items-center">
                  <h4 className="text-base font-bold text-slate-900">{project.title}</h4>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 border border-slate-200 rounded text-slate-600">
                    {project.chapter}
                  </span>
                </div>
                
                <div className="space-y-3 text-xs leading-relaxed text-justify text-slate-800">
                  <p><strong>1. Mục tiêu và yêu cầu:</strong> {project.target}</p>
                  <p><strong>2. Kỹ năng áp dụng cốt lõi:</strong> {project.skills?.join(', ')}</p>
                  <p><strong>3. Tóm tắt quá trình thực hiện thực tế:</strong> {project.process}</p>
                  
                  {/* Đường dẫn tệp đính kèm hiển thị tự động dạng Text/URL phục vụ in ấn hóa */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700 mt-2 font-mono text-[11px] space-y-1">
                    <p className="font-bold font-sans text-xs text-slate-800 mb-1">4. Danh mục tài nguyên dữ liệu:</p>
                    <p>• File Báo cáo (PDF): <span className={project.report === "Sẽ cập nhật sau" ? "text-amber-600 font-bold" : "text-blue-600 font-bold break-all"}>{project.report || "Sẽ cập nhật sau"}</span></p>
                    <p>• Ảnh chụp màn hình: <span className={project.evidenceImg === "Sẽ cập nhật sau" ? "text-amber-600 font-bold" : "text-blue-600 font-bold break-all"}>{project.evidenceImg || "Sẽ cập nhật sau"}</span></p>
                    <p>• Đường dẫn Google Drive: <span className={project.driveLink === "Sẽ cập nhật sau" ? "text-amber-600 font-bold" : "text-green-600 font-bold break-all"}>{project.driveLink || "Sẽ cập nhật sau"}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BẢNG TỔNG HỢP KIỂM SOÁT MINH CHỨNG (TỰ ĐỘNG THEO DATA FILE) */}
        <div className="print-section page-break-before">
          <h3 className="text-lg font-bold uppercase text-slate-800 border-l-4 border-slate-800 pl-3 mb-4 bg-slate-50 py-1.5">
            IV. Bảng tổng hợp Kiểm soát Minh chứng học tập
          </h3>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-700 text-xs">
                  <th className="p-3 font-bold border-r border-slate-300 w-1/4">Nhiệm vụ / Bài tập</th>
                  <th className="p-3 font-bold border-r border-slate-300">Đường dẫn Báo cáo</th>
                  <th className="p-3 font-bold border-r border-slate-300">Đường dẫn Ảnh minh chứng</th>
                  <th className="p-3 font-bold">Liên kết Google Drive tài nguyên</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-[11px]">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50/50">
                    <td className="p-3 font-bold bg-slate-50 border-r border-slate-200">{project.title}</td>
                    <td className="p-3 border-r border-slate-200 break-all font-mono">{project.report || "Sẽ cập nhật sau"}</td>
                    <td className="p-3 border-r border-slate-200 break-all font-mono">{project.evidenceImg || "Sẽ cập nhật sau"}</td>
                    <td className="p-3 break-all font-mono text-slate-600">{project.driveLink || "Sẽ cập nhật sau"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. BẢNG TỰ ĐÁNH GIÁ THEO TIÊU CHÍ RUBRIC */}
        <div className="print-section page-break-before">
          <h3 className="text-lg font-bold uppercase text-slate-800 border-l-4 border-slate-800 pl-3 mb-4 bg-slate-50 py-1.5">
            V. Bảng Tự đánh giá năng lực theo Tiêu chí Rubric môn học
          </h3>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white border-b border-slate-900">
                  <th className="p-3 font-bold border-r border-slate-700 w-1/4">Tiêu chí chấm điểm</th>
                  <th className="p-3 font-bold border-r border-slate-700 w-2/5">Yêu cầu tiêu chuẩn Xuất sắc (8.1 - 10)</th>
                  <th className="p-3 font-bold border-r border-slate-700">Mức độ tự đánh giá hiện tại</th>
                  <th className="p-3 font-bold">Kế hoạch hoàn thiện / Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {rubric.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-3 font-bold border-r border-slate-200 bg-slate-50">{item.criteria}</td>
                    <td className="p-3 border-r border-slate-200 text-justify">{item.excellent}</td>
                    <td className="p-3 border-r border-slate-200 font-medium text-blue-700">{item.status}</td>
                    <td className="p-3 italic text-rose-600">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. TỔNG KẾT VÀ CAM KẾT LIÊM CHÍNH HỌC THUẬT */}
        <div className="print-section break-inside-avoid pt-2">
          <h3 className="text-lg font-bold uppercase text-slate-800 border-l-4 border-slate-800 pl-3 mb-4 bg-slate-50 py-1.5">
            VI. Tổng kết thu hoạch và Cam kết Liêm chính học thuật
          </h3>
          <div className="space-y-4 text-sm text-justify leading-relaxed">
            <p>
              Quá trình tham gia học phần và chủ động hoàn thành hệ thống bài tập thành phần này đã giúp bản thân trang bị được một tư duy số vững vàng và hệ thống hóa năng lực làm việc hiệu quả trong môi trường học thuật đại học. Các bài học thực tế, đặc biệt là tư duy tương tác hiệu quả với AI tạo sinh (Prompt Engineering) và quy tắc bảo mật an toàn thông tin, đã làm thay đổi hoàn toàn cách tiếp cận công nghệ của bản thân, biến công cụ AI thành người trợ lý đắc lực đồng hành cùng quá trình học tập kỹ thuật lâu dài.
            </p>
            <div className="bg-slate-50 p-4 border border-slate-300 rounded-lg italic text-slate-800 text-xs leading-relaxed">
              <strong>Cam kết liêm chính học thuật:</strong> 
              "Tôi cam đoan toàn bộ nội dung báo cáo, minh chứng sản phẩm số học tập được trình bày một cách tường minh trong Portfolio này hoàn toàn là thành quả tự học, tự thực hành dưới sự hướng dẫn chuyên môn của học phần. Mọi công cụ Trí tuệ Nhân tạo hỗ trợ đều được khai báo rõ ràng, tuân thủ tuyệt đối quy định chống đạo văn và liêm chính học thuật của nhà trường."
            </div>
            
            {/* Khối chữ ký ngày tháng năm chuẩn học thuật */}
            <div className="flex justify-end pt-4">
              <div className="text-center w-48 font-sans">
                <p className="text-[11px] italic text-slate-500">Hà Nội, ngày 04 tháng 06 năm 2026</p>
                <p className="font-bold text-slate-800 mt-1 text-xs">Người lập Portfolio</p>
                <div className="h-14"></div>
                <p className="font-bold text-slate-900 text-xs underline">{student.name}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
