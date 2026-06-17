import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AlertCircle, CheckCircle2, XCircle, X, Maximize2 } from 'lucide-react';

export default function EvidenceTable() {
  const { projects } = portfolioData;
  
  // State quản lý việc hiển thị Pop-up (Modal)
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  // Hàm mở pop-up
  const openPreview = (e, url, type) => {
    // Nếu là link Drive, giữ nguyên hành vi mở tab mới
    if (type === 'drive') return;
    
    // Nếu là PDF hoặc Ảnh, chặn mở tab mới và bật Pop-up
    e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  // Thành phần render liên kết động thông minh
  const EvidenceLink = ({ value, label, type }) => {
    if (value === "Sẽ cập nhật sau" || !value) {
      return <span className="px-2 py-1 text-xs font-bold bg-yellow-100 text-yellow-700 rounded">Đang chờ</span>;
    }
    if (value === "Không yêu cầu") {
      return <span className="px-2 py-1 text-xs font-bold bg-gray-100 text-gray-500 rounded">---</span>;
    }
    return (
      <a 
        href={value} 
        target="_blank" 
        rel="noreferrer" 
        onClick={(e) => openPreview(e, value, type)}
        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium underline text-sm transition-colors group"
      >
        {label}
        {type !== 'drive' && <Maximize2 size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
      </a>
    );
  };

  const StatusBadge = ({ report, img, drive }) => {
    const isReportDone = report !== "Sẽ cập nhật sau" && report !== "" && report !== "Không yêu cầu";
    const isImgDone = img !== "Sẽ cập nhật sau" && img !== "" && img !== "Không yêu cầu";
    const isDriveDone = drive !== "Sẽ cập nhật sau" && drive !== "" && drive !== "Không yêu cầu";
    
    if (isReportDone && isImgDone && isDriveDone) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded border border-green-200">
          <CheckCircle2 size={14}/> Đã nộp
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 bg-rose-50 text-rose-600 text-xs font-bold rounded border border-rose-200">
        <XCircle size={14}/> Thiếu MC
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-10">
      
      {/* KHU VỰC HIỂN THỊ POP-UP (MODAL) XEM TRƯỚC FILE */}
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-10 animate-fade-in print:hidden">
          <div className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            {/* Thanh Header của Modal */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
              </h3>
              <div className="flex items-center gap-4">
                <a href={previewData.url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline font-medium">
                  Mở thẻ mới
                </a>
                <button onClick={closePreview} className="p-1.5 bg-slate-200 hover:bg-rose-500 hover:text-white text-slate-700 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Khu vực Nhúng nội dung */}
            <div className="flex-1 bg-slate-200 flex justify-center items-center overflow-auto p-4">
              {previewData.type === 'pdf' ? (
                <iframe 
                  src={previewData.url} 
                  title="PDF Preview" 
                  className="w-full h-full rounded shadow-sm border-none bg-white"
                />
              ) : (
                <img 
                  src={previewData.url} 
                  alt="Minh chứng" 
                  className="max-w-full max-h-full object-contain rounded shadow-sm bg-white"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* GIAO DIỆN BẢNG CHÍNH */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Bảng Kiểm soát Minh chứng</h2>
        <p className="text-slate-600 text-lg">Tổng hợp tình trạng các file báo cáo, hình ảnh và link sản phẩm cần nộp.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-academic-border overflow-hidden">
        <div className="bg-blue-50 border-b border-blue-100 p-4 flex items-start gap-3">
          <AlertCircle className="text-academic-blue mt-0.5 flex-shrink-0" size={20} />
          <p className="text-sm text-academic-ink">
            <strong>Ghi chú:</strong> Click vào Báo cáo (PDF) hoặc Hình ảnh để xem nhanh ngay trên trình duyệt dưới dạng Pop-up.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold w-1/4">Bài tập / Nhiệm vụ</th>
                <th className="p-4 font-semibold">File Báo cáo</th>
                <th className="p-4 font-semibold">Ảnh Screenshot</th>
                <th className="p-4 font-semibold">Link Google Drive</th>
                <th className="p-4 font-semibold text-center">Trạng thái chung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-slate-800 text-sm leading-snug">{project.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{project.chapter}</p>
                  </td>
                  <td className="p-4"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td>
                  <td className="p-4"><EvidenceLink value={project.evidenceImg} label="Xem ảnh" type="img" /></td>
                  <td className="p-4"><EvidenceLink value={project.driveLink} label="Mở Drive" type="drive" /></td>
                  <td className="p-4 text-center">
                    <StatusBadge report={project.report} img={project.evidenceImg} drive={project.driveLink} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
